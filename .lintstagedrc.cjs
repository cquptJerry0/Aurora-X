module.exports = {
  '*.{js,jsx,ts,tsx,vue}': ['prettier --write'],
  '*.{css,scss,less}': ['prettier --write'],
  '*.{json,md,html}': ['prettier --write'],

  // 注释掉可能导致问题的严格检查
  // '*.{js,jsx,ts,tsx,vue}': ['eslint --fix --max-warnings=3'],
}
