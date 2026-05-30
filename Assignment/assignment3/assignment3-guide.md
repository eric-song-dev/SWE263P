# SWE 263P Assignment 3 — Figma Components & Prototypes 完整指南

> **主题风格：OnlyFans 蓝白配色**  
> 课程：SWE 263P User Experience & Interaction  
> 满分：100 分 | 提交：Figma Prototype 共享链接  
> ⚠️ **禁止使用 GenAI（包括 Figma Make）**

---

## 目录

1. [作业总览与评分标准](#1-作业总览与评分标准)
2. [OnlyFans 设计风格规范](#2-onlyfans-设计风格规范)
3. [Figma 文件结构设置](#3-figma-文件结构设置)
4. [Components 页面：逐组件实现](#4-components-页面逐组件实现)
5. [Survey 页面：逐屏实现](#5-survey-页面逐屏实现)
6. [Prototype 交互配置](#6-prototype-交互配置)
7. [状态保留（State Preservation）](#7-状态保留state-preservation)
8. [命名规范 Checklist](#8-命名规范-checklist)
9. [提交步骤](#9-提交步骤)
10. [最终 Checklist](#10-最终-checklist)

---

## 1. 作业总览与评分标准

### 任务摘要

在 Figma 中创建一个**手机端交互式问卷原型**，每页只显示 1 个问题，用户可以前后导航，且离开页面再返回时答案状态需要保留。

### 评分标准（共 100 分）

| 评分项 | 分值 | 评估内容 |
|--------|------|---------|
| **Meets Assignment Requirements** | 50 分 | Figma 文件是否包含所有必要的 Pages、Components、以及设计好的手机屏幕 |
| **Survey Question Page Design** | 10 分 | 每题是否在独立屏幕中，输入控件是否合适，前进/后退按钮是否清晰 |
| **Prototype Navigation** | 15 分 | 能否前后导航？按钮有 hover 效果？第一页能滚动？提交时有确认 Modal？ |
| **Survey Input Field Interactions** | 15 分 | 输入控件交互是否符合要求？离开再返回时状态是否保留？ |
| **Components** | 10 分 | 交互元素是否都做成了带 Variants 的 Component？ |

### 问卷页面一览

| 页码 | 问题 | 答题类型 | 关键交互 |
|------|------|---------|---------|
| 1 | 介绍页（标题 + 作者 + 长文本） | 无 | 页面需要滚动才能看完全部内容 |
| 2 | What is your favorite name? | 短文本输入框 | 点击输入框 → 显示已填写状态 |
| 3 | What is your favorite date? | 日期输入框 | 点击 → 弹出日历；点击日历 → 填入日期并关闭日历 |
| 4 | What is your favorite primary color? | Radio Buttons（Red/Green/Blue） | 初始无选中；每次点击循环选中下一个选项 |
| 5 | Which meals do you typically eat in a day? | Checkboxes（Breakfast/Lunch/Dinner） | 初始无选中；每个 checkbox 独立切换选中/未选中 |
| 6 | Are you ready to submit? | Back + Submit 按钮 | Submit → 确认 Modal；确认 → 成功感谢页 |

---

## 2. OnlyFans 设计风格规范

OnlyFans 的 UI 核心特征：**清爽的天蓝色 + 纯白背景 + 深色文字 + 圆角卡片**。

### 调色板

| 用途 | 颜色名 | Hex | 使用场景 |
|------|--------|-----|---------|
| 主品牌色 | OF Blue | `#00AFF0` | 主按钮、选中状态、进度条、链接 |
| 深蓝辅助 | Deep Navy | `#0F2C4E` | 标题文字、图标 |
| 背景白 | Pure White | `#FFFFFF` | 页面背景、卡片背景 |
| 浅灰背景 | Light Gray | `#F5F8FA` | 输入框背景、未选中项 |
| 边框灰 | Border Gray | `#E0E7EF` | 输入框边框、分割线 |
| 错误红 | Alert Red | `#FF4D4D` | （备用，本作业不需要） |
| 文字灰 | Body Gray | `#4A5568` | 正文内容、副标题 |
| 选中蓝浅 | Blue Tint | `#E6F7FD` | 选中 Radio/Checkbox 的背景填充 |

### 字体规范

```
标题（Title）:       Inter Bold,  24px,  #0F2C4E
副标题（Question）:  Inter SemiBold, 18px, #0F2C4E
正文（Body）:        Inter Regular, 14px, #4A5568
按钮文字:           Inter SemiBold, 16px, #FFFFFF（主按钮）/ #00AFF0（次按钮）
输入框文字:         Inter Regular, 14px, #0F2C4E
占位符:             Inter Regular, 14px, #A0AEC0
```

> Figma 中若无 Inter，用 **Roboto** 或 **SF Pro** 均可。

### 圆角规范

```
页面卡片 Frame:     border-radius = 0（铺满屏幕）
输入框：            border-radius = 8px
按钮：              border-radius = 24px（胶囊形）
Checkbox / Radio:  border-radius = 4px（方）/ 50%（圆）
Modal 弹窗:         border-radius = 16px
日历 Widget:        border-radius = 12px
```

### 间距规范

- 页面横向 Padding：`16px` 左右
- 问题与输入框间距：`12px`
- 输入框内部 Padding：`12px 16px`
- 按钮高度：`48px`
- 页面顶部安全区（Status Bar 模拟）：`44px`

---

## 3. Figma 文件结构设置

### 3.1 新建文件

1. 打开 [figma.com](https://www.figma.com) → **New design file**
2. 将文件命名为：`SWE263P - Assignment 3 - [Your Name]`

### 3.2 创建两个 Pages

在左侧 Pages 面板：

```
Page 1: Components
Page 2: Survey
```

> 命名必须完全匹配（大写开头，正确拼写）。

### 3.3 设置手机 Frame 尺寸

在 **Survey** 页面，每个屏幕使用以下 Frame：
- 设备模板：`iPhone 14` → `390 × 844 px`
- 或手动创建 Frame，宽 `390`，高 `844`
- Frame 背景颜色：`#FFFFFF`

---

## 4. Components 页面：逐组件实现

> **关键原则**：所有可点击元素必须做成 Component，并通过 **Variants** 管理不同状态。在 Components 页面完成所有组件后，再到 Survey 页面引用它们。

---

### 4.1 主按钮（Primary Button）

**变体（Variants）：**

| Variant 属性 | 值 |
|-------------|---|
| `State` | `Default` / `Hover` |

**Default 样式：**
- 宽：`358px`（`390 - 32` 横向 Padding 后的满宽）
- 高：`48px`
- Fill：`#00AFF0`
- Corner Radius：`24px`
- 文字：`Inter SemiBold 16px #FFFFFF`，居中

**Hover 样式：**
- Fill：`#0098CE`（加深 10%）
- 其余相同

**Prototype 设置（后面统一做）：**
- `While Hovering` → Change To → `Hover` variant

---

### 4.2 次按钮 / Back Button（Secondary Button）

**变体：**

| `State` | `Default` / `Hover` |

**Default 样式：**
- 尺寸同主按钮（或做成 `160px` 宽用于双按钮布局）
- Fill：`#FFFFFF`
- Stroke：`#00AFF0`，宽度 `2px`
- 文字颜色：`#00AFF0`

**Hover 样式：**
- Fill：`#E6F7FD`

---

### 4.3 短文本输入框（Text Input）

**变体：**

| `State` | `Empty` / `Filled` |

**Empty 样式：**
- 宽：`358px`，高：`48px`
- Fill：`#F5F8FA`
- Stroke：`#E0E7EF`，1px，Corner Radius `8px`
- 内部有占位符文字：`e.g. Alex`，颜色 `#A0AEC0`，14px

**Filled 样式（点击后显示）：**
- Fill：`#FFFFFF`
- Stroke：`#00AFF0`，2px（聚焦蓝色边框）
- 内部文字替换为预设答案（如 `Alex`），颜色 `#0F2C4E`

**Prototype：**
- `On Click` → `Empty` → Change To → `Filled`

---

### 4.4 日期输入框（Date Input）

**变体：**

| `State` | `Empty` / `Filled` |

**Empty 样式：**
- 同 Text Input 的 Empty，但占位符改为 `MM / DD / YYYY`
- 右侧添加一个日历图标（📅，用矩形 + 文字模拟即可）

**Filled 样式：**
- 文字替换为预设日期，如 `04 / 23 / 2026`

> **日历 Widget** 是独立组件，见 4.5。

---

### 4.5 日历 Widget（Calendar Widget）

这是本作业允许直接截图参考日历图片的唯一组件，但**文本框和交互必须自己做**。

**推荐做法：**

1. 在网上找一张月历截图（如 Google Calendar），复制进 Figma（仅限这里）
2. 把图片放入一个 Frame，大小约 `358 × 300px`
3. Frame 样式：Fill `#FFFFFF`，Stroke `#E0E7EF`，Corner Radius `12px`，加阴影 `0 4px 20px rgba(0,0,0,0.12)`
4. 在图片上方覆盖一个透明的 `Rectangle`（占满 Widget），命名为 `Calendar/ClickArea`

**变体：**

| `State` | `Visible` / `Hidden` |

- `Hidden`：设置 Frame 的 `Visible` 属性为 `false`（或将 opacity 设为 0，或移到屏幕外）
- **推荐**：用 Component 的 Variant，`Hidden` 状态下整个 Widget 高度设为 0 或不显示

**Prototype（在 Survey 页面设置）：**
- Date Input（Empty → Filled） 点击后，还需要让 Calendar 从 Hidden → Visible
- 点击 Calendar/ClickArea → Calendar: Visible → Hidden；同时 Date Input → Filled

---

### 4.6 Radio Button 组（Radio Button Group）

这是本作业技巧最多的组件，要用 **Variant 循环切换**。

**变体设计：**

整个 Radio Group（包含三个选项 Red/Green/Blue）做成 **1 个 Component**，有以下 Variants：

| `Selected` | 显示效果 |
|-----------|---------|
| `None` | 所有选项未选中（初始状态） |
| `Red` | Red 选中，Green/Blue 未选中 |
| `Green` | Green 选中，Red/Blue 未选中 |
| `Blue` | Blue 选中，Red/Green 未选中 |

**单个选项的视觉结构（嵌套在组内）：**

```
Radio Option Row
├── Radio Circle (24x24)
│   ├── 未选中: 圆圈 Stroke #E0E7EF，Fill #F5F8FA
│   └── 选中:   圆圈 Stroke #00AFF0，Fill #00AFF0，内部白色实心小圆(10x10)
└── Label Text: "Red" / "Green" / "Blue"，14px #0F2C4E
```

**Prototype 设置：**

在组件内部：
- Click on `Radio Group (None)` → Change To → `Radio Group (Red)`
- Click on `Radio Group (Red)` → Change To → `Radio Group (Green)`
- Click on `Radio Group (Green)` → Change To → `Radio Group (Blue)`
- Click on `Radio Group (Blue)` → Change To → `Radio Group (None)`

> 这样实现了题目要求的"每次点击循环切换选中项"。

**OnlyFans 风格的选中行背景：**
- 选中的那一行 Row 的 Fill 改为 `#E6F7FD`，左侧加 `3px #00AFF0` 的左边框

---

### 4.7 Checkbox 组（Checkbox Group）

每个 Checkbox 做成**独立的 Component**，共 3 个（Breakfast、Lunch、Dinner）。

**单个 Checkbox Component 的变体：**

| `State` | `Unchecked` / `Checked` |

**Unchecked 样式：**
```
Checkbox Box (20x20): Fill #F5F8FA, Stroke #E0E7EF, Corner Radius 4px
Label: "Breakfast"，14px，#4A5568
```

**Checked 样式：**
```
Checkbox Box (20x20): Fill #00AFF0, Stroke #00AFF0, Corner Radius 4px
内部白色对勾 ✓（用两条白色线段绘制）
Label: "Breakfast"，14px，#0F2C4E（加深）
行背景: Fill #E6F7FD
```

**Prototype：**
- `On Click` → `Unchecked` ↔ `Checked`（Toggle，双向）

> 三个 Checkbox 各自独立，互不影响。

---

### 4.8 确认 Modal（Confirmation Modal）

**变体：**

| `State` | `Visible` / `Hidden` |

**Modal 样式：**
```
背景遮罩 Overlay (390x844): Fill rgba(0,0,0,0.5)，放在最底层
Modal Card (350x220): Fill #FFFFFF, Corner Radius 16px, 居中定位
  ├── 标题: "Submit Survey?"，Inter Bold 18px #0F2C4E
  ├── 说明文字: "Are you sure you want to submit your survey?"，14px #4A5568
  ├── [Confirm 按钮]（主按钮样式，#00AFF0）
  └── [Cancel 按钮]（次按钮样式）
```

**Prototype：**
- Submit 按钮 → Modal: Hidden → Visible（Overlay + Navigate To or Change To）
- Cancel → Modal: Visible → Hidden
- Confirm → Navigate To → 成功感谢页

---

### 4.9 Progress Bar / Header（可选加分项）

在每个问卷页顶部添加进度指示，提升 UX：

```
Header Frame (390x60): Fill #FFFFFF, 底部 1px Border #E0E7EF
  ├── 左侧: Back 图标按钮（← ），点击可返回
  ├── 中间: "Survey"，Inter SemiBold 17px #0F2C4E
  └── 右侧: "2/6"，14px #00AFF0

进度条 (390x4): 
  ├── 背景: Fill #E0E7EF
  └── 前景: Fill #00AFF0，宽度按进度变化（每个屏幕单独设置）
```

---

## 5. Survey 页面：逐屏实现

> 所有 Frame 尺寸：`390 × 844px`，背景 `#FFFFFF`。  
> 从 Components 页面拖入组件的 Instance 使用。

---

### Screen 1：Introduction Page（介绍页）

**布局：**

```
Frame: Introduction Page (390x844+)   ← 高度可超过 844，配合 Scrolling
  
  [Status Bar 模拟] (390x44)
    時間 + 电量等（可直接用一个矩形代替）Fill #00AFF0，文字白色
    
  [Header Area]
    Survey Title: "UCI Campus Survey 2026"
    Inter Bold, 28px, #0F2C4E, 居中
    
    Author: "By [Your Name]"
    Inter Regular, 16px, #4A5568, 居中
    
    分割线: 1px #E0E7EF, 全宽
    
  [Scrollable Text Area]  ← 这里需要够长（建议放 500px 高的文字内容）
    Instructions / Terms of Use 标题：Inter SemiBold 16px #0F2C4E
    正文：3-5 段 Lorem Ipsum 文字，Inter Regular 14px #4A5568，行高 22px
    （可从 https://www.lipsum.com/ 生成）
    
  [Bottom Area]（固定在底部，不随滚动移动）
    [Begin Survey 按钮] → 主按钮样式，点击 → 跳转到 Screen 2
    
    Bottom 安全区: 34px 空白（模拟 iPhone 的 Home Bar）
```

**Scrolling 设置：**
- 选中 Frame → Prototype 面板 → `Overflow Behavior` → `Vertical Scrolling`
- Frame 的 `Clip Content` 打开

> **技巧**：将 Bottom 按钮区域放在一个单独的 Fixed Bottom Frame 内，设置为 `Fix position when scrolling`（在 Design 面板的 Constraints 中勾选）。

---

### Screen 2：Favorite Name（文本输入）

```
Frame: Q2 - Favorite Name (390x844)

  [Progress Header]（组件 Instance，进度 2/6）
  
  [页面内容区，Padding 16px]
    问题编号标签: "Question 2 of 5"，12px #00AFF0，SemiBold
    问题文字: "What is your favorite name?"
              Inter SemiBold 20px #0F2C4E，行高 28px
              
    输入框组件 Instance（Text Input - Empty state）
      ↓（点击后 → Filled state）
    
    提示文字（可选）: "Enter your favorite name below"
              12px #A0AEC0
  
  [Bottom Navigation]
    ← Back Button（次按钮）  |  Next → Button（主按钮）
    两按钮并排，各宽 167px，间距 16px
```

**Prototype：**
- Text Input Click: Empty → Filled（在 Instance 上可能已继承，需确认）
- Back → Navigate To → Screen 1
- Next → Navigate To → Screen 3

---

### Screen 3：Favorite Date（日期选择）

```
Frame: Q3 - Favorite Date (390x844)

  [Progress Header]（3/6）
  
  [页面内容区]
    "Question 3 of 5"
    "What is your favorite date?"
    
    [Date Input 组件 Instance]（Empty state）
    
    [Calendar Widget 组件 Instance]（Hidden state）
      ↓ 点击 Date Input → Calendar 变为 Visible
      ↓ 点击 Calendar → Date Input 变为 Filled，Calendar 变为 Hidden
  
  [Bottom Navigation]
    Back | Next
```

**Prototype（关键！）：**

由于 Figma Prototype 一次只能触发一个 Action，要让点击 Date Input 后同时做两件事（Input: Empty→Filled + Calendar: Hidden→Visible），有两种方案：

**方案 A（推荐）：将 Date Input + Calendar Widget 封装成一个大 Component**

做一个 `Date Picker` 组件，包含：
- `State = Default`：Input Empty + Calendar Hidden
- `State = Calendar Open`：Input Empty + Calendar Visible  
- `State = Filled`：Input Filled + Calendar Hidden

交互：
- `Date Picker (Default)` Click → Change To → `Date Picker (Calendar Open)`
- `Date Picker (Calendar Open)` Click on Calendar Area → Change To → `Date Picker (Filled)`

**方案 B（简化）：**
用 Figma 的 Interactive Components，在 Calendar Widget 的同级 Frame 内单独设置，利用 **Component Swap** 或 **Conditional** 模式（Figma 较新版本支持）。

---

### Screen 4：Favorite Primary Color（Radio Button）

```
Frame: Q4 - Primary Color (390x844)

  [Progress Header]（4/6）
  
  [页面内容区]
    "Question 4 of 5"
    "What is your favorite primary color?"
    "(Choose one.)"，12px #A0AEC0
    
    [Radio Button Group 组件 Instance]（初始 State = None）
    
    颜色预览方块（可选，加分视觉元素）：
      三个小方块（32x32），分别填充 #FF4444, #44BB44, #4477FF，圆角 4px
      显示在对应选项旁边
  
  [Bottom Navigation]
    Back | Next
```

---

### Screen 5：Meals Checkboxes

```
Frame: Q5 - Meals (390x844)

  [Progress Header]（5/6）
  
  [页面内容区]
    "Question 5 of 5"
    "Which meals do you typically eat in a day?"
    "(Select all that apply.)"，12px #A0AEC0
    
    [Checkbox - Breakfast Instance]（Unchecked）
    [Checkbox - Lunch Instance]（Unchecked）
    [Checkbox - Dinner Instance]（Unchecked）
    
    每个 Checkbox 行高 56px，带底部分割线 1px #E0E7EF
  
  [Bottom Navigation]
    Back | Next（进入 Screen 6）
```

---

### Screen 6：Submit Page

```
Frame: Q6 - Submit (390x844)

  [Progress Header]（6/6）
  
  [页面内容区，垂直居中]
    图标（✓ 徽章，用 #00AFF0 填充圆形 + 白色 ✓）
    
    "You're Almost Done!"
    Inter Bold 24px #0F2C4E，居中
    
    "Ready to submit your survey? Click submit below."
    14px #4A5568，居中
    
    [Submit 按钮（主按钮）]
      → 点击 → 显示 Confirmation Modal
  
  [Bottom Navigation 区域]
    [Back 按钮]（次按钮，返回 Screen 5）
```

**Prototype：**
- Submit Click → Open Overlay → `Confirmation Modal`（Overlay 类型）
- Modal Cancel → Close Overlay
- Modal Confirm → Navigate To → Screen 7（成功页）

---

### Screen 7：Success Page（感谢页）

```
Frame: Thank You (390x844)

  [页面内容，垂直居中，无导航栏]
  
  [大号成功图标]（圆形 80x80，Fill #00AFF0，内部白色 ✓，72px stroke）
  
  "Survey Submitted!"
  Inter Bold 28px #0F2C4E，居中
  
  "Thank you for completing the survey."
  "Your responses have been recorded."
  16px #4A5568，居中，行高 24px
  
  [Return Home 按钮（主按钮）]（可以跳回 Screen 1 模拟重置）
```

---

## 6. Prototype 交互配置

### 6.1 导航流程图

```
Screen 1 (Intro)
  └─[Begin Survey]──→ Screen 2 (Name)
                           ├─[Back]──→ Screen 1
                           └─[Next]──→ Screen 3 (Date)
                                            ├─[Back]──→ Screen 2
                                            └─[Next]──→ Screen 4 (Color)
                                                             ├─[Back]──→ Screen 3
                                                             └─[Next]──→ Screen 5 (Meals)
                                                                              ├─[Back]──→ Screen 4
                                                                              └─[Next]──→ Screen 6 (Submit)
                                                                                               ├─[Back]──→ Screen 5
                                                                                               └─[Submit]─→ Modal
                                                                                                              ├─[Cancel]─→ (关闭 Modal)
                                                                                                              └─[Confirm]→ Screen 7 (Thank You)
```

### 6.2 所有按钮的 Hover 效果配置

在 Prototype 面板，对每个按钮：
- Trigger：`While Hovering`
- Action：`Change To`
- 目标：该按钮的 `Hover` Variant

### 6.3 Screen 1 Scrolling 配置

- 选中 Screen 1 的 Frame
- Prototype 面板 → Overflow Behavior → `Vertical Scrolling`

### 6.4 State Preservation（状态保留）

这是 15 分的核心。

在 Prototype 面板的 **Navigation 设置中**：

- 所有 "Navigate To" 的过渡方式：改用 `Navigate` 而**不是** `Replace`
- 更重要：在 Survey 页面，**不要为每个问题创建单独的 Frame**，而是让所有 Screen 都作为 Frames 存在于同一个 Prototype Flow 中
- **状态保留的 Figma 机制**：对于组件 Instance，当使用 **"Smart Animate"** 或直接 **Navigate（而非 Close/Replace）** 时，同一 Flow 中的 Instance 状态会被记住

**具体做法：**
1. 将所有 Screen Frame 放在 Survey 页面中
2. 在 Prototype 面板：Flow → 从 Screen 1 开始
3. 所有页面间跳转使用 `Navigate To` + `Instant` 或 `Smart Animate` 过渡
4. **避免使用 `Open Overlay` 来做页面跳转**（只对 Modal 用 Overlay）

---

## 7. 状态保留（State Preservation）

### 为什么这很重要（15 分里有它）

题目要求：用户在 Page 4 选了 "Green"，然后点 Back 回 Page 3，再点 Next 回 Page 4，"Green" 依然是选中状态。

### Figma 实现原理

Figma 的 **Interactive Components** 会在同一个 Prototype Flow 的 Navigate 操作中自动保留组件内部状态（Variant State）。

**关键设置：**

1. 确保 Radio Group、Checkbox 等组件有正确的 **Interactive Components** 设置（在组件内部的 Prototype 交互）
2. 所有屏幕间导航使用 `Navigate To`（不是 Push/Replace）
3. 在 Prototype 的 Presentation 界面，组件状态会在同一 Session 内保留

### 验证方法

1. 点击 ▶ 播放原型
2. 进入 Page 4，点击选 "Blue"
3. 点 Back 回 Page 3
4. 点 Next 回 Page 4
5. 确认 "Blue" 仍被选中 ✓

---

## 8. 命名规范 Checklist

良好的命名是 50 分中"Meets Assignment Requirements"的一部分。

### Components 页面命名示例

```
Components（Page Name）
  
  Buttons/
    Button/Primary/Default
    Button/Primary/Hover
    Button/Secondary/Default
    Button/Secondary/Hover
  
  Inputs/
    Input/Text/Empty
    Input/Text/Filled
    Input/Date/Empty
    Input/Date/Filled
  
  Widgets/
    Calendar Widget/Visible
    Calendar Widget/Hidden
  
  Radio/
    Radio Group/None
    Radio Group/Red
    Radio Group/Green
    Radio Group/Blue
  
  Checkboxes/
    Checkbox/Breakfast/Unchecked
    Checkbox/Breakfast/Checked
    Checkbox/Lunch/Unchecked
    Checkbox/Lunch/Checked
    Checkbox/Dinner/Unchecked
    Checkbox/Dinner/Checked
  
  Modal/
    Confirmation Modal/Visible
    Confirmation Modal/Hidden
```

### Survey 页面命名示例

```
Survey（Page Name）
  
  Frames:
    Screen 1 - Introduction
    Screen 2 - Favorite Name
    Screen 3 - Favorite Date
    Screen 4 - Primary Color
    Screen 5 - Daily Meals
    Screen 6 - Submit
    Screen 7 - Thank You
```

---

## 9. 提交步骤

1. 完成所有设计和 Prototype 配置后，点击 Figma 右上角 **Share** 按钮
2. 选择 **"Anyone with the link"** → 权限设为 **"can view"**
3. 点击 **"Copy link"**
4. 进入 Canvas 作业页面 → **Start Assignment**
5. 选择 **"Website URL"** 标签
6. 粘贴 Figma 链接 → 提交

---

## 10. 最终 Checklist

在提交前逐项确认：

### 文件结构
- [ ] 文件有且仅有 2 个 Page：`Components` 和 `Survey`
- [ ] Components 页面包含所有需要的组件
- [ ] Survey 页面包含 7 个 Screens（1 介绍 + 5 问题 + 1 感谢页）
- [ ] 所有 Frame、Component 命名清晰有意义

### 组件
- [ ] 主按钮有 Default / Hover 两个 Variant
- [ ] 次按钮（Back）有 Default / Hover 两个 Variant
- [ ] 文本输入框有 Empty / Filled 两个 Variant
- [ ] 日期输入框有 Empty / Filled 两个 Variant
- [ ] 日历 Widget 有 Visible / Hidden 两个 Variant
- [ ] Radio Group 有 None / Red / Green / Blue 四个 Variant
- [ ] Breakfast Checkbox 有 Unchecked / Checked 两个 Variant
- [ ] Lunch Checkbox 有 Unchecked / Checked 两个 Variant
- [ ] Dinner Checkbox 有 Unchecked / Checked 两个 Variant
- [ ] 确认 Modal 有 Visible / Hidden 两个 Variant

### 交互
- [ ] 所有按钮有 Hover 效果
- [ ] Screen 1（介绍页）可以垂直滚动，文字够长
- [ ] Screen 1 有 "Begin Survey" 按钮进入 Screen 2
- [ ] Screen 2-6 都有 Back 和 Next/Submit 按钮
- [ ] 文本输入框：点击后变为 Filled 状态
- [ ] 日期输入框：点击后显示日历；点击日历后填入日期并关闭日历
- [ ] Radio Group：初始无选中；点击循环切换
- [ ] Checkboxes：初始均未选中；各自独立切换
- [ ] Submit 按钮：弹出确认 Modal
- [ ] Modal Cancel：关闭 Modal（回到 Screen 6）
- [ ] Modal Confirm：跳转到 Screen 7（感谢页）

### 状态保留
- [ ] 在 Screen 4 选择颜色后，Back 再 Next，选择仍然保留
- [ ] 在 Screen 5 选择 Checkbox 后，Back 再 Next，选择仍然保留
- [ ] 在 Screen 2/3 填写后，Back 再 Next，填写状态仍然保留

### 视觉
- [ ] 所有 Screen 宽度为 390px（iPhone 14 规格）
- [ ] 主色调使用 `#00AFF0`（OnlyFans Blue）
- [ ] 背景为 `#FFFFFF`
- [ ] 字体统一（Inter / Roboto / SF Pro）
- [ ] 按钮圆角为 24px（胶囊形）
- [ ] 输入框圆角为 8px

---

## 附录：OnlyFans 风格参考色板（Figma 格式）

在 Figma 中，进入 **Design → Local Styles** 添加以下颜色样式：

| Style 名称 | Hex |
|-----------|-----|
| `Brand/OF Blue` | `#00AFF0` |
| `Brand/Deep Navy` | `#0F2C4E` |
| `Neutral/White` | `#FFFFFF` |
| `Neutral/Light Gray` | `#F5F8FA` |
| `Neutral/Border` | `#E0E7EF` |
| `Neutral/Body Text` | `#4A5568` |
| `Neutral/Placeholder` | `#A0AEC0` |
| `State/Blue Tint` | `#E6F7FD` |
| `State/Hover Blue` | `#0098CE` |

> 建议在 Components 页面左上角留一个 **Style Reference** 区域，把色板方块排列好，方便对照。

---

*祝作业顺利！记住不能用 GenAI，所有交互和组件都要手工在 Figma 里做。*
