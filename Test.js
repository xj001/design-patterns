const throttle = (fn, interval) => {
  let status = true;
  return (...arg) => {
    if (status) {
      fn(...arg);
      status = false;
      setTimeout(() => {
        status = true;
      }, interval);
    }
  };
};
const log = throttle(console.log, 10000);
log(1);
log(1);
