export const throttle = (callback, limit) => {
  let inProgress = false;

  return (...args) => {
    if (!inProgress) {
      inProgress = true;
      callback(...args);
      setTimeout(() => {
        inProgress = false;
      }, limit);
    }
  }
}

export default throttle;