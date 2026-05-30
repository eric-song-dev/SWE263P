# WAVE 工具自助验证教程（中文）

> 这份文档不需要交。我（Claude）所在的环境没有浏览器，没法亲自打开 WAVE 跑你的 `home.html`，所以把整个流程写出来，你照着做一遍就能自己验证。预计 5–10 分钟。

## 为什么要跑 WAVE

作业要求里明确说：grading will use the WAVE accessibility tool. 老师那边大概率会把你的 `home.html` 丢进 WAVE 看一眼，所以你自己先跑一遍能提前发现红色 Error。

> 注意：WAVE 不是万能的。它能抓常见错误，但不能识别"链接文字够不够描述性""阅读顺序合不合理"这类需要人判断的问题。`issue-list.md` 里列出来的那些是我按 WCAG 2.2 A/AA 手工过了一遍的，不是 WAVE 跑出来的。

## 方法一：装 Chrome / Firefox / Edge 扩展（推荐，本地文件也能跑）

WAVE 官方在线版只接受公网 URL，本地 `file://` 跑不了，所以建议直接装浏览器扩展。

1. 打开 https://wave.webaim.org/extension/ ，按你用的浏览器点对应的下载链接。
   - Chrome：跳转到 Chrome Web Store，点 "Add to Chrome"。
   - Firefox：跳转到 addons.mozilla.org，点 "Add to Firefox"。
   - Edge：跳转到 Edge Add-ons，点 "Get"。
2. 装完后浏览器右上角会有一个 WAVE 图标（橙色齿轮）。
3. 在浏览器里打开本地文件：
   ```
   file:///Users/ericsong/Courses/SWE263P/Assignment/assignment5/answer/home.html
   ```
   （Cmd+O 选文件也行）
4. 点右上角 WAVE 图标。页面会被覆盖一层带图标的注释视图，左边会弹一个 Summary 面板。

## 方法二：在线版（只适合公网 URL）

如果你把 `home.html` 部署到了 GitHub Pages / Vercel / Netlify 之类的地方，就可以：

1. 打开 https://wave.webaim.org/
2. 输入框里粘公网 URL，按 Enter。
3. 等几秒，结果会以 WAVE 注释视图打开。

## 怎么看 WAVE 的报告

左边的 Summary 面板里几个图标的意思：

| 图标颜色 | 名称 | 你该怎么处理 |
|---|---|---|
| 🔴 红色 | **Errors** | WCAG 失败。必须修。**应该是 0**。 |
| 🟡 黄色 | **Alerts** | 可能有问题，需要你人工判断。比如"邻近的两个链接指向同一个 URL"——不一定是错。 |
| 🟢 绿色 | **Features** | 已经做对的可访问性特征（比如 `alt` 文本、`<label>`）。多说明做得好。 |
| 🔵 蓝色 | **Structural Elements** | 结构标签：`<h1>`、`<nav>`、`<main>` 等。看看层级合不合理。 |
| 🟣 紫色 | **ARIA** | 页面里用到的 ARIA 属性。本作业基本不用。 |
| 🔴⚫ 红黑 | **Contrast Errors** | 对比度不够。**应该是 0**。 |

### 我交的这版预期会跑出什么

- **Errors: 0** ✅
- **Contrast Errors: 0** ✅
- **Alerts**: 可能会有几个：
  - "Redundant link"——类别卡片里图片包了链接，下面的标题和"Browse …"按钮也指向同一页。WCAG 没禁止，可以忽略。
  - "Possible heading"——不太会出，但如果出了，看一眼是不是漏标了 `<h*>`。
- **Features**: 期望看到一堆绿色：alt 文本、表单标签、语言、跳转链接……
- **Structural Elements**: 应该能看到 `<header>` `<nav>` `<main>` `<aside>` `<footer>`，还有 1 个 `<h1>`、4 个 `<h2>`、3 个 `<h3>`。

## 配套检查

WAVE 之外，建议再跑两个：

### 1. HTML 验证

打开 https://validator.w3.org/#validate_by_upload ，上传 `home.html`。期望：no errors, no warnings。

### 2. 键盘检查（无工具，手动）

- 鼠标点一下页面空白处。
- 按 `Tab` 一直按到底。
- 每次焦点落在哪里都应该看得见橙色描边（`:focus-visible` outline）。
- 第一下 Tab 应该出来 "Skip to main content"。按 Enter 应该跳到主内容。
- 任何元素都不能"陷"住焦点（Tab 出不去）。

### 3. 缩放检查

浏览器 Cmd + `+` 放大到 200%。页面内容应该还能正常读，不会被截掉或互相覆盖（WCAG 1.4.4 Resize Text / 1.4.10 Reflow）。

### 4. 颜色对比度（可选，备查）

打开 https://webaim.org/resources/contrastchecker/ ，把页面里出现的几对前景/背景色挨个查一下：

- 正文 `#1a1a1a` on `#ffffff` → 17.4:1 ✅
- 链接 `#11507a` on `#ffffff` → 8.6:1 ✅
- 面板标题白字 on `#2d4a55` → 9.5:1 ✅
- 灰底 promo `#1a1a1a` on `#ededed` → 14.9:1 ✅
- 焦点描边 `#b8430a` on `#ffffff` → 5.4:1 ✅（非文本元素，WCAG 1.4.11 要求 ≥ 3:1）

所有正文都 ≥ 4.5:1，符合 1.4.3 AA。

## 跑出 Error 怎么办

按 WAVE 左边 Errors 区域的图标点一下，页面里对应的元素会高亮。常见误打：

- 红色 "Missing alternative text"：某张图忘了 `alt`，加上去就行。
- 红色 "Empty link"：链接里只有图但没文字也没 `aria-label`，给链接加 `aria-label` 或给图加 `alt`。
- 红色 "Missing form label"：表单控件没绑 `<label>`，加 `<label for="id">`。

修完保存重新点 WAVE 图标，会刷新。

## 一句话总结

装扩展 → 打开本地 `home.html` → 点 WAVE 图标 → 看左边 Summary 里 Errors 和 Contrast Errors 是不是 0。是 0 就过了。Alerts 看一眼，能解释清楚就行。
