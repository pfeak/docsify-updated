# docsify-updated

![npm](https://img.shields.io/npm/v/docsify-updated) ![NPM](https://img.shields.io/npm/l/docsify-updated)

Add update time for each of your docsify markdown

## install

add js CDN to `index.html`

```javasciprt
<script src="https://cdn.jsdelivr.net/npm/docsify-updated@1/src/time-updater.js"></script>
```

## usage

Add javasript to `index.html`, and you can modify the content of the text field arbitrarily

```javascript
window.$docsify = {
  timeUpdater: {
    text: ">last update time: {docsify-updated}",
    formatUpdated: "{YYYY}/{MM}/{DD}",
  },
};
```

or

```javascript
window.$docsify = {
  timeUpdater: {
    text: ">最后更新时间: {docsify-updated}",
    formatUpdated: "{YYYY}/{MM}/{DD}",
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

## demo

demo: **english**

![demo1](./images/demo1.png)

demo: **chinese**

![demo2](./images/demo2.png)

demo: **another style**

![demo3](./images/demo3.png)
