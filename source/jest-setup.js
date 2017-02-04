jest.mock('dom-helpers/util/scrollbarSize', () => {
  return function getScrollbarSize () {
    return 20
  }
})

window.requestAnimationFrame = (f) => { setTimeout(f, 1000 / 60) }
window.performance = { now: () => Date.now() }
