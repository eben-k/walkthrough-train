const deepClone = (obj) => {
  const objType = typeof obj;
  if (objType === 'object' && obj !== null) {
    const copiedObject = obj instanceof Array ? [] : {};
    Object.keys(obj).forEach((key) => {
      copiedObject[key] = deepClone(obj[key]);
    });
    return copiedObject;
  }
  // eslint-disable-next-line no-eval
  if (objType === 'function') return eval(obj);
  return obj;
};

module.exports = deepClone;
