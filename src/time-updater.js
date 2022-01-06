// Docsify plugin default values
var defaultOptions = {
  text: ">Last Modify: {docsify-updated}",
  formatUpdated: '{YYYY}/{MM}/{DD}',
}

// Docsify plugin functions
function plugin(hook, vm) {
  text = vm.config.timeUpdater.text
  hook.beforeEach(function (content) {
    return content + '\n\n' + text
  })
}

// Docsify plugin options
window.$docsify = (window.$docsify || {})
// https://docsify.js.org/#/configuration?id=formatupdated
// https://github.com/lukeed/tinydate#patterns
window.$docsify.formatUpdated = window.$docsify["timeUpdater"] ? window.$docsify["timeUpdater"].formatUpdated : defaultOptions.formatUpdated
window.$docsify["timeUpdater"] = Object.assign(defaultOptions, window.$docsify["timeUpdater"])
window.$docsify.plugins = (window.$docsify.plugins || []).concat(plugin)

// Usage:
// window.$docsify = {
//   timeUpdater: {
//     text: ">last update time: {docsify-updated}",
//     formatUpdated: '{YYYY}/{MM}/{DD}',
//   }
// }