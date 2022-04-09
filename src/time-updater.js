// Docsify plugin default values
let defaultOptions = {
  text: ">Last Modify: {docsify-updated}",
  formatUpdated: "{YYYY}/{MM}/{DD}",
  whereToPlace: "bottom"
}

// Docsify plugin functions
function plugin(hook, vm) {
  let text = vm.config.timeUpdater.text
  let whereToPlace = String(vm.config.timeUpdater.whereToPlace).toLowerCase()
  hook.beforeEach(function (content) {
    switch (whereToPlace) {
      case "top":
        return text + "\n\n" + content
      case "bottom":
        return content + "\n\n" + text
      default:
        return content + "\n\n" + text
    }
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
//     whereToPlace: "bottom" // top || bottom
//   }
// }