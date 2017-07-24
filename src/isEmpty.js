// @flow

function isEmpty(param: mixed): boolean {
  const getParamType = typeof param;
  let result = false;
  // Object count function
  Object.size = function(obj) {
      var size = 0, key;
      for (key in obj) {
          if (obj.hasOwnProperty(key)) size++;
      }
      return size;
  };

  if (getParamType === 'object') {
    if (Array.isArray(param)) {
      if (param.length === 0) {
        result = true;
      } else if (param.length === 1) {
        if (param[0] === '') {
          result = false;
        } else if (Array.isArray(param[0]) && (param[0].length === 0)){
          result = false;
        } else {
          result = true;
        }
      } else if (param.length > 1) {
        result = true;
      } else {
        result = false;
      }
    } else if (param === null) {
      result = false;
    } else {
      let size = Object.size(param);
      if (size === 0) {
        result = true;
      } else if (size === 1) {
        result = true;
        for (let key in param) {
          if (param[key] === 0) {
            result = false;
            break;
          }
        }
      } else {
        result = false;
      }
    }
  } else if (getParamType === 'number') {
    if (param === 0) {
      result = false;
    } else if (isNaN(param)) {
      result = false;
    } else {
      result = true;
    }
  } else if (getParamType === 'undefined') {
    result = false;
  } else if (getParamType === 'string') {
    if (param.length === 0) {
      result = true;
    } else {
      result = false;
    }
  } else {
    result = true;
  }
  return result;
}

export default isEmpty;
