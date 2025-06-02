// src/index.ts
var primitiveNames = /* @__PURE__ */ new Set([
  "Attachments",
  "Bubble",
  "BubbleList",
  "Config",
  "Typewriter"
  // 在这里添加其他组件...
]);
function isAuroraXComponent(name) {
  return primitiveNames.has(name);
}
function AuroraXResolver(options = {}) {
  const {
    prefix = "Au",
    packageName = "vue-aurora-x",
    exclude = []
  } = options;
  return (name) => {
    if (!name.startsWith(prefix))
      return;
    const componentName = name.slice(prefix.length);
    if (!isAuroraXComponent(componentName) || exclude.includes(componentName))
      return;
    return {
      // 返回组件信息
      name: `Au${componentName}`,
      // 从包中导入带前缀的组件
      from: packageName
    };
  };
}
function AuroraXNoPrefix(options = {}) {
  const {
    packageName = "vue-aurora-x",
    exclude = []
  } = options;
  return (name) => {
    if (!isAuroraXComponent(name) || exclude.includes(name))
      return;
    return {
      name,
      from: packageName
    };
  };
}
export {
  AuroraXNoPrefix,
  AuroraXResolver
};
