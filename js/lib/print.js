define(function () {
  return function print(msg) {
    window.console.log && console.log(msg);
  };
});
