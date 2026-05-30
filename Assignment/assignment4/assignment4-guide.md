# SWE 263P Assignment 4 — UXAirways Mobile App 速通指南（简化版）

> **风格**：iOS 浅色极简（参照 Apple 系统应用）
> **课程**：SWE 263P · Spring 2026 · 满分 100
> **提交**：Figma 共享链接 · 截止 2026-05-10
> **工具**：Figma UI3（暗色界面）
> **总工作量**：约 5 小时
> ⚠️ **禁止用 GenAI 做线框图布局/高保真布局/原型交互**；**仅允许**用 GenAI 生成装饰性图形（Boarding Pass 背景图等），需在 Notes 页声明

---

## 目录

1. [作业概览与评分映射](#1-作业概览与评分映射)
2. [极简设计规范](#2-极简设计规范)
3. [Figma 文件结构（10 分钟）](#3-figma-文件结构10-分钟)
4. [Components：9 个核心组件（~80 分钟）](#4-components9-个核心组件80-分钟)
5. [Wireframes：8 屏（~2 小时）](#5-wireframes8-屏2-小时)
6. [Hi-Fi 页面（~60 分钟）](#6-hi-fi-页面60-分钟)
7. [Prototype 交互（~40 分钟）](#7-prototype-交互40-分钟)
8. [命名规范](#8-命名规范)
9. [Cover 页内容（3 分钟）](#9-cover-页内容3-分钟)
10. [Notes & Citations 页内容（6 分钟）](#10-notes--citations-页内容6-分钟)
11. [提交（5 分钟）](#11-提交5-分钟)
12. [最终 Checklist](#12-最终-checklist)
13. [附录 A：UI3 速查表](#13-附录-aui3-速查表)

---

## 1. 作业概览与评分映射

### 8 屏方案

| # | 屏幕 | 关键内容 | 必备项挂载 |
|---|------|----------|----------|
| 1 | **Home** | 问候 + 下一航班卡 + **大尺寸 Boarding Pass 卡** + TabBar | 多页流起点 |
| 2 | **My Trips** | 6 张航班卡（滚动）+ TabBar | **滚动列表 #1** |
| 3 | **Flight Detail** | Hero + Timeline + Rebook 按钮 | 多页流节点 |
| 4 | **Rebook** | 当前延误卡 + 3 选项 + CTA | 多页流节点 |
| 5 | **Search Flights** | 6 张候选（滚动） | **滚动列表 #2** |
| 6 | **Confirm Rebook** | 新航班卡 + Confirm + **Modal 弹窗** | **Modal** / 多页流终点 |
| 7 | **Concierge** | 实时仪表板（TSA / 步行时间 / 推送预览）+ TabBar | TabBar 第 3 tab |
| 8 | **Expenses** | 月度汇总 + 5 行报销 + TabBar | TabBar 第 4 tab |

**多页流（6 屏链路）**：`Home → My Trips → Flight Detail → Rebook → Search → Confirm`

### 评分映射（共 100 分）

| Rubric 项 | 分值 | 本方案如何拿到 |
|------|---|---|
| Meets Requirements | 50 | 8 屏 ✓ / wireframe+hi-fi 16 屏 ✓ / 6 屏多页流 ✓ / 2 个滚动列表 ✓ / 1 modal ✓ / 无登录页 ✓ |
| Wireframe | 15 | 仅黑白灰 / basic shapes / greeked text / 按钮真实英文 |
| Hi-Fi | 10 | 与 wireframe 屏幕对应 / 真实文案 / iOS 配色 / SF Symbols 图标 / 真 QR 码 |
| Interactivity | 10 | 6 屏主流程 / TabBar 全连 / Open Overlay Modal / 2 屏可滚动 / Back |
| UX Design | 10 | Signifiers / Feedback / 一致性 / 视觉层级 / Gestalt |
| Tool Usage | 5 | 9 个 Components + Variants + Component Property + Variables + Text Styles + Auto Layout |

---

## 2. 极简设计规范

### 调色板（10 个 Token，建成 Variables 后整份指南都引用）

| Token | Hex / Alpha | 用途 |
|------|-----|------|
| `bg/primary` | `#FFFFFF` | 页面底色、卡片底 |
| `bg/secondary` | `#F2F2F7` | 二级背景、灰条 |
| `label/primary` | `#000000` | 主文字、边框 |
| `label/secondary` | `#3C3C43` 60% | 副标题、说明 |
| `accent/default` | `#0A84FF` | 主按钮、链接、激活 tab |
| `success` | `#34C759` | OnTime / Boarding 状态 |
| `warning` | `#FF9500` | Delayed 状态 |
| `destructive` | `#FF3B30` | Cancelled / 取消按钮 |
| `wf/stroke` | `#000000` | Wireframe 边框 |
| `wf/fill` | `#D9D9D9` | Wireframe 占位灰 |

### 文字阶梯（5 级 Text Styles）

| 名称 | 字体 / 字重 / 字号 / 行高 |
|------|------|
| **LargeTitle** | SF Pro Bold 34 / 41 |
| **Title 2** | SF Pro Bold 22 / 28 |
| **Headline** | SF Pro Semibold 17 / 22 |
| **Body** | SF Pro Regular 17 / 22 |
| **Footnote** | SF Pro Regular 13 / 18 |

> 如果机器没装 SF Pro，用 **Inter**（Figma 自带）替代，规格一致。

### 尺寸约定

```
iPhone Frame:    393 × 852  (iPhone 15 Pro)
横向页边距:       16px
卡片圆角:        12px（标准） / 20px（FlightCard）
TabBar 高:       72px
StatusBar 高:    54px
TopNav 高:       44px
主按钮高:        50px
列表行高:        60px
间距 4-base:     4 / 8 / 12 / 16 / 20 / 24 / 32
```

---

## 3. Figma 文件结构（10 分钟）

### 3.1 新建文件 + 5 个 Pages

1. figma.com → 左上 **+** → **Design file**
2. 顶部命名：`SWE263P - Assignment 4 - UXAirways - [Your Name]`
3. **左侧 Pages 面板**点 **+** 图标，依次添加 5 个 page（默认会有一个 "Page 1"，重命名后再加 4 个）：

```
Page 1: Cover
Page 2: Components
Page 3: Wireframes
Page 4: Hi-Fi
Page 5: Notes & Citations
```

4. 双击每个 page 名字改成上面 5 个

---

### 3.2 一次性建好 Variables（5 分钟）

#### Step 1 打开 Local Variables 面板

1. 切到 **Components** 页
2. 在画布空白处右键 → 选 **Local variables**
   - 如果右键菜单没有 "Local variables"：按 **Cmd+/** 打开 Quick Actions → 输 "Local variables" → 回车
3. 弹出面板，左侧会有 "No collections yet"

#### Step 2 创建 Collection

1. 点 **+ Create collection**
2. 名字输：`iOS Tokens`
3. 回车

#### Step 3 添加 10 个 Color 变量

1. 面板顶部 **+ Create variable** 旁边的下拉箭头 → 选 **Color**
2. 第一个变量：
   - 名字：`bg/primary`（**重要**：用斜杠 `/` 分组，Figma 会自动建子目录）
   - Value：点色块 → 输入 `#FFFFFF` → 回车
3. 重复以上步骤添加剩下 9 个变量：

```
bg/primary         = #FFFFFF
bg/secondary       = #F2F2F7
label/primary      = #000000
label/secondary    = #3C3C43  (A 列输 60)
accent/default     = #0A84FF
success            = #34C759
warning            = #FF9500
destructive        = #FF3B30
wf/stroke          = #000000
wf/fill            = #D9D9D9
```

> **怎么设透明度**：色板下方有 RGBA 输入框，A 列就是 alpha（0-100 整数），输 60 即可；或直接输 8 位 hex（例 `#3C3C4399` ≈ #3C3C43 + 60%）。

#### Step 4 关闭面板

点面板右上 **×** 关闭。Variables 已经保存到这个文件里。

#### 验证清单

- [ ] Collection 名为 `iOS Tokens`
- [ ] 有 10 个 Color 变量
- [ ] `label/secondary` 的 alpha 是 60%
- [ ] 名字带 `/` 分组（左侧目录会看到 `bg`、`label`、`accent`、`wf` 4 个分组）

---

### 3.3 一次性建好 Text Styles（5 分钟）

#### 速记格式

后面 "SF Pro Bold 34 / 41 / -0.4" 这种写法：**字号 / 行高 / 字距**（单位都是 px）。

> ⚠️ **Letter spacing 必须带 px 后缀**：UI3 的 Letter spacing 字段默认是 %，光输 `-0.4` 会变成 `-0.4%`（≈ 无效果）。**正确做法：输 `-0.4px`**，Figma 会自动切换到 px 单位。

#### Step 1 打字示例

1. 切到 **Components** 页
2. 按 **T** 键 → 在画布空白处点击 → 输入 "LargeTitle"
3. 按 **Esc** 退出编辑，此时文字被选中

#### Step 2 设置第一个样式

1. 右侧 Design 面板 → **Typography** 区：
   - **字体**：SF Pro（如无则 Inter）
   - **字重**：Bold
   - **字号**：34
   - **行高**（A̲ 图标，带下划线的 A）：41
   - **字距**（|A| 图标，两条竖线夹一个 A）：**-0.4px**

#### Step 3 保存为样式

1. 选中文字（确认还选中状态）
2. 右侧 Typography 区右上有个 **▦** 四方格图标（Style 图标） → 点它
3. 弹出小面板 → 点 **+ Create style**
4. Name 输：`LargeTitle`
5. 点 **Create style** 确认

#### Step 4 重复创建其余 4 个

按相同流程创建：

| Name | 字重 | 字号 | 行高 | 字距 |
|------|------|------|------|------|
| `Title 2` | Bold | 22 | 28 | -0.3px |
| `Headline` | Semibold | 17 | 22 | -0.4px |
| `Body` | Regular | 17 | 22 | -0.4px |
| `Footnote` | Regular | 13 | 18 | -0.1px |

**速通技巧**：上一行的文字保留选中，右侧改字号 / 字重，再点 ▦ → + Create style，比每次重新打字快。

#### Step 5 删除示例文字

5 个 style 建完后，把刚才画布上的 "LargeTitle" 等示例文字删掉。

#### 验证清单

- [ ] 5 个样式都存在（右侧 Typography ▦ 图标点开能看到）
- [ ] 字距单位是 px（不是 %）
- [ ] LargeTitle 是 34 Bold

---

## 4. Components：9 个核心组件（~80 分钟）

> **核心思路**：所有 9 个组件做在 **Components** 页。每个组件做完后，去 Wireframes 页通过左侧 **Assets** tab 拖实例使用，而不是直接复制 main component。

### 4.0 通用做组件流程（脑子里记住）

1. 画好 frame / 形状 → 选中 → **Cmd+Alt+K** 创建 component
2. 加 Variant：选中 main → 右侧 Properties 区 + → Variant
3. 加 Boolean Property：选中 main → 右侧 Properties 区 + → Boolean
4. 加 Text Property：选中文字 → 右侧 ⨀ 图标（在 Content 区） → + Create property → Text

---

### 4.1 IphoneFrame（屏幕容器） · 5 分钟

#### Step 1 创建 frame

1. 切到 **Components** 页
2. 按 **F**（Frame 工具）
3. 右侧面板会出现设备预设列表 → 展开 **Phone** 分组
4. 找到 **iPhone 16 - 393 × 852**（或 iPhone 15 Pro，同尺寸）→ 在画布上点一下
5. 选中这个 frame → 双击左侧 Layers 中名字 → 改名为 `IphoneFrame`

> 如果右侧没看到设备预设：先按 V 切回选择工具取消选择，再按 F；或者直接画一个矩形，右侧手动改 W=393, H=852。

#### Step 2 配置 Fill + Clip content

1. 选中 `IphoneFrame`
2. 右侧 Design → **Fill** 区 → 点色块 → 切到 **Libraries** tab → 选 `bg/primary`
3. 右侧 Design → **Layout** 区滚到底 → 勾上 **Clip content** ✅

#### Step 3 创建 Component

1. 选中 `IphoneFrame`
2. 按 **Cmd+Alt+K**
3. 图标变成紫色菱形 ◇

#### Step 4 添加 `theme` Variant

1. 选中 main component
2. 右侧 Properties 区 → 点 **+** → 选 **Variant**
3. 弹窗：Property name = `theme`，Value = `Wireframe` → OK
4. main 外面会多出紫色虚线框（Component Set 容器）

#### Step 5 复制 Hi-Fi variant

1. 选中 `theme=Wireframe` 那份（点紫色菱形）
2. **Cmd+D** 复制 → 自动放在右边
3. 选中新复制的 → 右侧 **Current variant** 区 → 把 `theme` 值改成 `Hi-Fi`

#### Step 6 给 Wireframe 加黑边

1. 选中 `theme=Wireframe` 那份
2. 右侧 **Stroke** 区 → 点 **+**
3. 颜色：选 variable `wf/stroke`
4. Weight: `1`，Position: **Inside**（关键：Inside 才不会让 frame 超出 393×852）

#### Step 7 收尾

1. 选中外层紫色虚线框（Component Set） → 改名 `IphoneFrame`

#### 验证清单

- [ ] Component Set 名 `IphoneFrame`
- [ ] 内有 `theme=Wireframe` 和 `theme=Hi-Fi` 两份
- [ ] 都是 393×852
- [ ] Wireframe 有 1px Inside 黑边；Hi-Fi 无 stroke
- [ ] 都填 `bg/primary` (#FFFFFF) 且勾了 **Clip content**

#### 常见坑

- **Stroke 用了 Center/Outside**：会让 frame 实际占用 394×853，后续摆放差 1-2px。务必 **Inside**。
- **忘记勾 Clip content**：§7.5 滚动设置时长内容会溢出，看起来像没生效。

---

### 4.2 TabBar（底部导航） · 12 分钟

> ⚠️ **本节是 v1 backup 的简化版**：原版套 4 个 TabItem 子组件 + 双层 variant，新方案在一个 frame 里直接画 4 列，**只用一个 variant 维度 `activeTab`**，4 个 variant 控制颜色变化。心智负担减半。

#### Step 1 创建 TabBar 主 frame

1. 在 Components 页空白处按 **F**
2. 画一个 393 × 72 的矩形 frame（按住拖；尺寸不准也行，下一步精调）
3. 右侧 Design 设置：W=393, H=72
4. Layers 名字改：`TabBar`
5. Fill = variable `bg/primary`

#### Step 2 加顶部 1px 分割线（用 TabBar 自己的 Top Stroke，**不要用 L 画线**）

> ⚠️ 跟 §4.4 ListRow 一样的坑：下一步要给 TabBar 套水平 Auto Layout，如果现在用 L 画线塞进去，那条线会被 Auto Layout 当作排列子元素挤进去。改用 TabBar **自己**的 Top-only Stroke。

1. 选中 TabBar frame（外层）
2. 右侧 Design → **Stroke** 区 → 点 **+** 添加 stroke
3. 颜色：选 variable `label/secondary`，色板下方 A 列改 30（透明度 30%）
4. Weight: **1**
5. **关键**：Stroke 区右侧有一个 **田字格**形状的小图标（tooltip "Individual strokes per side"）→ 点它
6. 弹出 4 边独立设置：
   - **Top: 1**
   - **Right: 0**
   - **Bottom: 0**
   - **Left: 0**
7. 关闭面板，TabBar 顶部就有一条 hairline 分割线了

> 也可以用 0.5 px stroke 模拟 iOS hairline，但 1px 更稳。

#### Step 3 给 TabBar 套 Auto Layout（4 列等宽）

1. 选中 TabBar frame
2. 按 **Shift+A**（套 Auto Layout）
3. 右侧 Auto Layout 区设置：
   - Direction: 水平（→）
   - Spacing: 0
   - Padding: 上 0 / 右 0 / 下 0 / 左 0
   - **Resizing**：Horizontal `Fixed (393)`，Vertical `Fixed (72)`
   - **Alignment**：顶部居中（点九宫格上中位置）
4. 此时 TabBar 内还没东西，先画 4 个 TabItem 占位

#### Step 4 画 4 个 TabItem 子 frame

1. 按 **F** 在 TabBar **外面** 画一个 98 × 72 的 frame（98 ≈ 393/4），命名 `TabItem`
   - 这里**故意先在 TabBar 外画**，避免 Auto Layout 自动拉伸。等画完 4 份后再批量拖进去
2. 给这个 TabItem 套 Auto Layout（**Shift+A**）：
   - Direction: 垂直（↓）
   - Spacing: 4
   - Padding: 上 10 / 下 12 / 左 0 / 右 0
   - **Alignment**: 上居中（九宫格上中）
   - **Resizing**：Horizontal **Fixed (98)**，Vertical **Fixed (72)**（先 Fixed；§Step 6 拖进 TabBar 后，再批量改成 Horizontal **Fill container** 让 4 列均分）
3. 在 TabItem 内：
   - 按 **O**（椭圆）画一个 24×24 圆（这是 icon 占位，wireframe 阶段就用圆代替图标）→ Fill = `label/secondary`
   - 按 **T** 在下面打 "Home" → 用 **Footnote** 文字样式 → 颜色 `label/secondary`
4. 现在你有了一个 TabItem（"Home" 配圆形 icon）

#### Step 5 复制 4 份并改文字

1. 选中 TabItem → **Cmd+D** 复制 3 次，得到 4 份 TabItem
2. 双击每份的文字分别改成：`Home`、`Trips`、`Concierge`、`Expenses`

#### Step 6 把 4 份 TabItem 塞进 TabBar

1. 全选 4 个 TabItem
2. 拖入 TabBar frame（拖到 TabBar 内 Auto Layout 会自动接收）
3. 此时 TabBar 内 4 列等宽自动排列

> 如果 Auto Layout 没自动均分：选中 TabBar → Auto Layout 区右侧 →  Distribute = "Space between" 或 padding 调整；或选中 4 个 TabItem 把它们的 Horizontal resize 改 "Fill container"。

#### Step 7 创建 Component

1. 选中 TabBar frame
2. **Cmd+Alt+K**

#### Step 8 添加 `activeTab` Variant（4 个值）

1. 选中 main → Properties + → **Variant**
2. Property name: `activeTab`，Value: `home`（默认第一个 tab 激活）→ OK
3. 改名 Component Set 外层为 `TabBar`

#### Step 9 复制 4 个 variant

1. 选中 `activeTab=home` 那份
2. **Cmd+D** 复制 → 新一份 → 右侧 Current variant 改 `activeTab` = `trips`
3. 再复制两次，分别改成 `concierge` 和 `expenses`
4. 现在 Component Set 内有 4 份 TabBar variant

#### Step 10 给每个 variant 改激活 tab 的颜色

每个 variant 都要让对应的 TabItem 高亮：
- `activeTab=home` → 第 1 个 TabItem 的圆和 "Home" 文字颜色改 `accent/default`（#0A84FF）
- `activeTab=trips` → 第 2 个 TabItem 高亮
- `activeTab=concierge` → 第 3 个
- `activeTab=expenses` → 第 4 个

具体操作（以 `activeTab=trips` 为例）：
1. 进入 `activeTab=trips` variant
2. 选中第 2 个 TabItem 内的圆 → Fill 改 `accent/default`
3. 选中第 2 个 TabItem 内的 "Trips" 文字 → 颜色改 `accent/default`
4. 重复处理其它三个 variant

#### 验证清单

- [ ] Component Set 名 `TabBar`，含 4 个 variant
- [ ] 每个 variant 的对应 tab 都是 `#0A84FF`，其他 tab 是 `label/secondary`
- [ ] TabBar 高度 72，宽 393
- [ ] 顶部有 1px 分割线

#### 常见坑

- **Auto Layout 4 列不等宽**：检查 TabItem 的 Horizontal resize 是不是 "Fill container"；或检查 TabBar 是不是 "Fixed (393)"。
- **改一个 variant 的颜色，其他 variant 也跟着变了**：因为你改的是组件主形状，不是 variant 内的形状。确保进入 variant 内部点形状再改。
- **TabItem 没有自动均分**：选中 TabBar → 右侧 Auto Layout → 试着切换 "Space between" 模式。

---

### 4.3 Button（CTA 按钮） · 8 分钟

#### Step 1 画基础按钮

1. 按 **F** 画一个 200 × 50 的 frame，命名 `Button`
2. 套 Auto Layout（**Shift+A**）：
   - Direction: 水平
   - Spacing: 8
   - Padding: 左右 24 / 上下 14
   - Alignment: 居中
   - Horizontal/Vertical resize: Hug contents
3. Fill = `accent/default`
4. Corner radius = 12

#### Step 2 加文字

1. 按 **T** 在 Button 内打字 "Button"
2. 用 **Headline** 文字样式
3. 颜色 = `bg/primary`（白字）

#### Step 3 创建 Component

1. 选中 Button frame → **Cmd+Alt+K**

#### Step 4 加 `type` Variant

1. Properties + → Variant → name = `type`, value = `Primary` → OK
2. **Cmd+D** 复制 → 改成 `type=Secondary`
3. 在 Secondary variant 内：
   - Fill 改 `bg/secondary`
   - 文字颜色改 `accent/default`

#### Step 5 加 `state` Variant

1. 选中外层 Component Set
2. Properties + → Variant → name = `state`, value = `Default` → OK
3. 此时 Component Set 内的两份 (Primary/Secondary) 都自动有 `state=Default`
4. 选中 `Primary, Default` → **Cmd+D** → 改成 `state=Pressed`
   - Pressed 状态：把 fill 改成更深的 `#0066CC`（或者用 accent 的 50% 透明度模拟）
5. 选中 `Secondary, Default` → **Cmd+D** → 改成 `state=Pressed`
   - Pressed: fill 改 `#E5E5EA`（手动 hex 即可，这里不强求 variable）

#### Step 6 加 Text Property

1. 选中任意 variant 内的文字 "Button"
2. 右侧 Content 区右侧 **⨀** 图标 → **+ Create property** → **Text**
3. Property name: `label`，Value: `Button` → OK
4. 现在 Button 实例可以在右侧直接改 `label` 字段

#### Step 7 改名 Component Set

外层紫色虚线框命名为 `Button`

#### 验证清单

- [ ] Component Set 名 `Button`
- [ ] 含 4 个 variant：`Primary/Default`、`Primary/Pressed`、`Secondary/Default`、`Secondary/Pressed`
- [ ] Text Property `label` 存在
- [ ] Primary 蓝底白字 / Secondary 灰底蓝字

#### 常见坑

- **Auto Layout 后 Button 不会随文字长度变宽**：检查 Horizontal resize 是不是 "Hug contents"；如果是 "Fill container" 就会顶满父容器。
- **Text Property 不生效**：要确认是从右侧 ⨀ 图标点的（不是普通的 + Variant 按钮）。

---

### 4.4 ListRow（列表行） · 10 分钟

#### Step 1 画基础 row

1. 按 **F** 画一个 361 × 60 的 frame，命名 `ListRow`
2. Fill = `bg/primary`
3. 套 Auto Layout（**Shift+A**）：
   - Direction: 水平
   - Spacing: 12
   - Padding: 左 16 / 右 16 / 上 12 / 下 12
   - **Alignment**: 居中（九宫格中心）
   - **Resizing**：Horizontal **Fixed (361)**，Vertical **Fixed (60)**

#### Step 2 加 Leading（左侧图标占位）

1. 按 **O** 画一个 24×24 圆 → 放在 ListRow 内最左
2. Fill = `label/secondary`
3. 命名 `Leading`

#### Step 3 加 Center（中间标题区）

1. 在 Leading 右边按 **F** 画一个空 frame
   - 起始尺寸随意（比如 120×36），下一步套 Auto Layout 后会自动适配
   - 命名 `Center`
2. 套 Auto Layout：
   - Direction: 垂直
   - Spacing: 2
   - Padding: 0
   - **Alignment**：左中（九宫格中左位置）
3. **Resizing**（关键，否则 Center 不会占满中间）：
   - Horizontal: **Fill container**
   - Vertical: **Hug contents**
4. 按 **T** 在 Center 内打 "Title"
   - 用 **Body** 文字样式，颜色 `label/primary`
5. 再按 T 打 "Subtitle"
   - 用 **Footnote** 样式，颜色 `label/secondary`

> Center 不需要写死的 W/H，因为 Horizontal=Fill 让它撑满中间，Vertical=Hug 让它高度自适应内部两行文字。这是 Auto Layout 子 frame 的标准做法。

#### Step 4 加 Trailing（右侧）

1. 在最右按 **T** 打 "Value"
   - 用 **Footnote**，颜色 `label/secondary`
2. 命名 `Trailing`

#### Step 5 加底部分割线（用 ListRow 自己的 Bottom Stroke）

> ⚠️ **不能用 L 在 ListRow 内画线**：ListRow 已经是水平 Auto Layout，按 L 画的线会被 Auto Layout 当作第 4 个水平排列元素插入流里（变成一根短线卡在某个位置）。正确做法是给 ListRow **自己**加一条"只显示底边"的 Stroke。

1. 选中 ListRow（点最外层 frame，确保左侧 Layers 选中的是 `ListRow` 这一层，不是内部子元素）
2. 右侧 Design → **Stroke** 区 → 点 **+** 添加一条 stroke
3. 颜色：点色块 → Libraries → 选 `label/secondary`
   - 然后在色板下方的 RGBA 行里把 **A 列改成 30**（透明度 30%）
4. Weight: **1**
5. **关键一步**：Stroke 区域右上有一个 **田字格**形状的小图标（鼠标悬停会显示 tooltip "Individual strokes per side"）→ **点它**
6. 弹出 4 边独立设置面板（看起来像 4 个数字输入框，对应 Top/Right/Bottom/Left）：
   - **Top: 0**
   - **Right: 0**
   - **Bottom: 1**
   - **Left: 0**
7. 关闭面板，ListRow 底部就出现一条 1px 灰色 hairline 分割线

> **修复指引**：如果你之前按 L 画了线（截图里那种被 Auto Layout 卡住的 Line 1），先把它**删掉**，然后按上面步骤改用 Bottom Stroke。

#### Step 6 创建 Component

1. 选中 ListRow → **Cmd+Alt+K**

#### Step 7 加 Boolean Property

1. 选中 Leading（左侧圆形） → 右侧 **Layer** 区有一个眼睛图标 → 旁边 **⨀** 图标 → **+ Create property** → **Boolean**
2. Property name: `hasLeading`，Value: `true` → OK
3. 同样选中 Trailing 文字 → **⨀** → Boolean → `hasTrailing` = true

#### Step 8 加 Text Properties

1. 选中 "Title" 文字 → 右侧 Content 区 **⨀** → + Create property → Text
   - name: `title`, value: `Title` → OK
2. 选中 "Subtitle" → 重复 → `subtitle`
3. 选中 "Value" → 重复 → `value`

#### Step 9 改名

外层 Component 改名 `ListRow`

#### 验证清单

- [ ] ListRow 是个 Auto Layout 水平 frame
- [ ] 有 `hasLeading` / `hasTrailing` 两个 Boolean Property
- [ ] 有 `title` / `subtitle` / `value` 三个 Text Property
- [ ] 拖一个实例出来，右侧能看到 5 个属性切换器

#### 常见坑

- **Center 没占满中间**：检查 Horizontal resize 是不是 "Fill container"。
- **Boolean 隐藏后空间不收缩**：这是正常的（Auto Layout 会保留 spacing），如果想要紧凑，给 Leading/Trailing 加 "Hide when..."。
- **Text Property 名字打错**：右侧 Properties 区可以双击重命名。

---

### 4.5 FlightCard（英雄组件） · 15 分钟

#### Step 1 创建卡片 frame

1. 按 **F** 画一个 361 × 140 frame，命名 `FlightCard`
2. Corner radius = 20
3. Fill = `bg/primary`
4. 套 Auto Layout（**Shift+A**）：
   - Direction: 垂直
   - Spacing: 12
   - Padding: 20（上下左右都 20）
   - **Alignment**: 左中（九宫格中左）—— 让所有子行（Header / Route / Times / Gate）都左对齐，而不是居中堆叠
   - **Resizing**：Horizontal **Fixed (361)**，Vertical **Fixed (140)**（main component 必须 Fixed，否则各 variant 高度不一致；后面 Header / Route 子行都用 Fill container 来撑满 321 内宽 = 361 - 20×2）

#### Step 2 加 Header 行（航班号 + 状态）

1. 在 FlightCard 内按 **F** 画一个子 frame，起始尺寸随意（比如 321×24），命名 `Header`
2. Header 套 Auto Layout：
   - Direction: 水平
   - Spacing: 8
   - Padding: 0
   - **Alignment**: 左中（九宫格中左）
   - **Resizing**：Horizontal **Fill container**，Vertical **Hug contents**
3. Header 内（按以下顺序从左到右添加，Auto Layout 会自动排列）：
   - 按 **O** 画一个 24×24 圆（航司 logo 占位）, fill `wf/fill`
   - 按 **T** 打 "UA245" → **Headline** 样式
   - 加 spacer：按 **F** 画一个空 frame（起始尺寸随意，比如 1×1） → 选中 → 设 Horizontal **Fill container** / Vertical **Fixed (1)**（这就是 spacer，撑开把 badge 推到右边）
   - 按 **F** 画一个 **80×24** 的 badge frame：corner radius 8, fill `success` 18% (alpha 18)，Resizing 都 **Fixed**
   - 在 badge 内按 T 打 "On Time" → **Footnote**, 颜色 `success`
     - badge 套 Auto Layout 居中：spacing 0, padding 横 8 纵 0, Alignment 居中（九宫格中心）

#### Step 3 加 Route 行（机场代码）

1. 在 Header 下面按 **F** 画一个子 frame，起始尺寸随意（比如 321×40），命名 `Route`
2. Route 套 Auto Layout：
   - Direction: 水平
   - Spacing: 12
   - Padding: 0
   - **Alignment**: 居中（九宫格中心）
   - **Resizing**：Horizontal **Fill container**，Vertical **Hug contents**
3. Route 内（按以下顺序添加）：
   - T 打 "SFO" → **Title 2** Bold
   - 加中间的飞行线 —— **3 种做法选一个**：

     - **方案 A（最简，推荐）**：直接 T 打一个 "✈" emoji，用 **Body** 样式，颜色 `label/secondary`。Auto Layout 会自动处理位置。**完全不需要 spacer frame 和 Line**。

     - **方案 B（想要"机场—机场"那种线条感）**：用 **R 矩形**当横线（不要用 L Line，Line 不能 Fill container）：
      1. 按 **R** 画一个矩形，初始尺寸随意（比如 120×1）
      2. 命名 `FlightLine`
      3. Fill = `label/secondary`（透明度 60）
      4. **Resizing**：Horizontal **Fill container**，Vertical **Fixed (1)**
      5. （矩形是二维元素，能 Fill container；Auto Layout 会让它在 SFO 和 JFK 之间自动撑开）

     - **方案 C（想中间叠一个 ✈ 图标在线上）**：
      1. 按 **F** 画一个 spacer 子 frame（起始尺寸随意，比如 120×24），命名 `FlightLane`
      2. **不套 Auto Layout**（保持普通 frame，否则后面画的矩形会被当 layout child）
      3. FlightLane 自己作为 Route Auto Layout 的子元素，Resizing：Horizontal **Fill container**，Vertical **Fixed (24)**
      4. 在 FlightLane 内画矩形当横线 —— **必须按下面方法画，否则会出现"矩形不撑满父"的问题**：
         - 此时 FlightLane 已经被 Route 的 Auto Layout 撑开到 SFO 和 JFK 之间的距离（不再是 120 而是更宽，比如 300px）
         - **双击** FlightLane 进入它内部（光标会变成可以在 FlightLane 内画图状态）
         - 按 **R** → 从 FlightLane **左上角**拖到 **右下角**（覆盖整个 FlightLane）。这一步关键：要让矩形画出来时就 X=0, Y=0, W=FlightLane.W, H=24
         - 改 H=1, Y=12（垂直居中）
         - Fill = `label/secondary`
      5. 设 Constraints：因为 FlightLane 是普通 frame（不是 Auto Layout），选中矩形时**右侧不会显示 Resizing（Fill container/Hug/Fixed）选项**，会显示 **Constraints** —— 这是正常的
         - Horizontal **"Left and right"**（图标显示为 `L + R` 或 `↤↦`）+ Vertical **"Center"**
         - **关键认知**：Constraints 的 L+R 是"锁定**创建时**的左右边距"，不是"自动撑满"。如果矩形画出来时本身没贴住父 frame 左右两侧（比如 X=0 W=120 但父是 300），Constraints 会锁定 "Left=0, Right=180"，矩形永远留 180px 右边距 —— 看起来就像"卡在左半段不动"。所以 Step 4 的"从左上拖到右下"是不能省的。
      6. 在矩形之上叠一个 24×24 的 ✈ emoji 文字，居中对齐

> 99% 的情况选方案 A 就够了。线条感对 wireframe 阶段不重要。

> 💡 **Resizing vs Constraints 速记**：父 frame 是 **Auto Layout** → 子元素显示 **Resizing**（Fill container / Hug / Fixed）；父 frame 是 **普通 frame** → 子元素显示 **Constraints**（L / R / L+R / Center / Scale）。两者解决同一类问题（"父变化时子元素如何响应"），只是出现条件不同。如果你按某节指引画完，看不到 Resizing 选项 —— 先检查父 frame 是不是 Auto Layout。
   - T 打 "JFK" → **Title 2** Bold

#### Step 4 加 Times 行

1. 在 Route 下按 **F** 画一个子 frame，起始尺寸随意（比如 321×22），命名 `Times`
2. Times 套 Auto Layout：
   - Direction: 水平
   - Spacing: 0
   - Padding: 0
   - **Alignment**: 左中
   - **Resizing**：Horizontal **Fill container**，Vertical **Hug contents**
3. Times 内（按顺序添加）：
   - T 打 "09:30" → **Body**, 颜色 `label/secondary`
   - 加 spacer：F 画空 frame → Horizontal **Fill container**，Vertical **Fixed (1)**
   - T 打 "17:45" → **Body**, 颜色 `label/secondary`

#### Step 5 加 Gate 行

1. 在 Times 下按 T 打 "Gate B12 · Boards 09:00"
2. **Footnote**, 颜色 `label/secondary`

#### Step 6 创建 Component

1. 选中 FlightCard → **Cmd+Alt+K**

#### Step 7 加 `state` Variant（5 个）

1. Properties + → Variant → name=`state`, value=`Upcoming` → OK
2. **Cmd+D** 4 次得到 5 份，分别改 `state` 值为：`Upcoming` / `OnTime` / `Delayed` / `Boarding` / `Cancelled`

#### Step 8 给每个 variant 改 badge

进入每个 variant 改 badge 的 fill 颜色 + 文字：

| state | badge fill | badge 文字 | badge 文字颜色 |
|-------|------|------|------|
| Upcoming | `bg/secondary` | "Upcoming" | `label/secondary` |
| OnTime | `success` 18% | "On Time" | `success` |
| Delayed | `warning` 18% | "Delayed" | `warning` |
| Boarding | `accent/default` 18% | "Boarding" | `accent/default` |
| Cancelled | `destructive` 18% | "Cancelled" | `destructive` |

> 18% 透明度 = alpha 18，在 fill 色板下方 A 列输 18。

#### Step 9 加 Text Properties

1. 选中 "UA245" → **⨀** → Text → name=`flightNumber`
2. 选中 "SFO" → Text → name=`origin`
3. 选中 "JFK" → Text → name=`dest`
4. 选中 "09:30" → Text → name=`departTime`
5. 选中 "17:45" → Text → name=`arriveTime`
6. 选中 "Gate B12 · Boards 09:00" → Text → name=`gate`

#### Step 10 改名 Component Set

外层改名 `FlightCard`

#### 验证清单

- [ ] Component Set 名 `FlightCard`，5 个 variant
- [ ] 6 个 Text Property
- [ ] 每个 variant 的 badge 颜色 + 文字正确
- [ ] 圆角 20

#### 常见坑

- **Route 的横线不在中间**：把横线塞进一个空 frame，让那个 frame 居中并 Fill container。
- **Header 的 badge 不在右边**：在 Headline 和 badge 之间插一个 spacer frame（Horizontal Fill container）。
- **某 variant 改 badge 时，其他 variant 也跟着改**：确认你在 variant 内点了 badge frame 本身（不是 main component 的 badge）。

---

### 4.6 ModalSheet（弹窗） · 8 分钟

#### Step 1 创建 sheet frame

1. 按 **F** 画一个 **393 × 400** frame，命名 `ModalSheet`
2. Fill = `bg/primary`
3. **Independent corners**：右侧 Corner radius 区点旁边的 ⊟ 图标 → 切到独立模式
   - 左上、右上：28
   - 左下、右下：0
4. 套 Auto Layout：
   - Direction: 垂直
   - Spacing: 16
   - Padding: 24（上下左右）
   - **Alignment**: 顶部居中（九宫格上中）—— 这样 Grabber 会自动水平居中
   - **Resizing**：Horizontal **Fixed (393)**，Vertical **Fixed (400)**

#### Step 2 加 Grabber（顶部小灰条）

1. 在 ModalSheet 内按 **F** 画一个 **36×5** 的 frame，命名 `Grabber`
   - Corner radius: 100
   - Fill: `label/secondary`（透明度 30）
   - Resizing：Horizontal **Fixed (36)**，Vertical **Fixed (5)**
2. 因为父 ModalSheet 的 Auto Layout Alignment 是顶部居中（Step 1 已设），Grabber 会自动放在顶部居中位置，不需要额外调整

#### Step 3 加 Title

1. 在 Grabber 下 T 打 "Rebooking confirmed"
2. **Title 2** Bold
3. Resizing：Horizontal **Fill container**（让标题占满父宽度），text-align center

#### Step 4 加 Body

1. 在 Title 下 T 打 "Your assistant has been notified."
2. **Body**, 颜色 `label/secondary`
3. Resizing：Horizontal **Fill container**，text-align center

#### Step 5 加两个按钮

1. 从左侧 Assets tab 拖一个 **Button** 实例 → 放在 Body 下
   - 右侧 Properties：type=`Primary`, label=`View New Itinerary`
   - **Resizing：Horizontal Fill container**（让按钮宽度撑满父 frame 的内宽 = 393 - 24×2 = 345）
2. 再拖一个 Button 实例放在第一个按钮下
   - type=`Secondary`, label=`Done`
   - 同样 Resizing：Horizontal **Fill container**

#### Step 6 创建 Component + Variant

1. 选中 ModalSheet → **Cmd+Alt+K**
2. Properties + → Variant → `size=Half` → OK
3. **Cmd+D** → 新一份 → `size=Full`
   - Full variant 把 H 改成 852

> 这一步保留 `size` variant 主要是为了 rubric "Variants" 得分。实际作业只用 Half。

#### 验证清单

- [ ] ModalSheet 顶部圆角 28，底部 0
- [ ] 有 Grabber、Title、Body、两个 Button
- [ ] 2 个 variant：Half / Full
- [ ] 拖实例出来能用

#### 常见坑

- **Corner radius 没法独立设置**：找 corner radius 输入框旁边的小图标（⊟ 类似四角分开图），点一下切到独立模式。
- **Button 拖进来不是 Component 实例**：确保你是从 Assets 拖的，不是从 Components 页直接复制 main component（main 是紫色菱形，不能用）。

---

### 4.7 TopNav（顶部导航栏） · 12 分钟

> 这个组件用 7 屏，用 **Boolean Property** 控制 Back / Action 图标的显示，用 **Text Property** 控制标题。一次做好，整份指南省 30+ 分钟重复劳动。

#### Step 1 创建 TopNav 主 frame

1. Components 页空白处按 **F**，画一个 **393×44** frame
2. 命名 `TopNav`
3. **删除 Fill**（让 frame 透明，父屏背景透出来）：
   - 右侧 Design → **Fill** 区 → 默认有一行 `FFFFFF` fill
   - 鼠标悬停在这行 fill 最右边 → 出现 **−** 减号图标 → 点它删除
   - Fill 区变空（只剩 + 号可以重新添加）= frame 已透明
4. 套 Auto Layout（**Shift+A**）：
   - Direction: 水平
   - Spacing: 8
   - Padding: 左 16 / 右 16 / 上 0 / 下 0
   - **Alignment**: 居中（九宫格中心）
   - **Resizing**：Horizontal **Fixed (393)**，Vertical **Fixed (44)**

#### Step 2 加左侧 Back 元素

1. 在 TopNav 内按 **F** 画一个空 frame，命名 `Back`
   - 起始尺寸 **24×24**
   - Resizing：Horizontal **Fixed (24)**，Vertical **Fixed (24)**
   - **Fill: 透明**（右侧 Fill 区悬停默认 `FFFFFF` 那行 → 点 **−** 删除）
2. Back 内套 Auto Layout：水平 / spacing 4 / padding 0 / Alignment 居中
3. Back 内画一个 **24×24** 圆（按 O，fill `label/primary`）—— 这是 Back 箭头占位
   - Wireframe 阶段就用圆代替；Hi-Fi 阶段会用 SF Symbols 的 `chevron.left` 替换

#### Step 3 加中间 Title 文字

1. 在 Back 右侧按 **T** 打 "Title"
2. 用 **Headline** 文字样式（17 Semibold），颜色 `label/primary`
3. **Resizing**：Horizontal **Fill container**（让标题占满中间剩余空间），Vertical **Hug**
4. text-align: **center**

#### Step 4 加右侧 Action 元素

1. 在 Title 右侧按 **O** 画一个 **24×24** 圆，命名 `Action`
   - Fill: `label/primary`
   - Resizing：Horizontal **Fixed (24)**，Vertical **Fixed (24)**

此时 TopNav 内有 3 个直接子元素：`Back` (24×24) → `Title` (Fill container) → `Action` (24×24)。

#### Step 5 创建 Component

1. 选中 TopNav → **Cmd+Alt+K**

#### Step 6 加 `hasBack` Boolean Property

1. 选中 main component 内的 `Back` 子 frame（左侧 Layers 点 Back）
2. 右侧 **Layer** 区有一个眼睛 👁 图标 → 旁边有个 **⨀** 图标 → 点 **⨀**
3. 弹出菜单 → **+ Create property** → **Boolean**
4. 弹窗：Property name = `hasBack`，Value = `false`（默认隐藏 Back）→ **Create property**
5. 现在 Back 的可见性绑定到 `hasBack` 属性

#### Step 7 加 `hasAction` Boolean Property

1. 选中 main component 内的 `Action` 子元素（左侧 Layers 点 Action 那个圆）
2. 同样 **⨀** → + Create property → Boolean
3. Property name = `hasAction`，Value = `false` → Create property

#### Step 8 加 `title` Text Property

1. 选中 main component 内的 "Title" 文字
2. 右侧 **Content** 区（文字内容输入框）旁边有 **⨀** 图标 → 点它
3. + Create property → **Text**
4. Property name = `title`，Value = `Title` → Create property

#### Step 9 改名 Component Set

外层 Component 改名为 `TopNav`

#### 验证清单

- [ ] Component 名 `TopNav`
- [ ] 含 3 个直接子元素：Back / Title / Action
- [ ] 3 个 Property：`hasBack` (Boolean) / `hasAction` (Boolean) / `title` (Text)
- [ ] 拖一个实例到画布 → 右侧 **Properties** 区能看到 3 个属性切换器
- [ ] 切 hasBack=true 时左侧 Back 圆出现；hasAction=true 时右侧 Action 圆出现
- [ ] 改 title 字段时中间文字立刻更新

#### 常见坑

- **Title 没居中**：检查 Title 文字的 Resizing 是不是 Horizontal **Fill container**（不是 Hug），且 text-align 是 center。如果 Title 是 Hug，它只占文字宽度，靠 Auto Layout 排列，不会真正居中。
- **hasBack 隐藏后 Title 不居中而是偏左**：因为 Auto Layout 的 spacing 还在。简化方案：默认不管这个偏移（视觉上偏左 12-32px），iOS 系统也是这种感觉。完美方案：在 Back 上加 "Hide when hasBack=false" 让它从布局流移除（Figma 默认就是这种行为，所以一般没问题）。
- **找不到 Property ⨀ 图标**：UI3 里这个图标在右侧面板各个 section 的右侧（Layer 区右、Content 区右、Appearance 区右等），灰色小圆点。不是 Properties 区下面的 + 号（那个是创建 Variant）。

---

### 4.8 StatusBar（状态栏） · 5 分钟

> 8 屏全用，但内容固定不变（"9:41" + 信号/wifi/电池），所以**不做 Property，不做 Variant**，纯静态组件。

#### Step 1 创建 StatusBar frame

1. Components 页空白处按 **F**，画一个 **393×54** frame
2. 命名 `StatusBar`
3. **Fill: 透明**（右侧 Fill 区悬停默认 `FFFFFF` 那行 → 点 **−** 删除）

> StatusBar **不套 Auto Layout** —— 因为左边 "9:41" 和右边图标距离左右边距固定，绝对定位更直观。

#### Step 2 加 "9:41"

1. 在 StatusBar 内按 **T** 打 "9:41"
2. 用 **Headline** 样式（17 Semibold）
3. 颜色 `label/primary`
4. 位置 **X=24, Y=18**

#### Step 3 加右侧 3 个图标占位（信号/wifi/电池）

1. 按 **R** 画 3 个 **16×16** 矩形（wireframe 阶段用矩形代替图标）
2. Fill `label/primary`
3. 排在右上方，从右到左依次：
   - 电池：X=357, Y=20
   - WiFi：X=337, Y=20
   - 信号：X=317, Y=20
4. （Hi-Fi 阶段会用 SF Symbols 替换）

#### Step 4 创建 Component

1. 选中 StatusBar → **Cmd+Alt+K**
2. 不加 Variant，不加 Property —— 8 屏复用都是同一份内容

#### 验证清单

- [ ] Component 名 `StatusBar`，393×54
- [ ] 左边有 "9:41"
- [ ] 右边有 3 个 16×16 灰色矩形
- [ ] 拖实例进画布能正常显示

#### 常见坑

- **3 个图标太靠右溢出**：右侧最远的 X+W 不能超过 393。最右图标 X=357 + W=16 = 373，留 20px 安全边距。

---

### 4.9 HomeIndicator · 3 分钟

> iPhone 底部那条小黑条。8 屏全用，纯静态。

#### Step 1 创建 HomeIndicator

1. Components 页空白处按 **F**，画一个 **134×5** frame
2. 命名 `HomeIndicator`
3. Corner radius: **100**（让它变成圆头胶囊）
4. Fill: `label/primary`

> 也可以直接用矩形 R，效果一样。用 frame 是为了后续灵活。

#### Step 2 创建 Component

1. 选中 HomeIndicator → **Cmd+Alt+K**

#### 验证清单

- [ ] Component 名 `HomeIndicator`
- [ ] 134×5，corner radius 100
- [ ] Fill 黑色

---

### 4.10 Components 总览验证

完成后，Components 页应该有 **9 个 Component Set**：

```
1. IphoneFrame    (theme: Wireframe / Hi-Fi)
2. TabBar         (activeTab: home / trips / concierge / expenses)
3. Button         (type × state = 4 variants, Text: label)
4. ListRow        (Boolean: hasLeading/hasTrailing, Text: title/subtitle/value)
5. FlightCard     (state × 5 variants, Text: flightNumber/origin/dest/departTime/arriveTime/gate)
6. ModalSheet     (size: Half / Full)
7. TopNav         (Boolean: hasBack/hasAction, Text: title)
8. StatusBar      (无 Property)
9. HomeIndicator  (无 Property)
```

测试：去 Wireframes 页，左侧 **Assets** tab，应该都能看到这 9 个组件，拖一个进画布能正常使用。

---

## 5. Wireframes：8 屏（~2 小时）

> **核心策略**：每屏开头都告诉你"复制哪屏起步 + 改什么"，**不要从空白 frame 开始**。

### Wireframe 文字规则（按 requirement.txt rubric 严格分类）

| 类型 | 例子 | 用真实还是 greeked |
|------|------|----------|
| **Field label**（描述字段是什么）| "PASSENGER" / "SEAT" / "GATE" / "BOARDS" / "Departs" | ✅ **真实英文** |
| **Button / Nav / Tab 标签** | "Confirm Rebooking" / "My Trips" / "Home" tab | ✅ **真实英文** |
| **Field value**（informational data）| "Adam Bobrow" / "3A" / "B12" / "09:00" / "UA245" / "$345" | ❌ **greeked**（用 `Lorem` / `XXX` / `XX:XX` 占位） |
| **Description / 说明段落** | 延误说明 / 营销文案 | ❌ **greeked**（用 Lorem Ipsum） |

**为什么这样分**：requirement.txt 原文 "Use greeked text for any **informational content** (e.g. flight numbers, advertising text, descriptions, etc.)"。Field label 是 UI 结构的一部分（描述"这个位置展示什么类型信息"），不是 informational content；field value 才是 informational content。

> ⚠️ 严格按 rubric 应该按上表来。但实际评审时即使你**整份 wireframe 都用真实文案**，扣分也很有限 —— 评审主要看 wireframe 的视觉特征（黑白灰 / 基本形状 / 无 look-and-feel）。如果嫌麻烦可以全用真实，但**至少把 description 段落 greeked**（最显眼的 informational content）。

### 5.0 准备：先把 01 Home 画完整（25 分钟）

01 Home 含全部"屏幕骨架元素"（StatusBar + 内容 + TabBar + HomeIndicator），后面 7 屏都从它复制。

#### Step 1 拖 IphoneFrame 实例并 **立刻 Detach**

1. 切到 **Wireframes** 页
2. 左侧 **Assets** tab → 找 `IphoneFrame` → 拖到画布
3. 选中实例 → 右侧 `theme` = **Wireframe**（确保有黑边）
4. **关键一步：Detach instance**
   - 选中 IphoneFrame 实例
   - 按 **Cmd+Option+B** （或右键 → **Detach instance**）
   - 左侧 Layers 名字旁边的图标会从 ◇ 紫色菱形 变成 `#` 普通 frame 图标
   - **为什么必须 detach**：Component instance 是封装的，按 F 在 instance 内部画的新 frame 会被 Figma 自动放到 instance **外面**（成为 sibling 而不是 child）。Detach 后变成普通 frame，才能正常嵌套 StatusBar / TopNav / TabBar 等内部元素
5. 改名（左侧 Layers）：`01 Home`

> ⚠️ **代价 + 补偿**：detach 后失去 IphoneFrame 的 `theme=Wireframe/Hi-Fi` variant 一键切换能力。但 §6.1 Hi-Fi 阶段本来就是 **Duplicate Page** + 手动改色（不依赖 variant 切换），所以 detach 无实质损失。
>
> 后面 8 屏都按这个模式：拖 IphoneFrame 实例 → **立刻 detach** → 再画内部元素。或者更省事 —— 第 1 屏 detach 后画完所有内容，后面 7 屏直接 Cmd+D 复制 01 Home（复制出来已经是普通 frame，不需要再 detach）。

#### Step 2 套 Auto Layout（让内容垂直堆叠）

1. 选中 IphoneFrame 实例
2. **Shift+A** 套 Auto Layout
3. 设置：
   - Direction: 垂直
   - Spacing: 0
   - Padding: 0（上下左右）
   - **Alignment**: 顶部居中（九宫格上中）
   - **Resizing**：Horizontal **Fixed (393)**，Vertical **Fixed (852)**

> ⚠️ **可以跳过这一步**：IphoneFrame 是组件实例，Auto Layout 可能套不上（实例的 Auto Layout 由主组件决定）。如果套不上就**跳过**，第一屏所有元素直接用绝对定位（按下面 Step 3 起的 X / Y 坐标摆）。Auto Layout 在这里只是辅助，不是必须。

#### Step 3 拖 StatusBar 实例

1. 左侧 **Assets** tab → 找 `StatusBar` → 拖到 01 Home 内
2. 选中实例 → 右侧 Position 设 **X=0, Y=0**
3. 完事（StatusBar 没有 Property 要改）

#### Step 4 画 Home 内容区

01 Home 内容（依次从上往下）：

```
1. LargeTitle "Hi, Adam"               X=16, Y=70
2. Subtitle "Your next flight"         X=16, Y=110, 用 Body 样式
3. FlightCard 实例 (state=Upcoming)    X=16, Y=148, H=140
4. BoardingPass Card (放大版)          X=16, Y=304, H=380, W=361  ← 占主视觉
```

> **方案变更说明**：原 Home 中段是 4 个 QuickAction（Boarding Pass / Rebook / Concierge / Expenses），UX 不佳（"假入口"跟 TabBar 重复）。后改为 BoardingPass + GroupedList，但 GroupedList 也跟 TabBar Concierge / Expenses 入口重复。**最终方案**：删除 GroupedList，把 BoardingPass Card 放大到主视觉位置（H=380，QR 码 200×200），完全 Apple Wallet 风格 —— 开 app 就直接看到大尺寸登机牌，扫码即可登机。

具体步骤：

**4.1 加大标题**
1. T 打 "Hi, Adam" → **LargeTitle**
2. 位置 X=16, Y=70

**4.2 加副标**
1. T 打 "Your next flight"
2. 用 **Body** 样式
3. 颜色 `label/secondary`
4. 位置 X=16, Y=110

**4.2.1 加 Avatar 占位（右上角）**
1. 按 **O** 画一个 **56×56** 圆，命名 `Avatar`
2. 位置 **X=321, Y=70**（= 393 - 16 边距 - 56 头像宽，与 LargeTitle "Hi, Adam" 顶部对齐）
3. Fill `wf/fill`（#D9D9D9 占位灰）
4. Hi-Fi 阶段会替换为真实头像（见 §6.6）

> **为什么加 Avatar**：iOS 标准 Home 屏设计（Apple Music / Mail / Notes 都有右上角用户头像入口）。Hi-Fi 阶段加真实头像让视觉显著提升，符合 rubric "use images" 要求。

**4.3 加 FlightCard**
1. 左侧 Assets → 拖 `FlightCard` → 放 X=16, Y=148
2. 右侧 state=`Upcoming`
3. Text Property 内容用 greeked: flightNumber="UA245", origin="SFO", dest="JFK"...

**4.4 加 BoardingPass Card（放大版，主视觉）**
1. 按 **F** 画一个 **361×380** frame，位置 **X=16, Y=304**，命名 `BoardingPass`
2. Corner radius 12, fill `bg/primary`, stroke 1 `wf/stroke`（wireframe 阶段用边框区分卡片）
3. **不套 Auto Layout**（卡片设计感强，绝对定位更直观）
4. 内部分上下两半 —— 上半 grid 套 Auto Layout 自动排版，下半 QR 大方块绝对定位：

   **上半 (Y=0~120)：2 列 × 2 行 grid**

   按以下嵌套结构画：

   ```
   UpperHalf (Auto Layout 垂直, spacing 12, padding 20)
     ├── Row1 (Auto Layout 水平, spacing 20)
     │   ├── Cell-Passenger ("PASSENGER" + "Lorem Ipsum")
     │   └── Cell-Gate ("GATE" + "XXX")
     └── Row2 (Auto Layout 水平, spacing 20)
         ├── Cell-Seat ("SEAT" + "XX")
         └── Cell-Boards ("BOARDS" + "XX:XX")
   ```

   操作精简版：
   - UpperHalf: 在 BoardingPass 内按 F 画 **361×120**, X=0 Y=0, Auto Layout 垂直 / spacing 12 / padding 20 / Resizing Fixed×Fixed
   - Row1: AL 水平 / spacing 20 / Padding 0 / Resizing H Fill container, V Hug
   - Cell-Passenger: AL 垂直 / spacing 4 / padding 0 / Resizing H Fill container, V Hug
     - 文字: "PASSENGER" (Footnote, label/secondary) + "Lorem Ipsum" (Headline, label/primary)
   - Cell-Gate: 同结构, 文字 "GATE" / "XXX"
   - Row2 Cmd+D 自 Row1, 文字改 "SEAT" / "XX" 和 "BOARDS" / "XX:XX"

   **中间分隔线 (Y=120)**: L 画横线 (X=20, Y=120)→(X=341, Y=120), stroke 1 dashed, 颜色 `wf/stroke`

   **下半 QR (Y=120~380, 共 260px 高)**:
   - F 画 **200×200** frame, fill `label/primary`（黑方块）
   - 命名 `QR`
   - 位置：水平居中 X=(361-200)/2 ≈ **80**, 垂直居中 Y=120 + (260-200)/2 = **150**
   - Hi-Fi 阶段会用 QR Code Generator 插件生成真二维码替换

> ⚡ **速通**：你之后在 §5.2 (03 Flight Detail) 还会画一个稍小版本的 BoardingPass (H=200)。两者结构相同，只是 QR 大小不同。**建议**：先在 01 Home 画完大版本，§5.2 直接 Cmd+C 复制 BoardingPass frame → 进 03 Flight Detail → 调整 H=200 + QR 缩到 96×96。

> **方案变更：删除原 GroupedList**：原方案在 BoardingPass 下面还有 3 行 ListRow（Travel Tips / Lounge / Apple Watch），但这些功能跟 TabBar 入口重复。**最终方案**：删除 GroupedList，让 BoardingPass 占主视觉。如果之前画过 GroupedList，删除即可。

#### Step 5 画 TabBar

1. Assets → 拖 `TabBar` → 放 X=0, Y=748（= 852 - 72 - 32 home indicator 空间）
2. 右侧 activeTab=`home`

#### Step 6 拖 HomeIndicator 实例

1. 左侧 **Assets** tab → 找 `HomeIndicator` → 拖到 01 Home 内
2. 选中实例 → 右侧 Position 设：水平居中 **X=130**（=(393-134)/2）, **Y=839**

#### Step 7 验证 Home

- [ ] frame 名 `01 Home`
- [ ] IphoneFrame theme=Wireframe
- [ ] 全屏元素都是黑/白/灰（无彩色）
- [ ] LargeTitle "Hi, Adam" 在顶部
- [ ] **Avatar 56×56 圆形占位**（X=321, Y=70, 右上角）
- [ ] FlightCard 实例存在 (Y=148, H=140)
- [ ] **BoardingPass Card 大尺寸** (Y=304, H=380, 含 4 字段 + dashed line + 200×200 QR 占位)
- [ ] **无 GroupedList**（已删除）
- [ ] TabBar activeTab=home
- [ ] HomeIndicator

---

### 5.1 Screen 2: My Trips（滚动列表 #1） · 15 分钟

**复制谁起步**：从 **01 Home** 整屏 Cmd+D 一份，改名 `02 My Trips`。

#### Step 1 删除不需要的

1. 删除 LargeTitle "Hi, Adam"
2. 删除副标 "Your next flight"
3. 删除 FlightCard
4. 删除 BoardingPass Card

保留：StatusBar / TabBar / HomeIndicator

#### Step 2 拖 TopNav 实例

1. 左侧 **Assets** tab → 找 `TopNav` → 拖到 02 My Trips 内
2. 选中实例 → 右侧 Position 设 **X=0, Y=54**（StatusBar 下方）
3. 右侧 **Properties** 区改 3 个属性：
   - `hasBack` = **false**（My Trips 是 root 页，无 Back）
   - `hasAction` = **true**（右侧 filter 图标）
   - `title` = **"My Trips"**

#### Step 3 加 Segmented Control（两段）

1. 在 TopNav 下按 **F** 画 **361×32** frame, 位置 X=16, Y=110, 命名 `Segmented`
2. Corner radius 8, fill `bg/secondary`
3. Segmented 套 Auto Layout：
   - Direction: 水平
   - Spacing: 1
   - Padding: 2（上下左右都 2）
   - Alignment: 居中（九宫格中心）
   - **Resizing**：Horizontal **Fixed (361)**，Vertical **Fixed (32)**
4. 内放 2 个 SegmentItem 子 frame：
   - 起始尺寸 **180×28**，每个套 Auto Layout：居中 / padding 0 / Resizing Horizontal **Fill container**（让 2 个均分父宽度）+ Vertical **Fill container**
   - 第 1 个：fill `bg/primary`（激活态）, corner radius 6
     - 内 T 打 "Upcoming" → **Footnote** Semibold, 颜色 `label/primary`，text-align center
   - 第 2 个：**Fill 透明**（右侧 Fill 区悬停默认 fill 那行 → 点 **−** 删除）
     - 内 T 打 "Past" → **Footnote**, 颜色 `label/secondary`，text-align center

#### Step 4 加 6 张 FlightCard（触发滚动）

1. 在 Segmented 下按 **F** 画一个空 frame，起始尺寸随意（先 361×400），命名 `TripList`
   - 位置：X=16, Y=158
2. 套 Auto Layout：
   - Direction: 垂直
   - Spacing: 12
   - Padding: 上 0 / 右 0 / **下 120** / 左 0 ⚠️ **关键：底部 120 让最后一张卡能滚到 TabBar 上方**
     - 操作：Padding 默认统一 → 点旁边 **⊟ 田字格图标**切到独立模式 → Bottom 输 120
     - 120 ≈ TabBar 72 + HomeIndicator 34 + 缓冲 14
   - Alignment: 顶部居中
   - **Resizing**：Horizontal **Fixed (361)**，Vertical **Hug contents**（让 frame 高度随内部 6 张卡片自动撑高，超出屏幕高度，§7.5 会变成可滚动）
3. 拖一个 FlightCard 实例进 TripList
4. **Cmd+D 5 次**，得 6 张 FlightCard
5. 改每张的 state（混合用 Upcoming / OnTime / Delayed）+ Text Property（flightNumber 用不同的航班号，比如 UA245 / DL122 / AA88 / UA567 / DL909 / AA214）

> **如果你之前已经 Padding 0 画完了**：选中 TripList → 修改 Padding bottom 改成 120 即可（不需要重画）

#### Step 5 改 TabBar

1. 选中 TabBar 实例 → activeTab=`trips`

#### Step 6 验证

- [ ] frame 名 `02 My Trips`
- [ ] TopNav 标题 "My Trips"
- [ ] Segmented Control 2 段
- [ ] 6 张 FlightCard 实例
- [ ] TripList 总高度 > 852 - StatusBar - TopNav - Segmented - TabBar - HomeIndicator（≈ 522px），8×140+7×12=1204px > 522，✓ 会触发滚动
- [ ] TabBar activeTab=trips

> **滚动设置在 §7.5 统一做**，这里不用动。

---

### 5.2 Screen 3: Flight Detail · 18 分钟

**复制谁起步**：从 **02 My Trips** Cmd+D 一份，改名 `03 Flight Detail`。

#### Step 1 删除不需要的

1. 删除 Segmented Control
2. 删除 TripList（含 6 张 FlightCard）
3. **删除 TabBar**（详情页通常无 tab）
4. 保留：StatusBar / TopNav / HomeIndicator

#### Step 2 改 TopNav Property

1. 选中 TopNav 实例（从 02 复制带过来的）
2. 右侧 **Properties** 区改：
   - `hasBack` = **true**（Detail 页需要 Back 返回）
   - `hasAction` = **false**（不需要右侧操作图标）
   - `title` = **"UA245"**

#### Step 3 加 Hero 区域

1. TopNav 下按 **F** 画一个空 frame，起始尺寸 **361×80**，位置 X=16, Y=110，命名 `Hero`
2. 套 Auto Layout：
   - Direction: 垂直
   - Spacing: 8
   - Padding: 0
   - Alignment: 左中
   - **Resizing**：Horizontal **Fixed (361)**，Vertical **Hug contents**
3. T 打 "SFO ✈ JFK" → **LargeTitle**（也可以用 Title 2 让标题更克制）
4. T 打 "Mon, May 12 · 09:30 → 17:45" → **Body**, 颜色 `label/secondary`

#### Step 4 加 Boarding Pass Card

1. 在 Hero 下按 **F** 画 **361×200** frame, 位置 X=16, Y=210, 命名 `BoardingPass`
2. Corner radius 12, fill `bg/primary`, stroke 1 `wf/stroke`（wireframe 阶段用边框区分卡片）
3. **不套 Auto Layout**（这屏内容是设计感强的卡片，绝对定位更直观）
4. 内部分上下两半 —— 上半 grid 套 Auto Layout 自动排版，下半 QR 用绝对定位：

   **上半：2 列 × 2 行 grid（用嵌套 Auto Layout 自动排版，免去手动算坐标）**

   结构：
   ```
   UpperHalf (Auto Layout 垂直 → 2 行)
     ├── Row1 (Auto Layout 水平 → 2 cell)
     │   ├── Cell-Passenger (Auto Layout 垂直: label + value)
     │   └── Cell-Gate
     └── Row2 (Auto Layout 水平 → 2 cell)
         ├── Cell-Seat
         └── Cell-Boards
   ```

   操作步骤：

   **a. 画外层 UpperHalf**
   1. 在 BoardingPass 内按 **F** 画一个空 frame，命名 `UpperHalf`
   2. 位置 X=0, Y=0，起始尺寸 361×100
   3. 套 Auto Layout：
      - Direction: **垂直**
      - Spacing: **12**
      - Padding: **20**（上下左右）
      - Alignment: 左中
      - Resizing：Horizontal **Fixed (361)**，Vertical **Fixed (100)**

   **b. 画第 1 行 Row1（含 2 个 cell）**
   1. 在 UpperHalf 内按 **F** 画一个空 frame `Row1`
   2. 套 Auto Layout：
      - Direction: **水平**
      - Spacing: **20**（两 cell 间的横向间距）
      - Padding: 0
      - Resizing：Horizontal **Fill container**，Vertical **Hug**
   3. 在 Row1 内按 **F** 画 `Cell-Passenger`：
      - 套 Auto Layout 垂直 / spacing 4 / padding 0
      - Resizing：Horizontal **Fill container**（让两 cell 均分 Row1 宽度），Vertical **Hug**
      - 内放 2 个文字：
        - 第 1 行：T 打 "PASSENGER" → **Footnote** / `label/secondary`
        - 第 2 行：T 打 "Lorem Ipsum" → **Headline** / `label/primary`
   4. **Cmd+D** 复制 `Cell-Passenger` → 在 Row1 内得到 `Cell-Passenger 2` → 改名为 `Cell-Gate`：
      - 文字改成 "GATE" / "XXX"

   **c. 画第 2 行 Row2（含 2 个 cell）**
   1. 选中 Row1 → **Cmd+D** 复制一份在 UpperHalf 内 → 改名 `Row2`
   2. 进 Row2，分别改两个 cell：
      - `Cell-Seat`：文字 "SEAT" / "XX"
      - `Cell-Boards`：文字 "BOARDS" / "XX:XX"

   > **rubric 友好的文字混合**：label 真实英文（"PASSENGER" / "GATE" / "SEAT" / "BOARDS" 是字段描述，不是 informational content）+ value greeked 占位（"Lorem Ipsum" / "XXX" / "XX:XX"，因为这些是真实数据位置）

   **中间分隔线 (Y=100)**：

   - 按 **L** 画一条横线，从 (X=20, Y=100) 到 (X=341, Y=100)（长度 321 = 361 - 20×2）
   - Stroke: 1px, 颜色 `wf/stroke`
   - **Dashed**：右侧 Stroke 区有 **3 个图标（Solid / Dashed / Custom）**，选 **Dashed** → Dash gap 输 4 / 4

   **下半 (Y=100~200)：QR 码占位**

   - 按 **F** 画一个 **96×96** frame，命名 `QR`
   - Fill: `label/primary`（黑方块）
   - 位置：水平居中 X=(361-96)/2 ≈ **132**, Y=**120**
   - Hi-Fi 阶段会用 Figma "QR Code Generator" 插件生成真二维码替换

#### Step 5 加 Timeline（4 行 ListRow）

1. 在 BoardingPass 下按 **F** 画一个空 frame, 起始尺寸 **361×240** (= 60×4)，位置 X=16, Y=420, 命名 `Timeline`
2. 套 Auto Layout：
   - Direction: 垂直
   - Spacing: 0
   - Padding: 0
   - Alignment: 顶部居中
   - **Resizing**：Horizontal **Fixed (361)**，Vertical **Hug contents**
3. 在 Timeline 内拖 4 个 ListRow 实例（位置由父 Auto Layout 自动管理，4 行依次堆叠），每行设置：
   - "Boards" / value="09:00"
   - "Departs" / value="09:30"
   - "Arrives" / value="17:45"
   - "Gate" / value="B12"
4. 每行 hasLeading=false, hasTrailing=true, subtitle=""

#### Step 6 加 CTA 按钮

1. 左侧 Assets → 拖一个 Button 实例进 03 Flight Detail（直接子，不在 Timeline 内）
2. type=Primary, label="Rebook this Flight"
3. 位置 **X=16, Y=770**, W=361, H=50（iOS 标准 floating CTA 位置：吸底，距离 HomeIndicator 顶部 ~17px 安全 padding）

> **iOS 标准做法**：CTA Button **固定在屏幕底部**（不跟内容紧贴），跟 Timeline 之间会有 ~110px 空白是正常的。Mail / Settings 等系统应用都这种模式。

#### Step 7 验证

- [ ] frame 名 `03 Flight Detail`
- [ ] TopNav 有 Back + 标题 "UA245"
- [ ] Hero / Boarding Pass / Timeline / Button 都存在
- [ ] **无 TabBar**

---

### 5.3 Screen 4: Rebook · 12 分钟

**复制谁起步**：从 **03 Flight Detail** Cmd+D，改名 `04 Rebook`。

#### Step 1 改 TopNav Property

1. 选中 TopNav 实例 → 右侧 Properties 区改：
   - `title` = **"Rebook Flight"**
   - `hasBack` 保持 true（从 03 继承），`hasAction` 保持 false

#### Step 2 删除多余 + 改 Hero

1. 删除 Hero（"SFO ✈ JFK"）
2. 删除 Boarding Pass
3. 删除 Timeline
4. 保留 Button（待会改文字）

#### Step 3 加当前延误航班卡

1. 在 TopNav 下按 **F** 画一个空 frame, 起始尺寸 **361×220**, 位置 X=16, Y=110, 命名 `Status`
2. 套 Auto Layout：
   - Direction: 垂直
   - Spacing: 12
   - Padding: 0
   - Alignment: 左中
   - **Resizing**：Horizontal **Fixed (361)**，Vertical **Hug contents**
3. 拖一个 FlightCard 实例进 Status，state=`Delayed`
   - 改 Text Property: flightNumber="UA245", origin="SFO", dest="JFK", gate="Delayed by 90 min"
4. 在 FlightCard 下 T 打 greeked Lorem Ipsum 一段（模拟说明文字）
   - **Body**, 颜色 `label/secondary`

#### Step 4 加 3 个选项 ListRow

1. 在 Status 下按 **F** 画一个空 frame，起始尺寸 **361×180**（= 60×3），命名 `Options`
2. Options 套 Auto Layout：
   - Direction: 垂直
   - Spacing: 0
   - Padding: 0
   - Alignment: 顶部居中
   - **Resizing**：Horizontal **Fixed (361)**，Vertical **Hug contents**
3. 在 Options 内拖 3 个 ListRow 实例：
   - "Find earlier flight" / hasLeading=true / hasTrailing=true / value=""
   - "Find later flight" / hasLeading=true / hasTrailing=true / value=""
   - "Cancel & refund" / hasLeading=true / hasTrailing=true / value=""

#### Step 5 改 CTA 按钮

1. 按钮 label = "Find Alternatives"

#### Step 6 验证

- [ ] frame 名 `04 Rebook`
- [ ] TopNav 标题 "Rebook Flight" + Back
- [ ] FlightCard Delayed 状态
- [ ] 3 行 ListRow
- [ ] 按钮 "Find Alternatives"

---

### 5.4 Screen 5: Search Flights（滚动列表 #2） · 12 分钟

**复制谁起步**：从 **02 My Trips** Cmd+D，改名 `05 Search Flights`。

#### Step 1 改 TopNav Property

1. 选中 TopNav 实例 → 右侧 Properties 区改：
   - `hasBack` = **true**（从 02 继承的是 false，改成 true）
   - `hasAction` 保持 true（从 02 继承）或改 false（看你要不要 filter 图标，可有可无）
   - `title` = **"Search Flights"**

#### Step 2 **删除 TabBar**

（多页流中间页面无 tab）

#### Step 3 改 Segmented Control 段名

1. 第 1 段："Sort: Time"
2. 第 2 段："Sort: Price"

#### Step 4 改 FlightCard 内容

1. 6 张 FlightCard 已经存在
2. 全部改成 state=`Upcoming`（候选航班还未发生）
3. flightNumber 用替代航班号: UA877 / DL455 / AA512 / UA988 / DL101 / AA66
4. departTime 设不同时间: 11:25 / 12:40 / 14:15 / 16:00 / 18:30 / 20:45

#### Step 5 验证

- [ ] frame 名 `05 Search Flights`
- [ ] 无 TabBar
- [ ] 6 张 FlightCard 都是 Upcoming
- [ ] Segmented 改成 Sort

---

### 5.5 Screen 6: Confirm Rebook · 15 分钟

**复制谁起步**：从 **03 Flight Detail** Cmd+D，改名 `06 Confirm Rebook`。

#### Step 1 改 TopNav Property

1. 选中 TopNav 实例 → 右侧 Properties 区改：
   - `title` = **"Confirm Rebook"**
   - `hasBack` 保持 true，`hasAction` 保持 false

#### Step 2 改 Hero

1. T 改成 "UA877 · 11:25"
2. 副标改 "Departure changed by +1h 55m"

#### Step 3 把 Boarding Pass 换成 FlightCard

1. 删除原来位置 X=16, Y=210 的 Boarding Pass frame（含里面所有内容）
2. 左侧 Assets → 拖一个 FlightCard 实例进 06 Confirm Rebook，放在原 BoardingPass 的位置：
   - 位置 **X=16, Y=210**
   - state = `Upcoming`
3. 右侧 Properties 改 Text（参考附录 C 占位符）：
   - flightNumber = `XX0000`
   - origin / dest / departTime / arriveTime / gate 全套占位

#### Step 4 改 Timeline 为 "What Changes"

1. Timeline 现有 4 行 ListRow，改成：
   - "Departure" / value="11:25 (was 09:30)"
   - "Arrival" / value="19:40"
   - "Aircraft" / value="A321"
   - "Seat" / value="3A"

#### Step 5 改 CTA

1. 按钮 label="Confirm Rebooking"

#### Step 6 弹窗 Modal —— 暂不在这屏画

> **重要**：Modal 不画在 06 Confirm Rebook frame 里。§7.4 我们用 **Open Overlay** 触发一个独立的 ModalSheet frame，原型上点 Confirm 会自动弹出。
>
> 这里只需要确认 ModalSheet 组件已在 Components 页建好（§4.6）。

#### Step 7 验证

- [ ] frame 名 `06 Confirm Rebook`
- [ ] 内容是新航班 UA877
- [ ] 按钮 "Confirm Rebooking"

---

### 5.6 Screen 7: Concierge · 12 分钟

> **方案变更说明**：原方案这屏是 "Boarding Pass"，但 Boarding Pass 已经搬到 01 Home 直接展示（类似 Apple Wallet）。这屏改为 **Live Concierge** —— 实时旅行助手仪表板，让 TabBar 第 3 tab 真正能用。

**复制谁起步**：从 **02 My Trips** Cmd+D（不是 03，因为 Concierge 是 root tab，类似 02），改名 `07 Concierge`。

#### Step 1 改 TopNav Property

1. 选中 TopNav 实例 → 右侧 Properties 区改：
   - `hasBack` = **false**（root tab，无 Back）
   - `hasAction` = **false**（不需要右侧操作）
   - `title` = **"Concierge"**

#### Step 2 删除多余

1. 删除 Segmented Control（02 复制带过来的）
2. 删除 TripList（含 6 张 FlightCard）

保留：StatusBar / TopNav / TabBar / HomeIndicator

#### Step 3 加 Hero 副标

1. 在 TopNav 下按 **F** 画一个空 frame，起始尺寸 **361×40**，位置 **X=16, Y=110**，命名 `Hero`
2. 套 Auto Layout：垂直 / spacing 4 / padding 0 / Alignment 左中 / Resizing H Fixed (361) V Hug
3. T 打 "Live updates for your trip" → **Body**, 颜色 `label/secondary`

#### Step 4 加 4 行实时数据 ListRow

1. 在 Hero 下按 **F** 画一个父 frame `LiveData`：
   - 起始尺寸 **361×240**（= 60×4）
   - 位置 **X=16, Y=170**
   - Corner radius 12, fill `bg/primary`, stroke 1 颜色 `label/secondary` (alpha 30) —— hairline border
   - 套 Auto Layout：垂直 / spacing 0 / padding 0 / Alignment 顶部居中 / Resizing H Fixed (361) V Hug
2. 在 LiveData 内拖 4 个 ListRow 实例：
   - Row 1: title=`TSA Wait Time`, hasLeading=true, hasTrailing=true, value=`XX min`, subtitle=""
   - Row 2: title=`Walk to Gate`, value=`X min`
   - Row 3: title=`Lounge to Gate`, value=`X min`
   - Row 4: title=`Boarding starts in`, value=`XX min`

#### Step 5 加推送预览卡

1. 在 LiveData 下按 **F** 画一个 frame `Notification`：
   - 起始尺寸 **361×80**, 位置 **X=16, Y=426**
   - Corner radius 12, fill `bg/secondary`（用浅灰背景模拟通知样式）
   - 套 Auto Layout：垂直 / spacing 4 / padding 16 / Alignment 左中 / Resizing H Fixed (361) V Hug
2. 内放 2 行文字：
   - T 打 `Gate change notification` → **Headline**, 颜色 `label/primary`
   - T 打 `Lorem ipsum dolor sit amet, consectetur adipiscing.` → **Footnote**, 颜色 `label/secondary`

#### Step 6 改 TabBar

1. 选中 TabBar 实例 → activeTab=`concierge`

#### Step 7 验证

- [ ] frame 名 `07 Concierge`
- [ ] TopNav 标题 "Concierge"，无 Back
- [ ] LiveData 4 行 ListRow 显示实时数据
- [ ] 推送预览卡（浅灰背景区分）
- [ ] TabBar activeTab=concierge

#### 常见坑

- **从 03 复制起步**会导致 TopNav 带 Back（因为 03 hasBack=true），改 hasBack 比较麻烦。**建议从 02 起步**（02 hasBack=false 已经对了）。
- **TripList 没删干净**：从 02 起步会带过来 SegmentedControl 和 6 张 FlightCard，要全删。

---

### 5.7 Screen 8: Expenses · 15 分钟

**复制谁起步**：从 **02 My Trips** Cmd+D，改名 `08 Expenses`。

#### Step 1 改 TopNav Property

1. 选中 TopNav 实例 → 右侧 Properties 区改：
   - `hasBack` = **false**（Expenses 是 root 页，无 Back）
   - `hasAction` = **false**
   - `title` = **"Expenses"**

#### Step 2 删除 Segmented

1. 删除 Segmented Control

#### Step 3 加 Summary Card

1. 在 TopNav 下按 **F** 画 **361×100** frame, 位置 **X=16, Y=98**（紧贴 TopNav 底部，无空隙；iOS 标准做法）, 命名 `Summary`
2. Corner radius 12, fill `bg/primary`, stroke 1 `wf/stroke`
3. 套 Auto Layout：
   - Direction: 垂直
   - Spacing: 4
   - Padding: 20（上下左右都 20）
   - Alignment: 左中
   - **Resizing**：Horizontal **Fixed (361)**，Vertical **Hug contents**（注意：Hug 后 H 会自动收到 ~92，不强求 100）
4. T 打 "This month" → **Footnote**, `label/secondary`
5. T 打 "$2,341.00" → **LargeTitle**

#### Step 4 改 TripList 为 ExpenseList

1. 选中 TripList 左侧 Layers → 改名为 `ExpenseList`
2. **挪位置**：原 TripList 是从 02 My Trips 复制过来的（位置 X=16, Y=158），但 08 Expenses 在 Y=98 加了 Summary Card（H≈92），ExpenseList 必须往下挪让出空间：
   - 选中 ExpenseList → 右侧 Position 改 **X=16, Y=206**（= Summary Y=98 + Summary H≈92 + 间距 16）
   - 尺寸：W=361, H=300（5×60 = 300，由 Auto Layout Hug 自动管理；如果之前 ExpenseList 是 Fixed H，改成 Hug contents）
3. 删除 ExpenseList 内现有的 6 张 FlightCard
4. 在 ExpenseList frame 内拖 5 个 ListRow（位置由父 Auto Layout 自动管理，5 行依次堆叠）：
   - 每行：hasLeading=true (圆形占位), hasTrailing=true (Trailing 当 value 用)
   - Row 1: title="UA245 SFO→JFK", subtitle="Apr 27", value="$456.00"
   - Row 2: title="Hilton SFO", subtitle="Apr 26", value="$289.00"
   - Row 3: title="Uber to SFO", subtitle="Apr 27", value="$45.00"
   - Row 4: title="DL122 LAX→ORD", subtitle="Apr 20", value="$521.00"
   - Row 5: title="Marriott LAX", subtitle="Apr 19", value="$310.00"

#### Step 5 加 CTA

1. 左侧 Assets → 拖一个 Button 实例进 08 Expenses（作为直接子，不在 ExpenseList 内）
2. label = `Send to Assistant`
3. 位置 **X=16, Y=522**（= ExpenseList Y=206 + ExpenseList H=300 + 间距 16），W=361, H=50

#### Step 6 改 TabBar

1. TabBar activeTab=`expenses`

#### Step 7 验证

- [ ] frame 名 `08 Expenses`
- [ ] TopNav 标题 "Expenses", 无 Back
- [ ] Summary Card "$2,341.00"
- [ ] 5 行 ExpenseList
- [ ] Button "Send to Assistant"
- [ ] TabBar activeTab=expenses

---

### 5.8 Modal Frame（用于 Open Overlay）· 5 分钟

这不是 8 屏之一，是个辅助 frame，用于 §7.4 的 Open Overlay。

#### Step 1 创建独立 frame

1. 在 Wireframes 页角落（远离 8 屏）按 **F** 画一个 393×400 frame
2. 命名 `Modal-Confirmed`

#### Step 2 放 ModalSheet 实例

1. 左侧 Assets → 拖 `ModalSheet` 实例进 Modal-Confirmed frame
2. 实例放置 X=0, Y=0（铺满）
3. 右侧 size=`Half`

#### Step 3 改文案

1. 进 ModalSheet 实例：
   - Title: "Rebooking confirmed"
   - Body: "Your assistant has been notified."
   - Primary button label: "View New Itinerary"
   - Secondary button label: "Done"

#### 验证

- [ ] Modal-Confirmed frame 在 Wireframes 页
- [ ] ModalSheet 实例 size=Half
- [ ] 文字 "Rebooking confirmed"

---

### 5.9 Wireframes 总自检

- [ ] 8 个屏幕 frame 命名为 `01 Home` 到 `08 Expenses`
- [ ] 额外有 1 个 `Modal-Confirmed` frame
- [ ] 所有 IphoneFrame 实例 theme=`Wireframe`
- [ ] 颜色仅 `#FFFFFF / #000000 / #D9D9D9` 和带透明度的灰
- [ ] 按钮 / Tab / NavTitle 用真实英文
- [ ] 信息性文字（subtitle、说明段）用 greeked
- [ ] My Trips、Search Flights 内容超出 IphoneFrame 高度（会触发滚动）

---

## 6. Hi-Fi 页面（~60 分钟）

> **核心速通**：不要重画。整页复制 → 手动批量改色 → 替换文字 + 加细节。

### 6.1 整页 Duplicate Page

1. 左侧 Pages 面板 → 右键 **Wireframes** → **Duplicate Page**
2. 重命名复制出来的页为 `Hi-Fi`
3. 切到 Hi-Fi 页

### 6.2 批量改色（Wireframe 黑白 → Hi-Fi 彩色）

> ⚠️ **不能用"切 theme variant"批量切换** —— 因为 §5.0 我们把 IphoneFrame 实例 detach 成普通 frame 了，所以 Multi-edit 面板**不会出现 theme 属性**。Hi-Fi 转换需要手动改 4 类元素的颜色。

#### Step 1 删除所有 IphoneFrame 黑边

Wireframe 阶段每个屏的 IphoneFrame 有 1px 黑边，Hi-Fi 不需要：

1. **Cmd+A** 全选画布所有 9 个屏（不含 Modal-Confirmed）
2. 右侧 Design 面板 → 找到 **Stroke** 区
3. 鼠标悬停 stroke 那行 → 点 **−** 删除

如果 Multi-edit 因为 frame 不全是同样的 stroke 看不到 Stroke 区：逐个屏选中 → 删 stroke。9 个屏 1 分钟搞定。

#### Step 2 把灰色占位换成彩色 【**可跳过**，由 §6.4 自动覆盖】

> ⚡ **强烈建议跳过这一步**：大部分灰色圆形占位（QuickAction / ListRow Leading / FlightCard logo / TabBar tab）会在 **§6.4 SF Symbols** 中被真实图标替换，图标自带 `accent/default` 蓝色，相当于自动改色。Step 2 跟 §6.4 功能重叠。
>
> **只剩下少数"非图标"元素需要手动改**（直接跳到 §6.3 → §6.4 → §6.5 → §6.6 后，最后 1-2 分钟回头扫一眼修正）：
> - 卡片的黑色 stroke 边框（BoardingPass / Status / Summary / 07 LiveData）→ 删 stroke 或改 `label/secondary` 30% hairline
> - BoardingPass 黑色 QR 方块 → 由 §6.6 QR Code 插件覆盖

如果你想严格按步骤来，下表是参考（但不做也不影响 rubric 拿分）：

| Wireframe 元素 | Hi-Fi 颜色 |
|------|------|
| ListRow Leading 圆形占位 (24×24) | `accent/default` |
| FlightCard Header 航司 logo 圆 | 删除并替换为 SF Symbol 飞机图标，颜色 `label/secondary` |
| TabBar 各 tab icon 圆形占位 | 见 §6.4 SF Symbols 替换 |
| BoardingPass QR 黑方块（在 01 Home 和 03 Flight Detail）| 见 §6.6 用 QR Code 插件生成真二维码 |
| 07 Concierge Notification 卡背景 | 已经是 `bg/secondary` 浅灰，不用改 |
| Status Card / Summary Card / 07 Concierge LiveData 边框 (wireframe stroke 黑) | 改成 `bg/secondary` 浅灰 fill 不要 stroke / 或保留 1px hairline `label/secondary` 30% |

操作方式（以 07 Concierge LiveData 内 ListRow Leading 圆为例）：
1. 进 07 Concierge LiveData → 选第 1 行 ListRow → 进入 Leading 圆
2. 右侧 Fill → 点色块 → 改成 `accent/default`
3. 同屏剩余 ListRow 的 Leading：选中第 1 个 → 右键 **Select all matching** → 一次性改色（或 Shift 多选后一起改）

#### Step 3 可选：FlightCard badge 颜色微调

FlightCard 的 state badge 在 wireframe 阶段就已经是彩色（success/warning/destructive），Hi-Fi 阶段不用改。

> **总耗时**：Step 1 删黑边 (1 min) + Step 2 跳过 + §6.4 SF Symbols 自动改色 + 最后回头补 2 处 ≈ 3 分钟。

### 6.3 替换 greeked 文本

用真实差旅文案替换 Lorem Ipsum，重点：

| 屏 | 关键替换 |
|------|------|
| 01 Home | "Hi, Adam" / "Your next flight is on time" / UA245 SFO→JFK 09:30→17:45 / **BoardingPass: Adam Bobrow / 3A / B12 / 09:00** |
| 02 My Trips | UA245 / DL122 / AA88 / UA567 / DL909 / AA214（混合 OnTime / Delayed） |
| 03 Flight Detail | "Gate B12 · Seat 3A · Boards 09:00" / Timeline 4 行 |
| 04 Rebook | "Your flight UA245 is delayed by 90 minutes. Here are some options to help you arrive on time." |
| 05 Search Flights | UA877 11:25 $345 / DL455 12:40 $389 / AA512 14:15 $412 ... |
| 06 Confirm | "Rebooked to UA877" / "What changes:" |
| **07 Concierge** | **"Live updates for your trip" / TSA Wait Time = 6 min / Walk to Gate = 4 min / Lounge to Gate = 9 min / Boarding starts in = 42 min / 推送预览 "Gate change for UA245: now Gate B14"** |
| 08 Expenses | "This Month $2,341.00" / 5 行真实费用 |

### 6.4 复制 Hi-Fi Components 套件 + SF Symbols 替换

> **核心思路**：所有 9 个 Components 是 Wireframes 页和 Hi-Fi 页**共享的**。如果直接改 main Component，Wireframes 页的圆形占位也会变成 SF Symbols，违反 wireframe rubric "basic shapes" 要求（可能扣 2-3 分）。
>
> **最干净方案**：在 Components 页**复制 5 个核心 Components 做 Hi-Fi 版本**，然后 Hi-Fi 页所有 instance 用 **Swap Instance** 一键切换到 Hi-Fi 版本。Wireframes 页完全不动。

#### 哪些组件需要复制 Hi-Fi 版

| Component | 复制？ | 改动 |
|-----------|------|------|
| **TabBar** | ✅ | 4 Ellipse → SF Symbols (`house.fill` / `airplane` / `sparkles` / `creditcard.fill`) |
| **TopNav** | ✅ | Back 24×24 圆 → `chevron.left` SF Symbol |
| **ListRow** | ✅ | Leading 24×24 圆 → `info.circle` |
| **FlightCard** | ✅ | logo 24×24 圆 → `airplane.circle.fill` + 加 drop shadow |
| **ModalSheet** | ✅ | 加 drop shadow |
| IphoneFrame | ❌ | 已 detach，hi-fi 屏直接删 stroke 即可 |
| StatusBar | ❌ | 3 矩形可保留（内容固定） |
| HomeIndicator | ❌ | 完全一样 |
| Button | ❌ | Primary 已是 `accent/default` 蓝色，不变 |

#### Step 1 安装 SF Symbols Importer 插件

Figma → Plugins → 搜 **SF Symbols Importer**（免费）→ 安装。等到 Step 3 进 Component 内部边操作边生成 icon。

#### Step 2 复制 5 个 Components

> ⚠️ **Figma 单 Component vs Component Set 复制行为差异**：
> - **Component Set**（含 Variants，比如 TabBar / FlightCard / ModalSheet）→ Cmd+D 复制得到**新的 Component Set** ✓
> - **单 Component**（只有 Properties 无 Variant，比如 TopNav / ListRow）→ Cmd+D 复制得到 **instance**（不是新 main） ✗
>
> 这是 Figma 的反直觉行为。下面 Step 2.A 用于 Component Set，Step 2.B 用 detach + recreate 处理单 Component。

##### Step 2.A 复制 3 个 Component Set（TabBar / FlightCard / ModalSheet）

1. 切到 **Components 页**
2. 按住 **Shift** 多选 3 个 Component Set：`TabBar` / `FlightCard` / `ModalSheet`
3. **Cmd+D** 复制 → 3 份新 Component Set 出现
4. 逐个重命名（双击 Layers 中的名字 / 或选中后按 Enter 改名）：
   - `TabBar` 副本 → `TabBar (HF)`
   - `FlightCard` 副本 → `FlightCard (HF)`
   - `ModalSheet` 副本 → `ModalSheet (HF)`

##### Step 2.B 复制 2 个单 Component（TopNav / ListRow）

用 **detach + recreate** 方法（不能直接 Cmd+D，会得到 instance）：

**TopNav (HF)**：
1. 选中 main `TopNav`（紫色实心 ❖ 菱形）
2. **Cmd+D** → 得到一个 instance（浅紫色 ◇ 菱形，看右侧 Property 切换器是给该 instance 的证据）—— 这是 Figma 怪行为，**不要慌**
3. 选中这个 instance → **Cmd+Option+B** Detach → 变成普通 frame（Layers 图标从 ◇ 变成 `#`）
4. 保持选中这个 frame → **Cmd+Alt+K** 创建 component → 又变成 main component（❖ 实心菱形）
5. 改名 `TopNav (HF)`

**ListRow (HF)**：
1. 选中 main `ListRow` → **Cmd+D** → 得到 instance
2. 选中 instance → **Cmd+Option+B** detach → 普通 frame
3. **Cmd+Alt+K** 创建 component
4. 改名 `ListRow (HF)`

> **为什么不直接编辑 Cmd+D 出来的 instance**：instance 内部不能修改结构（只能改 properties），需要先 detach 才能删 Back 圆 / 加 SF Symbol。Detach 后再创建 component 是为了让它变成独立的 main，方便后续 Hi-Fi 页 Swap Instance 时选到。

##### Step 2.C （可选）整理 Components 页

按 **Shift+S** 创建 Section 把 5 个 `(HF)` 圈进 "Hi-Fi Components" 分组，原 9 个圈进 "Wireframe Components" 分组，避免 14 个 component 视觉混乱。

#### Step 3 修改 5 个 Hi-Fi Components

##### 3.1 TabBar (HF) — 替换 4 个图标（10 分钟）

1. 双击进入 `TabBar (HF)` component set
2. 进入 `activeTab=home` variant
3. 选中第 1 个 TabItem 内的 Ellipse 1 → **Delete**
4. 启动 SF Symbols Importer → 搜 `house.fill` → 生成 24×24 → 拖到第 1 个 TabItem 内 Ellipse 原位置
5. icon fill 改 `accent/default`（home 激活态，蓝）
6. 第 2/3/4 个 TabItem：删 Ellipse → 生成 `airplane` / `sparkles` / `creditcard.fill` → fill `label/secondary`
7. 切到 `activeTab=trips` variant，重复（active 是第 2 个 → `accent/default`，其他 → `label/secondary`）
8. 同样处理 `activeTab=concierge` 和 `activeTab=expenses`

##### 3.2 TopNav (HF) — 替换 Back + Action 图标（3 分钟）

1. 双击进入 `TopNav (HF)`
2. **替换 Back**：
   - 选中 Back 元素内的 24×24 圆 → 删除
   - 生成 `chevron.left` → 拖入同位置，大小 24×24
   - fill `accent/default`（iOS Back 标准蓝色）
3. **替换 Action**：
   - 选中 Action 24×24 圆（在 TopNav 最右） → 删除
   - 生成 `line.3.horizontal.decrease`（filter 图标，iOS 风格）→ 拖入同位置，大小 24×24
   - fill `accent/default`
4. 验证：临时把 `hasBack` 和 `hasAction` 切到 true 看看两个 icon 是否显示正确（切完记得切回 false 默认）

> Action 在 02 My Trips 实际显示（hasAction=true），其他屏 hasAction=false 不显示。但既然替换组件就一起处理，避免 02 屏 Hi-Fi 化后 Action 还是灰圆。

> **Action 图标替代选项**：如果 `line.3.horizontal.decrease` 找不到（旧版 SF Symbols），可用 `slider.horizontal.3` 或 `ellipsis` 替代。

##### 3.3 ListRow (HF) — 替换 Leading 图标（2 分钟）

1. 双击进入 `ListRow (HF)`
2. 选中 Leading（24×24 圆） → 删除
3. 生成 `info.circle` → 拖入同位置，fill `label/secondary`

> **统一 icon** 最快：所有 ListRow 用同一个 `info.circle`。如果想各处不同 icon（07 用 shield，08 用 dollarsign 等），在 Hi-Fi 页 instance 上单独 detach + 改。

##### 3.4 FlightCard (HF) — 替换 logo + 加阴影（5 分钟）

1. 双击进入 `FlightCard (HF)`
2. 进入任一 state variant（比如 Upcoming）
3. 选中 Header 内 24×24 logo 圆 → 删除
4. 生成 `airplane.circle.fill` → 拖入同位置，fill `label/secondary`
5. 选中**外层 FlightCard frame** → 右侧 Effects + → **Drop shadow**：
   - X: 0, Y: 8, Blur: 24, Spread: 0, Color: `#000000` 6%
6. 在其他 4 个 state variant 内重复（最快：把改好的 logo icon 复制到其他 variant 同位置）

##### 3.5 ModalSheet (HF) — 加阴影（1 分钟）

1. 双击进入 `ModalSheet (HF)`
2. 选中外层 ModalSheet frame → Effects + → Drop shadow：
   - X: 0, Y: -4, Blur: 16, Spread: 0, Color: `#000000` 8%

#### Step 4 Hi-Fi 页用 Swap Instance 批量切换组件

切到 **Hi-Fi 页**，把所有用到的 instance 替换为 Hi-Fi 版本。

##### Swap 单个 instance 的标准操作

1. 选中一个 wireframe 版 instance（比如 01 Home 的 TabBar）
2. 右侧 Design 面板顶部 → component name 旁有一个 **swap icon**（看起来像 ⇄ 两个图形互换，或者点 component name 旁的小下拉箭头）
3. 弹出 component 选择面板 → 选 `TabBar (HF)` → 确认
4. instance 立刻切换为 Hi-Fi 版本，**保留所有 Property 设置**（activeTab / hasBack / title / state / Text 等）

##### Swap 顺序（建议逐屏处理）

| 屏 | 需要 swap 的 instance |
|----|----|
| 01 Home | TabBar / FlightCard |
| 02 My Trips | TopNav / TabBar / 6 张 FlightCard |
| 03 Flight Detail | TopNav / 4 行 ListRow |
| 04 Rebook | TopNav / FlightCard / 3 行 ListRow |
| 05 Search Flights | TopNav / 6 张 FlightCard |
| 06 Confirm Rebook | TopNav / FlightCard / 4 行 ListRow |
| 07 Concierge | TopNav / TabBar / 4 行 ListRow |
| 08 Expenses | TopNav / TabBar / 5 行 ListRow |
| Modal-Confirmed | ModalSheet |

总共约 30 次 swap 操作，每次 5 秒，**约 5 分钟**。

> **批量 swap 速通**：每屏内同类 instance（比如 6 张 FlightCard）可以 Shift 多选 → 右侧 Multi-edit → 一次 swap 全部。每屏 ~30 秒。

##### 验证 swap 效果

- TabBar instance 内部 → 看到 SF Symbol icons（不再是 Ellipse） ✓
- TopNav instance 内部 → Back 是 `chevron.left` icon ✓
- FlightCard 有阴影 + airplane logo ✓
- Wireframes 页**完全没动**，所有 instance 仍是原版本 ✓

#### Step 5 处理非组件元素

- IphoneFrame stroke：9 屏 IphoneFrame 黑边（§6.2 Step 1 已删）
- BoardingPass 黑色 QR 方块：交给 §6.6 用 QR Code 插件覆盖

#### 速通替代方案（如果你不想做 SF Symbols）

跳过整个 §6.4，Wireframes / Hi-Fi 页 TabBar / 圆形 icons 完全相同。Hi-Fi 视觉简陋，rubric Hi-Fi 10 分可能扣 1-2 分，但 wireframe 15 分稳过。**总耗时 0 分钟**。

#### 总工作量

| 步骤 | 时间 |
|------|------|
| Step 1 安装插件 | 1 min |
| Step 2 复制 5 个 Components | 1 min |
| Step 3.1 TabBar (HF) | 10 min |
| Step 3.2 TopNav (HF) | 2 min |
| Step 3.3 ListRow (HF) | 2 min |
| Step 3.4 FlightCard (HF) | 5 min |
| Step 3.5 ModalSheet (HF) | 1 min |
| Step 4 Hi-Fi 页 swap instance | 5 min |
| **总计** | **~27 min** |

#### icon 颜色规则汇总

- TabBar 激活态 icon：`accent/default`
- TabBar 非激活态 icon：`label/secondary`
- **TopNav Back / Action 图标：`accent/default`**（iOS 标准蓝，表示可点击）
- ListRow Leading 图标：`label/secondary`
- FlightCard 航司 logo：`label/secondary`

### 6.5 加阴影（如果做了 §6.4 大部分阴影已经搞定）

§6.4 Step 3.4 / 3.5 已在 main `FlightCard (HF)` 和 `ModalSheet (HF)` 里加了阴影，这里只需补漏：

- 08 Expenses 的 Summary Card（直接画在屏内，不是组件）→ Effects + → Drop shadow `0 / 2 / 8 / 0 #000000 @ 4%`
- 01 Home 的 BoardingPass Card（直接画在屏内）→ Drop shadow `0 / 4 / 16 / 0 #000000 @ 6%`
- 07 Concierge 的 LiveData 卡和 Notification 卡 → 可选加 Drop shadow `0 / 2 / 8 / 0 #000000 @ 4%`

操作：选中元素 → 右侧 **Effects** 区 → **+** → 选 Drop shadow → 输入数值

> 如果跳过 §6.4，需要回到这里手动给 Hi-Fi 页 FlightCard / ModalSheet instance 加阴影（但因为是 instance，需要先 detach 才能加 effect）。最简单：在 main TabBar (HF) / FlightCard (HF) 等 component 内加，所有 instance 自动继承。

### 6.6 加真实图片 / QR / Avatar

#### 6.6.1 QR 码（必做）

1. Figma → Plugins → 搜 **QR Code Generator** 安装
2. 生成一个真二维码（内容随意，例如 `BP-XX0000-Adam`）
3. 替换 01 Home BoardingPass 卡里那个 200×200 黑方块（保持位置 X=80, Y=150 不变，只是把黑色 fill 换成 QR 图片）

#### 6.6.2 Avatar 头像（必做，rubric 加分）

替换 01 Home 右上角的 Avatar 占位灰圆为真实头像：

1. 切到 **Hi-Fi 页 01 Home**
2. 选中 Avatar 圆形占位（X=321, Y=70, 56×56）

**方法 A：Unsplash 插件**（最快，无需 GenAI）
- Plugins → 搜 **Unsplash** → 安装 → 启动
- 搜 "businessman headshot" / "professional portrait" / "executive man"
- 选一张合适的（建议正面、商务休闲、友善表情）→ 直接拖到 Avatar 圆上覆盖
- Figma 自动把图片设为 Avatar 的 image fill，圆形裁切

**方法 B：GenAI 生成**（更"realistic"，但需在 Notes 声明）
- 用 ChatGPT (DALL-E) / Midjourney / Stable Diffusion 生成 prompt：
  ```
  Professional male portrait, business casual, friendly smile,
  late 30s, soft natural lighting, neutral background, realistic photo
  ```
- 保存为 PNG → 拖入 Figma → 选中 Avatar → Fill 改成 image fill → 上传刚生成的图
- ⚠️ 必须在 Notes 页声明使用了 GenAI 生成头像（参见 §10 Notes 模板）

**调整效果**：
- 确保 Avatar 是圆形（corner radius 28 或 50%）
- 可选加 1px hairline 边框：Stroke `label/secondary` 30%, Inside

#### 6.6.3 BoardingPass 背景图（可选）

可选：搜 **Unsplash** 插件 → 搜 "airplane wing" 或 "airport"
- 拖一张图到 01 Home BoardingPass 卡的背景层 (作为水印背景，opacity 10-15%，不抢主视觉)

#### 6.6.4 Notes 页声明

在第 10 章 Notes 页里写明所有图片来源：QR Code Generator 插件 / Unsplash / GenAI（见 §10）

### 6.7 Hi-Fi 自检

- [ ] 8 屏（+ Modal-Confirmed）数量与 Wireframes 一一对应
- [ ] 颜色通过 variables 引用（点 fill 看到的是 token 名而不是 hex）
- [ ] 文字真实差旅文案，无 Lorem Ipsum
- [ ] SF Symbols 图标已替换
- [ ] 卡片有阴影
- [ ] 视觉层级：LargeTitle > Title 2 > Headline > Body > Footnote
- [ ] **Gestalt 检查**：
  - Proximity：航班号 + 时间贴一起
  - Similarity：所有 Primary 按钮同色
  - Figure-Ground：modal 蒙版凸显前景

---

## 7. Prototype 交互（~40 分钟）

> 全章节在 **Hi-Fi** 页操作。顶部中央切到 **Prototype** 模式。

### 7.1 设置 Flow Starting Point

1. 选中 Hi-Fi 页 `01 Home` frame（点 frame 名字，不要进内部）
2. 右侧 Prototype 面板 → **Flows** 区 → **+** → 命名 `UXAirways Main Flow`
3. Home frame 左上角出现 ▶ 绿色三角

### 7.2 主流程连线表

| # | 起点 | 触发元素 | Action | 目标 | 动画 |
|---|------|------|------|------|------|
| 1 | 01 Home | FlightCard | Navigate to | 03 Flight Detail | Push from right 300ms |
| 2 | 02 My Trips | 任一 FlightCard | Navigate to | 03 Flight Detail | Push from right |
| 3 | 03 Flight Detail | TopNav Back | **Back** | (auto) | Default |
| 4 | 03 Flight Detail | "Rebook this Flight" | Navigate to | 04 Rebook | Push from right |
| 5 | 04 Rebook | "Find Alternatives" | Navigate to | 05 Search Flights | Push from right |
| 6 | 04 Rebook | TopNav Back | Back | — | Default |
| 7 | 05 Search Flights | 任一 FlightCard | Navigate to | 06 Confirm Rebook | Push from right |
| 8 | 05 Search Flights | TopNav Back | Back | — | Default |
| 9 | 06 Confirm Rebook | "Confirm Rebooking" | **Open overlay** | Modal-Confirmed | Move in from bottom 250ms |
| 10 | 06 Confirm Rebook | TopNav Back | Back | — | Default |
| 11 | 07 Concierge | (TabBar 跳转，见 §7.3) | — | — | — |

操作方式：
1. 切到 **Prototype** 模式（顶部中央）
2. 选中元素（比如 01 Home 的 FlightCard）
3. 右上出现一个 **+** 圆形拖拽点 → 拖到目标 frame（比如 03 Flight Detail）
4. 弹出 Interaction details：
   - Trigger: **On tap**
   - Action: **Navigate to**
   - Animation: **Push** from **Right**, 300ms, Ease out

> ⚠️ **Back action 的核心威力**：表格里所有 "TopNav Back" 行用的是 **Action: Back**（不是 Navigate to）。Back 会自动维护用户导航历史栈：
> - 01 → 03 → 点 Back → 回 01 ✓
> - 02 → 03 → 点 Back → 回 02 ✓
> - 即使 03 同时被 01 和 02 链接，Back 自动判断来源
>
> **绝对不要用 Navigate to 01 Home 当 Back** —— 那会硬编码总是回 01，从 02 来的用户也被强制回 01。
>
> 操作：选中 Back 元素 → + Add interaction → On click → **Action: Back**（不需要选 destination）。

### 7.3 TabBar 全局连线

对每个有 TabBar 的屏（**01 Home / 02 My Trips / 07 Concierge / 08 Expenses**），给 4 个 tab 都加 navigate 连线：

- Home tab → Navigate to 01 Home, Instant
- Trips tab → Navigate to 02 My Trips, Instant
- **Concierge tab → Navigate to 07 Concierge, Instant**
- Expenses tab → Navigate to 08 Expenses, Instant

> ✅ **当前屏的 tab 不需要加 interaction**（也不需要 Navigate to 自己 —— Figma 不允许）。
>
> **前提**：你按 §7.5 用了 **Nested Scroll Frame** 方案，TabBar 在 ContentArea 之外 → 物理上跟 ScrollView 完全分离 → 点 TabBar 任何区域不会穿透到下面的 FlightCard ✓
>
> 如果你**没用** §7.5 的 Nested Scroll Frame 方案（继续用 IphoneFrame 直接滚动 + TabBar Fixed），会遇到 Figma 已知的 hit 穿透 bug：点 02 屏的 Trips tab 跳到 03 Flight Detail。这是 Figma 多年未修的设计缺陷，唯一 elegant 的根除方法是 §7.5 的 Nested Scroll Frame 重构。
>
> ⚠️ **千万别**用 hack 方案（Open Overlay 屏幕外 / Open link / Set variable / None 等）—— 不优雅且副作用多。直接用 §7.5 的结构调整。

**速通点**：第一屏 TabBar 连完后，选中 TabBar 实例 → **Cmd+C** → 选中下一屏 TabBar → 右键 **Paste interactions only** → 4 个连线一键复制 → 4 屏一共 ~2 分钟。

> ⚠️ **Hi-Fi 页同样需要做**：Prototype interactions 绑在 instance 上，Swap Instance / Detach 都不会带走 interactions。Hi-Fi 页 4 屏的 TabBar 需要单独再设一次 prototype 连线（或者 Cmd+C wireframe TabBar 的 interactions → paste 到 Hi-Fi TabBar）。

### 7.4 Modal 用 Open Overlay

#### 配置

1. 选中 `06 Confirm Rebook` 的 "Confirm Rebooking" 按钮
2. 右侧 Prototype 面板 → + Add interaction
3. 设置：
   - Trigger: **On tap**
   - Action: **Open overlay**
   - Overlay: `Modal-Confirmed` frame
   - Position: **Bottom center**（或 Manual 拖到底部）
   - ✅ **Close when clicking outside**
   - ✅ **Add background behind overlay** → 颜色 `#000000` 50%（这就是蒙版）
   - Animation: **Move in** from Bottom, ease out 250ms

#### Modal 内部按钮

1. 在 Modal-Confirmed frame 内选中 Done 按钮 → + Add interaction → On tap → **Close overlay**
2. 选中 View New Itinerary 按钮 → + Add interaction → On tap → **Navigate to** `03 Flight Detail`（同时 close overlay 自动发生）

### 7.5 滚动设置（My Trips + Search Flights + Expenses）

> ⚠️ **Figma 已知设计缺陷**：Figma Prototype 不会让 Fixed/Sticky 元素自动拦截 hit。即使 TabBar 视觉在最上层 + 有不透明 fill，**点击 TabBar 区域时 hit 会穿透到下方的 scrollable 元素**（比如 TripList 内的 FlightCard），触发 FlightCard 的 navigate to。社区抱怨多年未修。
>
> **唯一 elegant 的解决方案**：用 **Nested Scroll Frame**（嵌套滚动容器）—— 把可滚动内容包在一个独立 frame 里，让这个 frame 滚动而不是 IphoneFrame 滚动。TabBar 在这个 ContentArea 之外，物理分离 → 完全不被 hit 影响。

#### 新结构（推荐）

```
IphoneFrame                                    ← 不滚动
├── StatusBar                                  (在 ContentArea 之外)
├── TopNav                                     (在 ContentArea 之外)
├── ContentArea (ScrollView, Overflow Vertical, Clip content)  ← 真正的滚动容器
│   ├── Segmented (02/05) 或 Summary (08)     (Sticky 选项在 ContentArea 内有效)
│   └── TripList / ExpenseList                (Scrolls)
├── TabBar                                     ← 在 ContentArea 之外，hit test 完全独立
└── HomeIndicator
```

iOS / Web 标准 ScrollView 模式 —— 滚动容器 + 不滚动的 chrome（顶/底导航）。

#### Step 1 在 IphoneFrame 内画 ContentArea

针对 02 My Trips（05 / 08 同理）：

1. 在 02 My Trips 的 IphoneFrame 内按 **F** 画一个 frame
2. 命名 `ContentArea`
3. 尺寸 **W=393, H=648**（= 852 - 54 StatusBar - 44 TopNav - 72 TabBar - 34 HomeIndicator）
4. 位置 **X=0, Y=98**（紧贴 TopNav 底部）
5. Fill: 透明（删 fill）

#### Step 2 把滚动内容移进 ContentArea

1. 左侧 Layers 多选当前 IphoneFrame 内会滚动的元素：
   - 02 My Trips: Segmented + TripList
   - 05 Search Flights: Segmented + TripList
   - 08 Expenses: Summary + ExpenseList + Button
2. **Cmd+X** 剪切
3. 选中 `ContentArea` → **Cmd+V** 粘贴 → 它们成为 ContentArea 的子元素
4. **调整 Y 坐标**（减去 98，因为现在它们的父 frame 起点是 Y=98 而不是 0）：

| 元素 | 原 Y | 新 Y |
|------|------|------|
| 02/05 Segmented | 110 | **12** |
| 02/05 TripList | 158 | **60** |
| 08 Summary | 98 | **0** |
| 08 ExpenseList | 206 | **108** |
| 08 Button | 522 | **424** |

#### Step 3 设置 ContentArea 滚动

1. **Design 模式**：选中 ContentArea → Layout → 勾上 **Clip content** ✅
2. **Prototype 模式**：选中 ContentArea → Scroll behavior → **Overflow: Vertical**
3. ContentArea 内部子元素的 Position：
   - Segmented (02/05) → **Sticky**（在 ContentArea 顶部吸顶）
   - Summary (08) → Sticky 或 Scrolls
   - TripList / ExpenseList → **Scrolls**（默认）

#### Step 4 IphoneFrame 不再滚动

1. Prototype 模式 → 选中 IphoneFrame
2. Scroll behavior → **Overflow: No scrolling**（默认值）
3. 内部 StatusBar / TopNav / TabBar / HomeIndicator 都用默认 Position（不需要 Fixed）—— 因为 IphoneFrame 不滚动，它们自然不会动

#### Step 5 验证 hit test 不再穿透

测试：
- 02 屏点 TabBar Trips tab → 不再跳 03 ✓
- 02 屏滚到底 → 最后一张 FlightCard 完全显示，TabBar 不遮 ✓
- 滚动时 ListRow 不会从 StatusBar/TopNav 上方透出 ✓

#### Step 6 复制到 05 Search Flights / 08 Expenses

按 Step 1-4 同样处理 05 / 08。每屏 ~3 分钟，3 屏共 10 分钟。

> ⚡ **如果你之前已经按"IphoneFrame 滚动 + TabBar Fixed"画好了**：按本节 Step 1-4 重构（剪切+粘贴到 ContentArea + 调坐标）。约 10 分钟，但根除 hit 穿透问题，比 hack workaround 优雅得多。
>
> **可以删掉**：之前为 TabBar 4 个 tab 加的 "Open Overlay 屏幕外" 拦截 hack，现在不需要了。

### 7.6 测试原型

1. 选中 `01 Home` → 右上 **▶ Present**（或 Cmd+Alt+Enter）
2. 走一遍：
   - Home → 点 FlightCard → Flight Detail
   - Back → Home
   - 点 TabBar 的 Trips → My Trips（滚下来看看）
   - 点任一 FlightCard → Flight Detail
   - 点 Rebook → Rebook → Find Alternatives → Search → 点一张 → Confirm
   - 点 Confirm Rebooking → Modal 弹出
   - 点 Modal 的 Done → 关闭
   - 点 TabBar Expenses → Expenses
3. 验证清单：
   - [ ] 所有按钮可点
   - [ ] Back 都能返回
   - [ ] Modal 弹出 + 蒙版 + Done 关闭
   - [ ] My Trips / Search Flights 能滚动
   - [ ] StatusBar / TopNav / TabBar 滚动时不动
   - [ ] Segmented 滚动时 sticky 吸顶

---

## 8. 命名规范

### Components 页

```
Components (Page)
  ├── IphoneFrame          (theme: Wireframe / Hi-Fi)
  ├── TabBar               (activeTab × 4)
  ├── Button               (type × state)
  ├── ListRow              (Boolean: hasLeading/hasTrailing, Text: 3)
  ├── FlightCard           (state × 5, Text: 6)
  ├── ModalSheet           (size × 2)
  ├── TopNav               (Boolean: hasBack/hasAction, Text: title)
  ├── StatusBar            (无 Property)
  └── HomeIndicator        (无 Property)
```

### Wireframes 页

```
Wireframes (Page)
  ├── 01 Home
  ├── 02 My Trips
  ├── 03 Flight Detail
  ├── 04 Rebook
  ├── 05 Search Flights
  ├── 06 Confirm Rebook
  ├── 07 Concierge
  ├── 08 Expenses
  └── Modal-Confirmed     (辅助 frame, 用于 Open Overlay)
```

### Hi-Fi 页

```
Hi-Fi (Page)
  └── 同上 9 个 frame（命名加 " (HF)" 后缀更清楚）
```

---

## 9. Cover 页内容（3 分钟）

> 加一个浅灰背景 frame + 文字，主标题用品牌蓝突出。

### 操作

1. 切到 **Cover** 页（左侧 Pages）
2. 按 **F** 画一个 **1200×800** frame（横向海报尺寸）
   - Fill: `bg/secondary` (#F2F2F7)
   - 命名 `Cover`
3. 按 **T** 在 frame 内部点击，输入以下 4 行（按 **Shift+Enter** 换行）：

```
SWE 263P · Assignment 4
UXAirways Mobile App Design
Yiju Song
May 10, 2026
```

4. 排版（按行选中改样式）：
   - "UXAirways Mobile App Design" → 字号 **48 / Bold** / 颜色 `accent/default` (#0A84FF) ← 主品牌蓝突出
   - "SWE 263P · Assignment 4" → 字号 17 / Regular / 颜色 `label/secondary`
   - "Yiju Song" → 字号 22 / Bold / 颜色 `label/primary`
   - "May 10, 2026" → 字号 17 / Regular / 颜色 `label/secondary`
5. 文字整体居中放在 frame 内（X / Y 自由调整，差不多居中即可）

完事。

---

## 10. Notes & Citations 页内容（6 分钟）

> 加一个浅灰背景 frame + 复制粘贴整段文字，section 标题用品牌蓝。

### 操作

1. 切到 **Notes & Citations** 页
2. 按 **F** 画一个 **1200×1800** frame（纵向能装下所有内容）
   - Fill: `bg/secondary` (#F2F2F7)
   - 命名 `Notes`
3. 按 **T** 在 frame 内部点击，复制粘贴以下完整文字：

```
Notes & Citations

References
  Persona: Adam Bobrow (developed in Assignment 2)
  Design system: Apple Human Interface Guidelines (iOS)
  Reference apps: Apple Wallet, Mail, Settings, Music

Citations
  Icons: Apple SF Symbols 7
    https://developer.apple.com/sf-symbols
  Images:
    Adam's avatar — Unsplash (or DALL-E, see GenAI below)
    Boarding Pass QR — Figma plugin "QR Code Generator"
  Components: All wireframe and high-fidelity components
    were designed from scratch using iOS HIG as reference
    (no third-party UI kit used).

GenAI Disclosure
  GenAI was NOT used for: wireframe layout, mockup
    layout, or interactive prototype.
  GenAI was used for: Adam's avatar portrait,
    generated with DALL-E using prompt "professional
    male portrait, business casual, late 30s,
    friendly smile, neutral background".
  (Delete this section if you didn't use GenAI.)

Design Decisions — Adam's Pain Points → My Design
  1. Can't find itineraries in email
       → My Trips screen with scrollable list
  2. Hard to rebook during delays
       → 1-tap Rebook flow (4 screens)
  3. Misses gate changes
       → Live Concierge with real-time updates
  4. Tedious expense reporting
       → Expenses with one-tap "Send to Assistant"
  5. Too many marketing notifications
       → Functional alerts only, no promotional content

Requirements Verified
  ✓ 8 different screens (Home, My Trips, Flight Detail,
    Rebook, Search, Confirm, Concierge, Expenses)
  ✓ Wireframe + Hi-Fi versions (16+ frames)
  ✓ Multi-page user flow (6-screen Rebook flow)
  ✓ Scrollable lists (My Trips, Search, Expenses)
  ✓ Modal/popup (Rebooking confirmed modal)
  ✓ No login page (assumed already logged in)
```

4. 排版（按需要选中改样式）：
   - "Notes & Citations" 大标题 → 字号 **34 / Bold** / 颜色 `accent/default` (蓝色突出)
   - 6 个 section 标题（References / Citations / GenAI Disclosure / Design Decisions / Requirements Verified）→ 字号 **22 / Semibold** / 颜色 `accent/default` ← 同样蓝色，视觉一致
   - 其他正文 → 字号 14 / Regular / 颜色 `label/primary`
5. 文字整体放 frame 内即可（X=80 Y=80 之类的 padding 看着舒服）

完事。

---

## 11. 提交（5 分钟）

### Step 1 检查 Cover & Notes 页内容已填好

- Cover 页：见 §9 步骤
- Notes & Citations 页：见 §10 步骤

### Step 2 分享文件

1. 文件右上 **Share** 按钮
2. **Invite by email**：
   - `mbietz@uci.edu`（权限 **Can view**）
   - `yihungc1@uci.edu`（权限 **Can view**）
3. **Copy link**

### Step 3 提交到 Canvas

1. 打开 Canvas → SWE 263P → Assignment 4 → **Start Assignment**
2. 选 **Website URL**
3. 粘贴 Figma 链接
4. **Submit**

### Step 4 提交后验证（可选但建议）

1. 用一个 incognito / private 浏览器窗口打开你提交的 Figma 链接
2. 确认能 view 到所有 5 个 Pages（Cover / Components / Wireframes / Hi-Fi / Notes & Citations）
3. 确认 Hi-Fi 页能 ▶ Present 走通主流程
4. 如果有问题立刻修复并 resubmit

---

## 12. 最终 Checklist

提交前对照 rubric 一条一条打钩：

### 文件结构

- [ ] 5 个 Pages：Cover / Components / Wireframes / Hi-Fi / Notes & Citations
- [ ] 全文件用了 Variables（颜色）和 Text Styles
- [ ] 所有 frame、组件命名规整

### Meets Assignment Requirements (50)

- [ ] 8 不同屏幕（01-08）
- [ ] Wireframe + Hi-Fi 双版本（共 16+ 屏）
- [ ] 至少 1 多页流（6 屏 Rebook 流）
- [ ] 至少 1 可滚动列表（My Trips + Search Flights，2 个）
- [ ] 至少 1 modal/popup（Confirm Rebook 的 Modal）
- [ ] 没有画登录页

### Wireframe (15)

- [ ] 仅黑、白、`#D9D9D9` 灰 + 透明度灰
- [ ] 仅基本形状，无渐变
- [ ] 简单 B&W 图标 / 占位圆
- [ ] 信息性文字 greeked（Lorem Ipsum）
- [ ] 按钮 / Tab / NavTitle 用真实英文

### High-Fidelity Mockup (10)

- [ ] 与 wireframe 屏幕一一对应
- [ ] greeked 文本已替换真实差旅文案
- [ ] 颜色、阴影到位
- [ ] SF Symbols 图标
- [ ] 至少 1 张真实图片或 QR

### Interactivity (10)

- [ ] 6 屏主流程连线完整（Home → Confirm + Modal）
- [ ] tap 跳转、Back、Modal、Scroll 都工作
- [ ] StatusBar / TopNav / TabBar 滚动时 Fixed

### UX Design (10)

- [ ] Signifiers（按钮颜色 / chevron 表示可深入）
- [ ] Feedback（Modal 弹出 = 操作成功）
- [ ] 一致性（每屏 TopNav / TabBar / Button 行为相同）
- [ ] 视觉层级（LargeTitle > Title 2 > Headline > Body > Footnote）
- [ ] Gestalt（Proximity / Similarity / Figure-Ground 都体现）

### Tool Usage (5)

- [ ] 用了 Components（**9 个 wireframe + 5 个 Hi-Fi 共 14 个**）+ Variants（TabBar/Button/FlightCard/ModalSheet/IphoneFrame）
- [ ] 用了 Component Properties（ListRow Boolean+Text / **TopNav Boolean+Text** / Button Text）
- [ ] 用了 **Instance Swap**（Hi-Fi 页 swap 到 (HF) 版本）
- [ ] 用了 Auto Layout（TabBar、ListRow、FlightCard、TopNav 内部）
- [ ] 用了 Variables（10 个）和 Text Styles（5 个）
- [ ] Prototype 过渡动画合理（Push / Move in）

### 提交

- [ ] mbietz@uci.edu Can view
- [ ] yihungc1@uci.edu Can view
- [ ] 链接已复制并提交到 Canvas

---

## 13. 附录 A：UI3 速查表

### UI3 界面分区（参照你的截图）

| 区域 | 位置 | 内容 |
|------|------|------|
| 顶部左 | 左上角 | 文件名 / Drafts / Free 标签 |
| 顶部中 | 顶部中央 | Design / Prototype / Dev 模式切换 |
| 顶部右 | 右上角 | E 头像 / ▶ Present / Share |
| 左侧 | File / Assets tab | File：Pages + Layers；Assets：组件库 |
| 中央 | 大画布区 | 你画图的地方 |
| 右侧 Design 面板 | 右侧 | 选中元素的属性（Position / Layout / Appearance / Fill / Stroke / Effects） |
| 底部工具栏 | **底部居中浮动** | 选择 ▼ / Frame ⬜ / Shape / Pen / Text T / 等 |

### 必背快捷键 Top 15

| 快捷键 | 作用 |
|------|------|
| **F** | Frame 工具 |
| **R** | 矩形 |
| **O** | 椭圆 |
| **L** | 线 |
| **T** | 文字 |
| **V** | 选择 |
| Cmd+G | 编组 |
| Cmd+Alt+G | 框入 frame |
| **Cmd+Alt+K** | 创建 component |
| **Shift+A** | 套 Auto Layout |
| **Cmd+D** | 复制（保位置） |
| **Cmd+/** | Quick Actions（万能搜索） |
| **Cmd+Alt+Enter** | Present 原型 |
| Cmd+C / Cmd+V | 复制 / 粘贴 |
| 右键 → Paste interactions only | 仅粘贴 Prototype 连线 |

### 菜单位置速查（UI3 与经典版差异）

| 功能 | UI3 位置 |
|------|------|
| 工具栏 | **底部居中浮动**（不在顶部） |
| 模式切换 | 顶部中央（Design / Prototype） |
| Pages | 左侧 File tab → 顶部 |
| Layers | 左侧 File tab → 中部 |
| Assets（组件库） | 左侧 **Assets** tab |
| 加 Variant / Property | 选中 main → 右侧 Properties 区 + |
| Local Variables | Cmd+/ → "Local variables" |
| Auto Layout | Shift+A 或 右侧 Layout 区 |
| Clip content | Design → Layout 区底部 ✅ |
| 滚动设置 | Prototype 模式 → Scroll behavior |
| Open Overlay | Prototype → Action → Open overlay |

### 速通技巧汇总

| 想做的事 | 速通做法 |
|------|------|
| 8 屏骨架 | 画完 01 Home → Cmd+D 7 次 → 改名 / 改内容 |
| Wireframe → Hi-Fi | 右键 Pages → Duplicate Page → 改色 + 替换文字 |
| 文案批量替换 | Cmd+/ → "Find" 插件 |
| TabBar 全局连线 | 一屏连完 → Cmd+C → 下一屏 → Paste interactions only |
| 多屏滚动 | 一屏配完 → Cmd+C → 下屏 → Paste interactions only |
| 找菜单 | Cmd+/ 中英文都行 |

---

## 附录 B：iOS 设计规范速查（贴在 Components 页）

### 颜色

| Token | Hex / Alpha |
|-------|------|
| bg/primary | `#FFFFFF` |
| bg/secondary | `#F2F2F7` |
| label/primary | `#000000` |
| label/secondary | `#3C3C43` 60% |
| accent/default | `#0A84FF` |
| success | `#34C759` |
| warning | `#FF9500` |
| destructive | `#FF3B30` |
| wf/stroke | `#000000` |
| wf/fill | `#D9D9D9` |

### 字号

| Name | Weight | Size / Line |
|------|------|------|
| LargeTitle | Bold | 34 / 41 |
| Title 2 | Bold | 22 / 28 |
| Headline | Semibold | 17 / 22 |
| Body | Regular | 17 / 22 |
| Footnote | Regular | 13 / 18 |

### 圆角与间距

```
圆角:
  小按钮 / 标签        8px
  标准卡片 / 输入框    12px
  FlightCard          20px
  Modal sheet 顶部    28px
  圆形头像 / 圆图标    50%

间距 4-base:
  4 / 8 / 12 / 16 / 20 / 24 / 32

iPhone 15 Pro 安全区:
  StatusBar     54px
  TopNav        44px
  TabBar        72px
  HomeIndicator 34px
  内容区        ≈ 648px
```

---

## 附录 C：Wireframe greeked 文案库（复制粘贴用）

> 各屏需要 greeked 的字段，下面给出现成文案。**直接复制粘贴到对应 component instance 的 Text Property**。
>
> **规则**：UI label / button / nav / tab 用真实英文；field value / description 段落用占位。

### 通用占位符表

| 数据类型 | 占位文案 | 说明 |
|------|------|------|
| 航班号 | `XX0000` | 2 字母 + 4 数字 |
| 机场代码 | `XXX` | 3 字母 |
| 时间 | `XX:XX` | |
| 日期 | `Xxx, Xxx 00` | "Mon, May 12" 样式 |
| 金额 | `$X,XXX.00` 或 `$XXX.00` | |
| 座位号 | `00X` | "3A" 样式 |
| 登机口 | `XX0` | "B12" 样式 |
| 时长 | `Xh XXm` 或 `XX min` | |
| 描述短句 | `Lorem ipsum dolor sit amet.` | |
| 描述段落 | `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.` | |

---

### 01 Home

| 字段 | 文案 |
|------|------|
| LargeTitle | `Hi, Adam` （真实 — Adam 是 persona 名字，相当于个性化欢迎语） |
| Subtitle | `Your next flight` （真实 — UI label） |
| **Avatar (右上角 56×56 圆形)** | wireframe 阶段：灰圆占位；Hi-Fi 阶段：Unsplash "businessman headshot" 或 GenAI 生成 |
| FlightCard `flightNumber` | `XX0000` |
| FlightCard `origin` | `XXX` |
| FlightCard `dest` | `XXX` |
| FlightCard `departTime` | `XX:XX` |
| FlightCard `arriveTime` | `XX:XX` |
| FlightCard `gate` | `Lorem ipsum dolor sit` |
| **BoardingPass `PASSENGER` value** | `Lorem Ipsum`（Hi-Fi 替换为 `Adam Bobrow`） |
| **BoardingPass `SEAT` value** | `00X`（Hi-Fi 替换为 `3A`） |
| **BoardingPass `GATE` value** | `XX0`（Hi-Fi 替换为 `B12`） |
| **BoardingPass `BOARDS` value** | `XX:XX`（Hi-Fi 替换为 `09:00`） |

---

### 02 My Trips（6 张 FlightCard）

| Card | flightNumber | origin | dest | departTime | arriveTime | gate | state |
|------|------|------|------|------|------|------|------|
| 1 | `XX0001` | `XXX` | `XXX` | `XX:XX` | `XX:XX` | `Lorem ipsum` | Upcoming |
| 2 | `XX0002` | `XXX` | `XXX` | `XX:XX` | `XX:XX` | `Lorem ipsum` | OnTime |
| 3 | `XX0003` | `XXX` | `XXX` | `XX:XX` | `XX:XX` | `Lorem ipsum` | Delayed |
| 4 | `XX0004` | `XXX` | `XXX` | `XX:XX` | `XX:XX` | `Lorem ipsum` | Upcoming |
| 5 | `XX0005` | `XXX` | `XXX` | `XX:XX` | `XX:XX` | `Lorem ipsum` | OnTime |
| 6 | `XX0006` | `XXX` | `XXX` | `XX:XX` | `XX:XX` | `Lorem ipsum` | Delayed |

Segmented Control: `Upcoming` / `Past` （真实 — UI label）
TopNav title: `My Trips` （真实）

---

### 03 Flight Detail

| 字段 | 文案 |
|------|------|
| TopNav title | `XX0000` |
| Hero (LargeTitle) | `XXX ✈ XXX` |
| Hero subtitle | `Xxx, Xxx 00 · XX:XX → XX:XX` |
| BoardingPass `PASSENGER` value | `Lorem Ipsum` |
| BoardingPass `SEAT` value | `00X` |
| BoardingPass `GATE` value | `XX0` |
| BoardingPass `BOARDS` value | `XX:XX` |
| Timeline `Boards` value | `XX:XX` |
| Timeline `Departs` value | `XX:XX` |
| Timeline `Arrives` value | `XX:XX` |
| Timeline `Gate` value | `XX0` |
| Button label | `Rebook this Flight` （真实 — button label） |

---

### 04 Rebook

| 字段 | 文案 |
|------|------|
| TopNav title | `Rebook Flight` （真实） |
| FlightCard (Delayed) flightNumber | `XX0000` |
| FlightCard origin / dest | `XXX` / `XXX` |
| FlightCard times | `XX:XX` / `XX:XX` |
| FlightCard gate | `Delayed by XX min` |
| Description 段落 | `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.` |
| 3 ListRow titles | `Find earlier flight` / `Find later flight` / `Cancel & refund` （真实 — UI action label） |
| Button label | `Find Alternatives` （真实） |

---

### 05 Search Flights（6 张候选 FlightCard）

| Card | flightNumber | origin | dest | departTime | arriveTime | gate | state |
|------|------|------|------|------|------|------|------|
| 1 | `XX0007` | `XXX` | `XXX` | `XX:XX` | `XX:XX` | `$XXX` | Upcoming |
| 2 | `XX0008` | `XXX` | `XXX` | `XX:XX` | `XX:XX` | `$XXX` | Upcoming |
| 3 | `XX0009` | `XXX` | `XXX` | `XX:XX` | `XX:XX` | `$XXX` | Upcoming |
| 4 | `XX0010` | `XXX` | `XXX` | `XX:XX` | `XX:XX` | `$XXX` | Upcoming |
| 5 | `XX0011` | `XXX` | `XXX` | `XX:XX` | `XX:XX` | `$XXX` | Upcoming |
| 6 | `XX0012` | `XXX` | `XXX` | `XX:XX` | `XX:XX` | `$XXX` | Upcoming |

> 这屏 gate 字段被借用来显示价格（如果你想 gate 字段也用 greeked，把 gate 改成 `Lorem ipsum`，另想办法显示价格）

Segmented Control: `Sort: Time` / `Sort: Price` （真实 — UI label）
TopNav title: `Search Flights` （真实）

---

### 06 Confirm Rebook

| 字段 | 文案 |
|------|------|
| TopNav title | `Confirm Rebook` （真实） |
| Hero (LargeTitle) | `XX0000 · XX:XX` |
| Hero subtitle | `Departure changed by +Xh XXm` |
| FlightCard 全字段 | 用占位（同 03） |
| Timeline `Departure` value | `XX:XX (was XX:XX)` |
| Timeline `Arrival` value | `XX:XX` |
| Timeline `Aircraft` value | `XXXX` |
| Timeline `Seat` value | `00X` |
| Button label | `Confirm Rebooking` （真实） |

---

### 07 Concierge

| 字段 | 文案 |
|------|------|
| TopNav title | `Concierge` （真实） |
| Hero subtitle | `Live updates for your trip` （真实 — UI helper text） |
| LiveData Row 1 title / value | `TSA Wait Time` （真实） / `XX min` |
| LiveData Row 2 title / value | `Walk to Gate` （真实） / `X min` |
| LiveData Row 3 title / value | `Lounge to Gate` （真实） / `X min` |
| LiveData Row 4 title / value | `Boarding starts in` （真实） / `XX min` |
| Notification 标题 | `Gate change notification` （真实 — system feedback label） |
| Notification 描述 | `Lorem ipsum dolor sit amet, consectetur adipiscing.` |

---

### 08 Expenses

| 字段 | 文案 |
|------|------|
| TopNav title | `Expenses` （真实） |
| Summary `This month` label | `This month` （真实） |
| Summary value | `$X,XXX.00` |
| ListRow 5 行 title | `XX0001 XXX→XXX` / `Lorem ipsum` / `Lorem ipsum` / `XX0002 XXX→XXX` / `Lorem ipsum` |
| ListRow 5 行 subtitle | `Xxx 00` （日期占位，5 行都用同一格式） |
| ListRow 5 行 value | `$XXX.00` / `$XXX.00` / `$XX.00` / `$XXX.00` / `$XXX.00` |
| Button label | `Send to Assistant` （真实 — button label） |

---

### Modal-Confirmed

| 字段 | 文案 |
|------|------|
| Title | `Rebooking confirmed` （真实 — UI feedback message，相当于系统状态 label） |
| Body | `Lorem ipsum dolor sit amet, consectetur.` |
| Primary button | `View New Itinerary` （真实） |
| Secondary button | `Done` （真实） |

---

> ⚡ **快速复制 tip**：每次填一张 FlightCard 的 6 个 Text Property，按 Tab 在右侧 Properties 输入框之间快速跳转，每个字段粘贴 1 次。

> 💡 **Hi-Fi 阶段替换**：§6.3 章节会教你把这些占位文案替换成真实差旅文案（UA245 / SFO / JFK / 09:30 等）。

---

## 附录 D：Adam 痛点 ↔ 设计决策（写进 Notes 加分）

| Adam 的痛点 | 我的设计 | 屏 |
|------|------|------|
| 邮件里翻不到行程 | My Trips 一屏看完 + 滚动 | 2 |
| 延误后改签麻烦 | 1-tap Rebook 流（4 步完成） | 4/5/6 |
| 错过登机口变更 | TabBar 第 3 tab Concierge 实时推送 | — |
| 报销翻邮件麻烦 | Expenses 一键 Send to Assistant | 8 |
| 太多营销推送 | 只有功能性通知 | — |

---

**完工后**：先 ▶ Present 走一遍，对照 §12 Checklist 全部打钩；再按 §9 / §10 填好 Cover 和 Notes 页；最后回 §11 提交。预祝拿满分。
