/**
 * Intercept a function
 * @param  {Function} fn           the function need to intercept
 * @param  {Object}   interceptors interceptors configuration
 * @return {Function}              intercepted function
 */
const intercept = function(fn, interceptors) {
  return function(...args) {
    const self = this;
    if (fn._promisify) {
      const callit = function(args) {
        let promise = fn.apply(this, args);
        const successInterceptors = interceptors.success;
        if (typeof successInterceptors === 'function') {
          promise = promise.then(rst => {
            return successInterceptors(rst);
          });
        }
        const failInterceptors = interceptors.fail;
        if (typeof failInterceptors === 'function') {
          promise = promise.catch(e => {
            throw failInterceptors(e);
          });
        }
        return promise;
      };

      const configInterceptors = interceptors.config;
      if (typeof configInterceptors === 'function') {
        args = configInterceptors.apply(self, args);
      }
      if (isPromise(args)) {
        return args.then(res => {
          return callit(res);
        });
      } else {
        return callit(args);
      }
    } else {
      let originalOption = args[0];
      let option = originalOption;
      const callit = function(args) {
        ['fail', 'success', 'complete'].forEach(item => {
          const bak = args[item];
          if (typeof bak === 'function') {
            args[item] = res => {
              if (typeof interceptors[item] === 'function') {
                res = interceptors[item].call(self, res);
              }
              bak.call(self, res);
            };
          }
        });
        return fn.call(self, args);
      };

      const configInterceptors = interceptors.config;
      if (typeof configInterceptors === 'function') {
        option = configInterceptors.call(self, originalOption);
      }
      if (isPromise(option)) {
        return option
          .then(res => {
            return callit(res);
          })
          .catch(e => {
            const failInterceptors = interceptors.fail;
            if (typeof failInterceptors === 'function') {
              e = failInterceptors.call(self, e);
            }
            const failFunc = originalOption.fail;
            if (typeof failFunc === 'function') {
              failFunc.call(self, e);
            }
          });
      } else {
        return callit(option);
      }
    }
  };
};

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}
/*
 * wx API intercept
 * useage:
 * wepy.use(useIntercept)
 * wepy.intercept(wepy.wx.request, {
 *   config(params) {
 *     params.t = +new Date();
 *     return params;
 *     // return Promise.resolve(params);
 *   },
 *   success(res) {
 *     return res;
 *   },
 *   fail(e) {
 *     return e;
 *   }
 * })
 */

function install(wepy) {
  wepy.wx = wepy.wx || Object.assign({}, wx);
  wepy.intercept = intercept;
}

exports = module.exports = install;
