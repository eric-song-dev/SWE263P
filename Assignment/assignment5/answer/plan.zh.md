# Assignment 5 详细方案与修改记录（中文）

> 这份文档你不用交。主要是把作业要求、我的整体思路、每一处改动（旧代码 → 新代码 → 对应 rubric / WCAG 条款）都写清楚，方便你自己核对、或者答辩。

---

## 一、作业要求拆解

来自 `assignment5/requirement.txt`。

### 1.1 总体目标

把 `263PAccessibilityAssignment/home.html` 重写成符合 **WCAG 2.2 Level A 和 Level AA** 的可访问页面。视觉布局尽量贴近原稿，但允许略有差异——评分只看可访问性。允许小组分析，但代码要各自写。

### 1.2 交什么

- `home.html`
- 一份 issue list 文档（我用 markdown，放在 `issue-list.md`）
- **不要交压缩包，也不要交图片**

### 1.3 评分项（rubric）

| 项目 | 分值 | 是否必做 |
|---|---|---|
| Meets basic assignment requirements | 30 | 必做 |
| Fix table-based layout | 10 | 必做 |
| Add Headings | 3 | 必做 |
| Use Semantic Styling | 2 | 必做 |
| Add region tags | 2 | 必做 |
| Add alt text | 8 | 必做 |
| Fix contrast problems | 2 | 必做 |
| Ensure keyboard access | 4 | 必做 |
| Make link purpose clear | 2 | 必做 |
| Specify page language | 5 | 必做 |
| Add label to Select element | 2 | 必做 |
| Sensible reading order | 5 | 必做 |
| Changelog（issue list） | 25 | 必做 |
| EC: Format lists correctly | 4 | 加分 |
| EC: Make links visually distinct | 2 | 加分 |
| EC: Provide skip links | 2 | 加分 |
| EC: Replace image text with actual text | 2 | 加分 |
| **总分** | **110** | |

---

## 二、整体方案

1. **整页重写**，不是在旧代码上小修小补。原页面 305 行里全是 90 年代风格的 `<TABLE>` 嵌套布局、`<FONT>`、`BGCOLOR=`、`onFocus="blur()"`，逐条修不如重写干净。
2. **保留视觉相似度**：上面 logo + quicknav，中间三栏（左 nav / 中正文 / 右 aside），底部 footer。配色保持灰白绿调。
3. **语义化为主，CSS 为辅**：用 `<header>` `<nav>` `<main>` `<aside>` `<footer>` 切区域，用 CSS Grid 排版，不用 `<table>` 做布局。
4. **把图片文字换成真文字**：导航按钮 4 张 GIF、电话号码图——全部改成文本。装饰性的边框 / 间隔 / 子弹点图全部干掉，用 CSS 边框背景代替。
5. **加键盘可访问性**：删掉所有 `onFocus="blur()"`、`javascript:` href；加 `:focus-visible` 高对比度描边；首屏第一个可聚焦元素是 skip link。
6. **Quicknav `<select>` 加 label**：用 `<form>` 包起来，加 `<label for>`，加 `<button type="submit">Go</button>`，去掉 `onchange` 自动跳转（违反 WCAG 3.2.2）。

---

## 三、逐条修改记录

### 文件结构

```
assignment5/answer/
  home.html              ← 要交
  issue-list.md          ← 要交
  wave-tutorial.zh.md    ← 不交（教你跑 WAVE）
  plan.zh.md             ← 不交（这份）
  img -> ../263PAccessibilityAssignment/img    （软链接，方便本地预览）
```

### 改动 1：DOCTYPE + 语言

**Rubric**: Specify page language (5pts) ｜ **WCAG**: 3.1.1 Language of Page (A)

**旧** (`home.html:1-2`):
```html
<HTML>
    <HEAD>
  <TITLE>Welcome to Matt's Mats</TITLE>
```

**新**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Welcome to Matt's Mats</title>
```

加了 HTML5 DOCTYPE、`lang="en"`、`charset`、`viewport`。WAVE 不再报 "Document language missing"。

---

### 改动 2：去掉 `<TABLE>` 布局

**Rubric**: Fix table-based layout (10pts) ｜ **WCAG**: 1.3.1 (A)（阅读顺序问题单独算在改动 11 / 2.4.3 / 1.3.2）

**旧** (`home.html:133-185`，5 个嵌套表):
```html
<TABLE WIDTH=100% BORDER=0px ...><TR><TD>
  <TABLE WIDTH=800px ...>
    <TR HEIGHT=10px>
      <TD WIDTH=10px BACKGROUND=./img/border_left_top.gif>...</TD>
      <TD WIDTH=780px BACKGROUND=./img/border_top.gif>...</TD>
      ...
    </TR>
    <TR>
      <TD>
        <TABLE WIDTH=780px HEIGHT=144px ...>
          <TR><TD>...logo...</TD>...</TR>
        </TABLE>
        ...
```

**新**:
```html
<body>
  <div class="page">
    <header class="site-header">...</header>
    <section class="promo">...</section>
    <div class="layout">         <!-- CSS Grid: 170px 1fr 170px -->
      <nav class="primary-nav">...</nav>
      <main id="main">...</main>
      <aside>...</aside>
    </div>
    <footer class="site-footer"></footer>   <!-- 空 landmark：原版没 footer 文本，但保留 5 个 landmark 完整 -->
  </div>
</body>
```

```css
.layout {
  display: grid;
  grid-template-columns: 170px 1fr 170px;
  gap: 20px;
}
```

零 `<table>`。屏幕阅读器拿到的是干净的语义结构。

---

### 改动 3：加 region landmarks

**Rubric**: Add region tags (2pts) ｜ **WCAG**: 1.3.1 (A)

**旧**：没有任何 landmark。整页是一坨 `<TABLE>` + `<TD>`。

**新**：
```html
<header class="site-header">…</header>
<nav class="primary-nav" aria-label="Primary">…</nav>
<main id="main" tabindex="-1">…</main>
<aside aria-label="Featured">…</aside>
<footer class="site-footer"></footer>   <!-- 空 -->
```

5 个 landmark 各一份。`<nav>` 和 `<aside>` 都加了 `aria-label`（`"Primary"`、`"Featured"`），目的不是"区分同类多个区域"——本页确实只有各一个——而是让屏幕阅读器的 landmark 菜单里能看到一个**有名字的**区域，而不是只有 "navigation" / "complementary" 这种通用 role 名。`<section class="promo">` 也补了 `aria-label="Site promotions"`。

`<footer>` 留空：原版页面本来就没有 footer 文本，我之前给它加过一行 `© Matt's Mats. All rights reserved.` 是自己编的，已删。landmark 元素保留以维持完整的 5 个 region；空 footer 是合法 HTML，WAVE 不报错。

---

### 改动 4：加 Heading 层级

**Rubric**: Add Headings (3pts) ｜ **WCAG**: 1.3.1 (A), 2.4.6 (AA)

**旧** (`home.html:222, 244`):
```html
<p class="headline">Welcome to Matt's Mats</p>
...
<p class="subheadline">Our Environmental Commitment</p>
```

**新**:
```html
<h1>Welcome to Matt's Mats</h1>
...
<h2>Top Categories</h2>
...
<h2>Our Environmental Commitment</h2>
...
<h2>Custom Doormats</h2>
<h2>Mat of the Week</h2>
```

类别卡片里每张还各有一个 `<h3>`。层级：1 个 H1，4 个 H2，3 个 H3。屏幕阅读器现在可以靠 H 键跳标题。

---

### 改动 5：语义化标签

**Rubric**: Use Semantic Styling (2pts) ｜ **WCAG**: 1.3.1 (A)

**旧** (`home.html:173-174`):
```html
<FONT COLOR=BLACK FACE=Verdana SIZE=2>&nbsp;&nbsp;<B>Save:</B> 10% off your first order. Use code <i>10first</i></FONT>
```

**新**:
```html
<p><strong>Save:</strong> 10% off your first order. Use code <em>10first</em></p>
```

`<FONT>` 全删；`<B>` → `<strong>`，`<I>` → `<em>`；颜色字体都进 CSS。`<BODY TEXT= BGCOLOR= LEFTMARGIN=>` 也全删了。

---

### 改动 6：alt 文本

**Rubric**: Add alt text (8pts) ｜ **WCAG**: 1.1.1 Non-text Content (A)

#### 6a) Logo 啰嗦的 alt 改短

**旧** (`home.html:145`):
```html
<IMG SRC=./img/top_logo.gif WIDTH=443px HEIGHT=86px
  ALT="Beige rectangle symbolizing a doormat with black letters spelling out 'Welcome'
  above a set of yellow petal shapes and a black half circle that symbolizes the
  top half of a sunflower. This logo is followed by text in purple that says 'to
  Matt's Mats,' completing the phrase begun on the doormat, as well as being the
  name of this online portal. The text is in a purple script style with a slight
  upward slant.">
```

**新**:
```html
<a class="home-link" href="home.html" aria-label="Matt's Mats home">
  <img src="./img/top_logo.gif" width="443" height="86" alt="Matt's Mats">
</a>
```

Logo 是品牌图，`alt` 给品牌名就够了。

#### 6b) 内容图：原来当背景渲染，现在改成真 `<img>` 带 alt

**旧** (`home.html:233-235`):
```html
<div class="image" style="background: url(./img/doormat-sm.jpg) center center no-repeat #cccccc" title="image">...</div>
<div class="image" style="background: url(./img/kitchen-sm.jpg) ..." title="image">...</div>
<div class="image" style="background: url(./img/exercise-sm.jpg) ..." title="image">...</div>
```

**新**:
```html
<img src="./img/doormat-sm.jpg"  alt="A brown coir doormat at a front entry.">
<img src="./img/kitchen-sm.jpg"  alt="A padded kitchen mat in front of a stove.">
<img src="./img/exercise-sm.jpg" alt="A blue yoga mat rolled out on a wood floor.">
```

#### 6c) 装饰性图：全部删除（你确认过的方案）

旧版有十几张纯装饰图——`border_left_top.gif` 之类的边框、`marker2_w.gif` 间隔条、`blank_5x5.gif` 撑位、`top_door.gif` 装饰门、`top_logo_next*.gif` 渐变、`headline_middle.gif` 装饰勾、`mark.gif`、`morearrow*.gif`、`list_bullets.gif` 子弹点——全部干掉，改用 CSS 边框 / 背景 / `<ul>` 自带的圆点替代。HTML 更短，WAVE 也不会再喊 "spacer image"。

---

### 改动 7：对比度

**Rubric**: Fix contrast problems (2pts) ｜ **WCAG**: 1.4.3 Contrast Minimum (AA)

**旧** (`home.html:256, 277`):
```html
<TD WIDTH=150px BGCOLOR=#A9B8BF>
  <FONT COLOR=#41545D FACE=Verdana SIZE=2>&nbsp;<B>Custom Doormats</B></FONT>
</TD>
```
- `#41545D` on `#A9B8BF` ≈ **3.9:1** ❌（AA 正文要求 ≥ 4.5:1）

**新**:
```css
.aside-panel h2 {
  background: var(--brand);   /* #2d4a55 */
  color: #fff;
}
```
- 白字 on `#2d4a55` ≈ **9.5:1** ✅

| 配色 | 对比度 | 用在哪里 |
|---|---|---|
| `#1a1a1a` on `#ffffff` | **17.4:1** | 主区正文 |
| `#1a1a1a` on `#ededed` | **14.9:1** | promo 灰底 |
| `#11507a` on `#ffffff` | **8.6:1** | 正文链接 |
| `#fff` on `#2d4a55` | **9.5:1** | 右栏面板标题 |
| `#b8430a` on `#ffffff` | **5.4:1** | `:focus-visible` 描边（非文本，但 WCAG 1.4.11 要求 ≥ 3:1，过） |

全部过 AA。

---

### 改动 8：键盘可达 + 可见焦点

**Rubric**: Ensure keyboard access (4pts) ｜ **WCAG**: 2.1.1 Keyboard (A), 2.4.7 Focus Visible (AA)

#### 8a) 干掉 `onFocus="blur()"`

**旧** (出现 10+ 次，例如 `home.html:195, 201, 207, 213, 227, 228, 239, 240, 245, 265, 286`):
```html
<a href="javascript:location.href='home.html';" onFocus="blur();">
  <img name="nav_home" src=./img/nav_home.gif ...>
</a>
```

这条最毒——用户 Tab 到链接的瞬间 `blur()` 把焦点抢走。键盘用户根本无法激活。

**新**:
```html
<a href="home.html" aria-current="page">Home</a>
```

#### 8b) 加 `:focus-visible` 描边

**新**:
```css
a:focus-visible,
button:focus-visible,
select:focus-visible,
input:focus-visible {
  outline: 3px solid var(--focus);   /* #b8430a */
  outline-offset: 2px;
}
```

Tab 走到哪里，哪里就有一圈高对比度橙色描边。

#### 8c) `javascript:` href → 真 href

**旧**:
```html
<a href="javascript:location.href='home.html';">
```

**新**:
```html
<a href="home.html">
```

---

### 改动 9：链接文字描述性

**Rubric**: Make link purpose clear (2pts) ｜ **WCAG**: 2.4.4 Link Purpose (A)

**旧** (`home.html:245`):
```html
Sustainable materials <a href="../materials.html">Click here</a>.<br>
Manufacturing practices <a href="../manufacturing.html">Click here</a>.<br>
Recycling program <a href="../recycling.html">Click here</a>.
```
还有右边栏的两个 "Read More..."。

**新**:
```html
<li><a href="../materials.html">Learn about our sustainable materials</a></li>
<li><a href="../manufacturing.html">Read about our manufacturing practices</a></li>
<li><a href="../recycling.html">Join our recycling program</a></li>
...
<a class="more" href="custom.html">Read more about custom doormats</a>
<a class="more" href="survey.html">See more customer photos</a>
```

屏幕阅读器单独拿出来读也能听懂。

---

### 改动 10：Quicknav `<select>` 加 label

**Rubric**: Add label to Select element (2pts) ｜ **WCAG**: 1.3.1 (A), 3.3.2 (A), 4.1.2 (A), 3.2.2 On Input (A)

**旧** (`home.html:150-163`):
```html
<SELECT ONCHANGE="location.href = this.value;">
  <OPTION SELECTED>QUICKNAV ----&gt;
  <OPTION VALUE="../doormats.html">Doormats
  ...
</SELECT>
```

两个问题：(1) 没 `<label>`；(2) `onchange` 自动跳转——键盘用户用方向键浏览选项就会被跳走，违反 3.2.2 On Input。

**新**:
```html
<form class="quicknav" action="#" method="get">
  <label for="quicknav-select">Quick navigation</label>
  <select id="quicknav-select" name="dest">
    <option value="../doormats.html">Doormats</option>
    ...
  </select>
  <button type="submit">Go</button>
</form>
```

label 显式绑定 select；选项不再有 placeholder-style `QUICKNAV ---->`；改成用户主动点 Go 才跳。

---

### 改动 11：合理阅读顺序

**Rubric**: Sensible reading order (5pts) ｜ **WCAG**: 1.3.2 (A), 2.4.3 (A)

**旧**：表格布局决定的 DOM 顺序——header → 左侧 nav → 右侧 aside → 中间正文。屏幕阅读器会先读右栏再读正文。

**新** DOM 顺序：

```
skip link → header(logo + quicknav) → promo → primary nav → main → aside → footer
```

视觉位置靠 CSS Grid 调（左 nav / 中 main / 右 aside），DOM 顺序保持线性可读。

---

### 加分项

#### EC 1：列表正确标记（4pts）

**WCAG**: 1.3.1

**旧** (`home.html:245`):
```html
<img src="./img/list_bullets.gif" alt="bullet"> Sustainable materials <a>Click here</a>.<br>
<img src="./img/list_bullets.gif" alt="bullet"> Manufacturing practices <a>Click here</a>.<br>
<img src="./img/list_bullets.gif" alt="bullet"> Recycling program <a>Click here</a>.
```

**新**:
```html
<ul class="commit-list">
  <li><a href="../materials.html">Learn about our sustainable materials</a></li>
  <li><a href="../manufacturing.html">Read about our manufacturing practices</a></li>
  <li><a href="../recycling.html">Join our recycling program</a></li>
</ul>
```

类别区也是 `<ul class="categories">`。

#### EC 2：链接视觉可辨（2pts）

**WCAG**: 1.4.1

**旧**:
```css
#main a { text-decoration: none; color: #226C8E; }
```

**新**:
```css
a { color: var(--link); text-underline-offset: 2px; }   /* 默认带下划线 */
a:hover { text-decoration-thickness: 2px; }
```

正文链接默认下划线；nav 按钮做成块状按钮（背景 + 边框 + hover 描边），不靠颜色单一区分。

#### EC 3：Skip link（2pts）

**WCAG**: 2.4.1 Bypass Blocks

**旧**：无。

**新**:
```html
<a class="skip-link" href="#main">Skip to main content</a>
```
```css
.skip-link { position: absolute; left: -10000px; top: 8px; ... }
.skip-link:focus { left: 8px; }
```

Tab 第一下出现"Skip to main content"，Enter 跳到 `<main id="main" tabindex="-1">`。

#### EC 4：把图片里的文字换成真文字（2pts）

**WCAG**: 1.4.5 Images of Text

**旧** (`home.html:195-213`)：4 个导航项是 4 张 GIF：
```html
<a href="..."><img src=./img/nav_home.gif width=88 height=27 hspace="15" border=0></a>
<a href="..."><img src=./img/nav_shop.gif ...></a>
<a href="..."><img src=./img/nav_news.gif ...></a>
<a href="..."><img src=./img/nav_survey.gif ...></a>
```

电话号码也是张图 (`home.html:245`):
```html
<b>Got a question? Call us: </b><img src="./img/telefon_white_bg.gif" alt="1234 56789" ...>
```
（顺便说一句，原版的 `alt="1234 56789"` 跟图里实际显示的 `1 (800) M-A-T-T-M-A-T` 对不上——属于既违反 1.4.5 又违反 1.1.1 的双错。我用图里看到的真实号码替换。）

**新**：
```html
<ul>
  <li><a href="home.html" aria-current="page">Home</a></li>
  <li><a href="shop.html">Shop</a></li>
  <li><a href="news.html">News</a></li>
  <li><a href="survey.html">Survey</a></li>
</ul>
...
<p><strong>Got a question? Call us:</strong> <a href="tel:+18006288628">1&nbsp;(800)&nbsp;M-A-T-T-M-A-T</a></p>
```

电话号码现在可以复制、可以点击拨号、能被搜索引擎抓取。

---

## 四、`issue-list.md` 每一行对应 `requirement.txt` 的哪一条

| issue-list 编号 | 对应 rubric 条款 | 对应 requirement.txt 行 |
|---|---|---|
| Issue 1（DOCTYPE + lang） | Specify page language (5pts) | L74 |
| Issue 2（去掉 table 布局） | Fix table-based layout (10pts) | L58 |
| Issue 3（5 个 landmark） | Add region tags (2pts) | L64 |
| Issue 4（heading 层级） | Add Headings (3pts) | L60 |
| Issue 5（去 FONT/B/I） | Use Semantic Styling (2pts) | L62 |
| Issue 6（装饰图全删） | Add alt text (8pts) | L66 |
| Issue 7（内容图改 `<img>` + alt） | Add alt text (8pts) | L66 |
| Issue 8（logo alt 改短） | Add alt text (8pts) | L66 |
| Issue 9（nav 图 → 文字链接） | **EC: Replace image text** (2pts) | L88 |
| Issue 10（电话图 → tel: 文本） | **EC: Replace image text** (2pts，与 9 同享) | L88 |
| Issue 11（去掉 onFocus blur + 焦点描边） | Ensure keyboard access (4pts) | L70 |
| Issue 12（javascript: href → 真 href） | Ensure keyboard access (4pts，与 11 同享) | L70 |
| Issue 13（select 加 label + 去 onchange） | Add label to Select element (2pts) | L76 |
| Issue 14（Click here / Read More → 描述性文字） | Make link purpose clear (2pts) | L72 |
| Issue 15（对比度） | Fix contrast problems (2pts) | L68 |
| Issue 16（阅读顺序） | Sensible reading order (5pts) | L78 |
| Issue 17（`<br>` 伪列表 → `<ul>`） | **EC: Format lists correctly** (4pts) | L82 |
| Issue 18（链接下划线） | **EC: Make links visually distinct** (2pts) | L84 |
| Issue 19（skip link） | **EC: Provide skip links** (2pts) | L86 |
| Issue 20（`<title>` 已经描述性，保留） | 没新增分，只是说明 2.4.2 已经满足；无 rubric 对应 | — |

> Issue list 那 25 分（changelog）就是这份 `issue-list.md` 本身；basic requirements 那 30 分是 home.html 整体写得对就给。
> 注意：rubric 里"Add alt text (8pts)"被 issue 6/7/8 共享；"Ensure keyboard access (4pts)"被 issue 11/12 共享；"EC: Replace image text (2pts)"被 issue 9/10 共享——这是同一条 rubric 拆成多条独立 issue 写的，不是重复拿分。

---

## 五、自查清单

- [ ] 在浏览器里打开 `assignment5/answer/home.html`，确认页面长得跟原版差不多。
- [ ] 按 `Tab` 一路按下去，每个可点元素都有橙色描边，第一下出现 skip link。
- [ ] 把鼠标移到 Quicknav，选一项，按 Go，URL 应该带 `?dest=...`。
- [ ] 按 `wave-tutorial.zh.md` 装 WAVE 扩展跑一遍，确认 Errors=0、Contrast Errors=0。
- [ ] 上 https://validator.w3.org/ 上传 `home.html`，确认 no errors。
- [ ] 浏览器 Cmd + `+` 放大到 200%，确认文字不被截、不重叠。
- [ ] 交：只交 `home.html` 和 `issue-list.md`，**不要打包、不要交图**。
