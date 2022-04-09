# docsify-updated

![npm](https://img.shields.io/npm/v/docsify-updated) ![NPM](https://img.shields.io/npm/l/docsify-updated)

Add update time for each of your docsify markdown

## install

add js CDN to `index.html`

```javascript
<script src="https://cdn.jsdelivr.net/npm/docsify-updated@1/src/time-updater.min.js"></script>
```

or

```javascript
<script src="https://cdn.jsdelivr.net/npm/docsify-updated@1/src/time-updater.js"></script>
```

## usage

Add javasript to `index.html`, and you can modify the content of the text field arbitrarily

```javascript
window.$docsify = {
  timeUpdater: {
    text: ">last update time: {docsify-updated}",
    formatUpdated: "{YYYY}/{MM}/{DD}",
    whereToPlace: "bottom",  // "top" or "bottom", default to "bottom"
  },
};
```

or

```javascript
window.$docsify = {
  timeUpdater: {
    text: ">最后更新时间: {docsify-updated}",
    formatUpdated: "{YYYY}/{MM}/{DD}",
    whereToPlace: "bottom",  // "top" or "bottom", default to "bottom"
  },
};
```

## time patterns

please see [https://github.com/lukeed/tinydate#patterns](https://github.com/lukeed/tinydate#patterns)

- `{YYYY}`: full year; eg: **2017**
- `{YY}`: short year; eg: **17**
- `{MM}`: month; eg: **04**
- `{DD}`: day; eg: **01**
- `{HH}`: hours; eg: **06** (24h)
- `{mm}`: minutes; eg: **59**
- `{ss}`: seconds; eg: **09**
- `{fff}`: milliseconds; eg: **555**

## nested

modify `timeUpdater.text` to nest HTML

```javascript
window.$docsify = {
  timeUpdater: {
    text: "<div align='center'>last update time: {docsify-updated}</div>",
    formatUpdated: "{YYYY}/{MM}/{DD}",
  },
};
```

![demo1](./images/demo4.png)

or

```javascript
window.$docsify = {
  timeUpdater: {
    text: "<div align='center' width='200px' style='color:gray;font-size:10px'>-------------- 最后更新时间:&emsp;{docsify-updated} --------------</div>",
    formatUpdated: "{YYYY} 年 {MM} 月 {DD} 日",
  },
};
```

![demo1](./images/demo5.png)

## location

choose where to place it by `timeUpdater.whereToPlace`

```javascript
window.$docsify = {
  timeUpdater: {
    text: ">Last Modify: {docsify-updated}",
    formatUpdated: "{YYYY}/{MM}/{DD}",
    whereToPlace: "top"  // "top" or "bottom", default to "bottom"
  },
};
```

![demo1](./images/demo6.png)

## demo

demo: **english**

```javascript
window.$docsify = {
  timeUpdater: {
    text: ">Last Modify: {docsify-updated}",
    formatUpdated: "{YYYY}/{MM}/{DD}",
  },
};
```

![demo1](./images/demo1.png)

demo: **chinese**

```javascript
window.$docsify = {
  timeUpdater: {
    text: ">最后更新时间: {docsify-updated}",
    formatUpdated: "{YYYY}/{MM}/{DD}",
  },
};
```

![demo2](./images/demo2.png)

demo: **another style**

```javascript
window.$docsify = {
  timeUpdater: {
    text: "---\nlast update time: {docsify-updated}",
    formatUpdated: "{YYYY}/{MM}/{DD}",
  },
};
```

![demo3](./images/demo3.png)
