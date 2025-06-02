var __defProp = Object.defineProperty
var __getOwnPropDesc = Object.getOwnPropertyDescriptor
var __getOwnPropNames = Object.getOwnPropertyNames
var __hasOwnProp = Object.prototype.hasOwnProperty
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true })
}
var __copyProps = (to, from, except, desc) => {
  if (
    (from && typeof from === 'object') ||
    typeof from === 'function'
  ) {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable:
            !(desc = __getOwnPropDesc(from, key)) ||
            desc.enumerable,
        })
  }
  return to
}
var __toCommonJS = (mod) =>
  __copyProps(__defProp({}, '__esModule', { value: true }), mod)

// src/index.ts
var src_exports = {}
__export(src_exports, {
  AuroraXNoPrefix: () => AuroraXNoPrefix,
  AuroraXResolver: () => AuroraXResolver,
})
module.exports = __toCommonJS(src_exports)
var primitiveNames = /* @__PURE__ */ new Set([
  'Attachments',
  'Bubble',
  'BubbleList',
  'Config',
  'Typewriter',
  // 在这里添加其他组件...
])
function isAuroraXComponent(name) {
  return primitiveNames.has(name)
}
function AuroraXResolver(options = {}) {
  const {
    prefix = 'Au',
    packageName = 'vue-aurora-x',
    exclude = [],
  } = options
  return (name) => {
    if (!name.startsWith(prefix)) return
    const componentName = name.slice(prefix.length)
    if (
      !isAuroraXComponent(componentName) ||
      exclude.includes(componentName)
    )
      return
    return {
      // 返回组件信息
      name: `Au${componentName}`,
      // 从包中导入带前缀的组件
      from: packageName,
    }
  }
}
function AuroraXNoPrefix(options = {}) {
  const { packageName = 'vue-aurora-x', exclude = [] } = options
  return (name) => {
    if (!isAuroraXComponent(name) || exclude.includes(name))
      return
    return {
      name,
      from: packageName,
    }
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 &&
  (module.exports = {
    AuroraXNoPrefix,
    AuroraXResolver,
  })
