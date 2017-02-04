'use strict';

jest.mock('dom-helpers/util/scrollbarSize', function () {
  return function getScrollbarSize() {
    return 20;
  };
});

window.requestAnimationFrame = function (f) {
  setTimeout(f, 1000 / 60);
};
window.performance = { now: function now() {
    return Date.now();
  } };