ec.util.extend = function(dst) {
  ec.util.forEach(arguments, function(obj) {
    if (obj !== dst) {
      ec.util.forEach(obj, function(value, key) {
        dst[key] = value;
      });
    }
  });

  return dst;
};

ec.util.getJson = function(successFn) {
  successFn({});
};

ec.util.forEach = function(obj, iterator, context) {
  var key;

  if (!obj) return;

  if (obj.forEach && obj.forEach !== ec.util.forEach) {
    obj.forEach(iterator, context);
  } else if (ec.util.isArray(obj)) {
    for (key = 0; key < obj.length; key++) {
      iterator.call(context, obj[key], key);
    }
  } else {
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        iterator.call(context, obj[key], key);
      }
    }
  }

  return obj;
};

ec.util.isArray = function(value) {
  return toString.call(value) === '[object Array]';
};
