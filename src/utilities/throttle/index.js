export const throttle = (callback, limit) => {
  let waiting = false;

  return (...args) => {
    if (!waiting) {
      callback(args);
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  }
}

export default throttle;