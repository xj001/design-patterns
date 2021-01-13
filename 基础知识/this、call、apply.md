## this指向

* 作为对象方法，指向该对象
* 作为构造函数，指向new的对象
* 作为普通函数，指向window，严格模式指向undefined
* 作为call，apply，bind，指向绑定的对象

## call和apply 的区别

作用一样，传参不一样，apply第二个参数是数组，call是一个个参数

## bind

使得这个函数永久绑定this

## 手写call、apply、bind

### call

```javascript
Function.prototype.myCall = function(context){
  if(typeof context === undefined || context === null){
    context = window;
  }
  context.fn = this;
  const args = [...arguments].slice(1)
  const result = context.fn(...args);
  delete context.fn;
  return result;
}
```

### apply

```javascript
Function.prototype.myApply = function(context){
  if(typeof context === undefined || context === null){
    context = window;
  }
  context.fn = this;
  const args = [...arguments][1];
  const result = context.fn(...args);
  delete context.fn;
  return result;
}
```

### bind

```js
Function.prototype.myBind = function(context){
  const _self = this;
  return function(){
    return _self.apply(context);
  }
}
```

