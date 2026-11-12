---
title: AI 生成前端的字体与排版配置
description: 从文字呈现的常见问题出发，梳理字体、排版、布局与资源加载，建立可复用的配置和验收方案。
date: 2026-11-12
updated: 2026-11-12
categories: [研究笔记]
tags: [前端, 字体, 排版, 可访问性]
permalink: /ai-frontend-typography
---

用 AI 生成博客、后台或应用界面时，页面往往很快就能运行起来：导航、卡片和按钮齐备，默认窗口下的截图也看不出明显问题。换上真实文章、长标题和中文代码注释，或在另一台设备上打开后，文字方面的缺陷才逐渐显现：中英文粗细不协调，说明文字过淡，标题换行拥挤，放大字号后按钮被撑破，字体加载时页面突然跳动。

这些现象需要一套贯穿字体选择、排版、布局和资源加载的配置，而不只是更换字体名称。对于中文内容较多的网站，可以从常见症状入手定位原因，再建立统一的配置基线，并用真实内容、缩放和跨设备测试验证。

## 一、文字问题从哪里来

一段文字从内容变成屏幕上的像素，需要经过字体选择、排版和布局，最后由浏览器与操作系统绘制。成熟的字体配置要覆盖这条链路，而不只是声明一个字体名称。

### 1. 内容与语言：究竟要显示哪些文字

页面可能同时包含中文、英文、数字、Emoji、代码和公式。语言还决定标点习惯、阅读方向和允许的断行位置。若只用几行英文占位内容验收，就容易漏掉中文注释缺字、长机构名溢出、其他语言重音符号被裁切等问题。

这一板块需要确定支持的语言和内容类型，为页面及必要的局部内容标明语言，并准备真实的测试样本。

### 2. 字体与字形：哪些文件实际负责绘制

字体家族、字重、字符覆盖和回退顺序共同决定最终字形。首选字体可能只有西文，也可能没有所需的粗体；同一句话因此会混用多个字体。表现出来就是中英文视觉大小不一致、标题粗细跳变，或特殊字符变成方框。

配置需要同时回答：首选字体是什么、缺字时用什么、哪些字重真实存在，以及字体不可用时如何继续阅读。声明的字体栈只是候选，最终应检查浏览器实际使用的字体。

### 3. 排版尺度与色彩：文字能否被轻松辨认

字号、字重、行距、字距、段距和阅读宽度决定阅读节奏，文字与背景的对比度决定辨认难度。字体本身即使没有问题，12px 的浅灰说明、紧贴的多行标题和过长的正文行，仍然可能难读。

这一板块需要建立正文、标题、说明、代码等语义层级，并一起设计浅色、深色和交互状态。不能把单独一个“好看的字号”当作完整排版方案。

### 4. 容器与交互：文字变化后还有没有空间

文字尺寸会随内容、字体和用户设置变化。固定高度的按钮、禁止换行的导航和不可收缩的卡片，在默认截图里可能正常，换成长标题或放大字号后就会裁切、遮挡或撑宽页面。

配置需要允许组件增高、换行和重排；对于必须截断的内容，另设可操作的全文入口。能看见文字和能点击、聚焦、展开内容，需要分别保证。

### 5. 加载与授权：字体何时到达、能否分发

Web 字体需要下载。加载期间使用什么字体、下载失败如何处理、替换后尺寸是否变化，会影响首屏空白和页面跳动。一次引入多个完整中文字库，还会增加传输负担。

配置需要管理文件格式、体积、加载时机、缓存和回退尺寸，同时核实使用与分发许可。系统里已经安装的字体，也不能据此直接打包成网站资源。

### 6. 运行环境与验收：配置最终怎样呈现

相同的 CSS 在不同系统、浏览器、屏幕和缩放比例下，可能呈现不同的笔画和间距。这属于最终绘制环节，不能依靠一个抗锯齿属性彻底统一。

验收应同时检查实际字形、内容完整性和操作可用性。发现问题时先定位对应环节：换字体可能改善中英文匹配，却不能解决固定高度裁切；提高对比度能改善淡字，却不能修复下载失败后的缺字。

## 二、AI 直出前端容易遗漏什么

这些问题并非 AI 生成代码独有。在生成式开发中，完整界面可能先于字体资源审查、真实内容测试和跨平台验收出现。检查生成结果时，以下几类遗漏尤其值得留意。

### 1. 只配置了英文，没有设计中文回退

声明 Inter、Roboto 或某个展示字体，并不意味着中文也使用同一字体。字体选择会根据字符覆盖情况继续回退，一句话可能实际由多个字体共同呈现。中英文的字面大小、基线和粗细因此可能不协调。

代码区域也会遇到同样的问题。Consolas、Menlo 等字体未覆盖的中文字形需要回退。显式配置中文候选能让选择更明确，但不能让回退字体变成等宽字体，也不能保证一个汉字恰好等于两个西文字符。[字体匹配说明](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/font-family)

### 2. 把字重数字当成连续可用的刻度

写出 400、500、550、600、700，并不代表设备上存在五种对应字形。静态字体只有若干实际字重，浏览器需要按规则匹配；可变字体也只能在文件声明支持的范围内变化。

缺少 600 而有真实 700 时，可以匹配到 700；500 匹配到 400 也可能完全符合规则。这与浏览器合成粗体是两件事。应检查实际使用的字体和字重，而不是仅查看 CSS 中的数字。[字重及匹配规则](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/font-weight)

正文不使用描边、重叠阴影模拟粗体。对于不允许合成粗体的项目，可以设置 `font-synthesis-weight: none`，同时保证关键字重实际可用，并检查回退后的强调效果。[合成字重控制](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/font-synthesis-weight)

### 3. 用小字、浅灰和紧行距制造“精致感”

元信息、占位文字、脚注、说明和表格很容易成为可读性的薄弱点。透明度叠加在卡片、图片或深色背景上，实际对比度可能比预想更低。

信息层级应同时通过位置、间距、字号和字重表达。重要内容不能仅靠压小、淡化来让出空间。正文通常应满足至少 4.5:1 的文字对比度；符合标准定义的大号文字最低为 3:1。页面上叫作“标题”的元素不一定属于标准中的大号文字。[WCAG 对比度说明](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)

### 4. 在默认字号下成立，放大后失效

固定高度、单行按钮、不可收缩的 Flex/Grid 子项、全局禁止换行，以及过度使用省略号，都可能在文字变大时造成遮挡或信息丢失。

浏览器整页缩放、修改默认字号、移动端文字自动放大是不同机制。使用 px 不会自动禁止整页缩放；但将根字号固定为 16px，再全部使用 rem，也没有真正尊重用户修改默认字号的选择。

### 5. 为短占位文案设计，遇到真实内容就溢出

中文标题、英文机构名、论文 DOI、长 URL、带单位的数字、代码和数学公式有不同的断行需求。全局 `word-break: break-all` 会把普通英文单词任意切开；全局 `white-space: nowrap` 则可能把整个页面撑宽。

截断也需要完整信息入口。只给一个鼠标悬停提示，不足以覆盖键盘和触屏用户。

### 6. 把抗锯齿开关当作通用修复

`-webkit-font-smoothing` 等属性的支持和效果依赖平台。它们不能保证跨系统相同的笔画粗细，更不能替代适当的字号、字重与对比度。缩放文字容器、持续变换文字、使用滤镜等设计也应实测，不应仅凭某一台设备的截图判断。[非标准平滑属性说明](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/font-smooth)

### 7. 字体与图标资源没有纳入工程管理

一次引入整套中文字库、多种字重和几个图标包，可能增加下载量。字体到达前后尺寸变化，会使标题重排、按钮移动；资源失败时还可能出现空白或缺字。

“电脑里有这个字体”与“可以把字体文件放到网站供所有人下载”也不是同一授权。系统字体、本地 SVG、开源图标和 Web 字体都需要按实际来源核对许可。

## 三、把配置组织成可维护的系统

这些板块最终会落在不同文件和组件中。若每个组件分别设置字体、字号和颜色，很容易出现正文已经调整，而弹窗、表格和导航仍沿用旧值的情况。可以按职责组织：

- **全局基础层**：页面语言、字体栈、根字号、常规字重与表单继承规则。
- **设计 token 层**：集中命名字号、行距、颜色和操作区域尺寸，建立统一尺度。
- **语义组件层**：正文、标题、元信息、代码、公式、表格各自引用 token，并设置需要的断行和交互规则。
- **资源与验收层**：管理字体文件、许可、加载策略和测试样本，检查最终产物，而不只检查源码。

局部调整应能解释其用途。例如，代码块保留格式并局部滚动，正文允许自然换行；不能为了修复某一张卡片，就改变全站文字的断行方式。

## 四、一套可落地的配置方案

对于以中文为主的研究博客和内容型界面，可以采用系统字体优先、语义 token 集中管理的配置。下面的基线覆盖字体、层级、颜色、断行、特殊内容、资源和验收；具体字号和阅读宽度仍需用实际内容调整。

### 1. 字体：系统字体优先，明确回退

正文采用无衬线字体，西文和数字随系统界面字体；中文提供苹方、微软雅黑、Noto Sans CJK SC 等候选，最后保留通用字体族。

```css
:root {
  --font-emoji: "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji";
  --font-body: system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", "PingFang SC", "Microsoft YaHei",
    "Noto Sans CJK SC", var(--font-emoji), sans-serif;
  --font-code: ui-monospace, "Cascadia Code", "SFMono-Regular",
    Menlo, Consolas, "Liberation Mono",
    "PingFang SC", "Microsoft YaHei", "Noto Sans CJK SC",
    var(--font-emoji), monospace;
}
```

`system-ui` 自身可能已经覆盖中文，因此后面的中文列表是回退候选，不是强制的中西文字体分区。如果需要严格规定各字符范围使用哪套字体，应另行设计语言选择器或经授权的 Web 字体分区，不能仅凭这个列表声称已完全控制。

字体匹配后，用实际段落检查中文、英文和数字的视觉大小、粗细及上下位置，例如“模型 GPT-4.1 的准确率为 87.5%”。相同 CSS 字号不代表字面看起来一样大；先确认实际字体，再判断是否需要更换搭配。只有字体来源明确、实测确有失衡时，才考虑对特定 `@font-face` 使用 `size-adjust`。它会缩放字形及相关度量，不是单独移动基线的工具，也不宜给随设备变化的系统字体栈套一个统一修正比例。

Segoe UI Emoji 作为优先项只会在设备有它且匹配适用时生效；没有它的设备会继续回退。它不能把所有平台统一成 Windows 表情。明确标记的 Emoji 元素可单独使用 Emoji 栈，但表情组合和字形版本仍有系统差异。装饰性表情应从辅助技术中隐藏，有含义的图标要提供文本名称。

### 2. 字号、字重与行距：集中为语义 token

```css
:root {
  --text-small: 0.875rem;
  --text-body: 1rem;
  --text-h3: 1.25rem;
  --text-h2: 1.5rem;
  --text-h1: 2rem;
  --weight-body: 400;
  --weight-strong: 700;
  --leading-body: 1.75;
  --leading-heading: 1.35;
  --reading-width: 46rem;
  --target-size: max(44px, 2.75rem);
}

html { font-size: 100%; }
body {
  font-family: var(--font-body);
  font-size: var(--text-body);
  font-weight: var(--weight-body);
  line-height: var(--leading-body);
  font-synthesis-weight: none;
}
button, input, select, textarea { font: inherit; }
h1, h2, h3, strong, b { font-weight: var(--weight-strong); }
h1, h2, h3 { line-height: var(--leading-heading); }
h1 { font-size: var(--text-h1); }
h2 { font-size: var(--text-h2); }
h3 { font-size: var(--text-h3); }
.meta { font-size: var(--text-small); }
.prose { max-inline-size: var(--reading-width); }
.prose :is(p, li, blockquote) { font-size: var(--text-body); }
```

1rem 在常见默认设置下约为 16px，用户调整默认字号后可以随之改变。行距使用无单位数值，避免继承固定长度带来的问题。

400/700 是这个系统字体方案的简化选择，并非中文必须只有两档字重。选用其他字重时，应确认实际文件、回退结果和跨平台层级。0.875rem 也不是“所有次要文字一律缩小”的指令；关键说明、表单标签和阅读负担较高的内容可以继续使用正文字号。

### 3. 色彩与链接：分别检查浅色、深色和交互状态

```css
:root {
  --surface: #ffffff;
  --text-primary: #202124;
  --text-secondary: #595959;
  --link: #174ea6;
  --focus: #174ea6;
}
[data-theme="dark"] {
  --surface: #15171a;
  --text-primary: #f1f3f4;
  --text-secondary: #b7bdc5;
  --link: #8ab4f8;
  --focus: #8ab4f8;
}
body { color: var(--text-primary); background: var(--surface); }
.meta { color: var(--text-secondary); }
.prose a {
  color: var(--link);
  text-decoration: underline;
  text-underline-offset: 0.18em;
  text-decoration-thickness: 0.08em;
}
:focus-visible { outline: 2px solid var(--focus); outline-offset: 3px; }
```

这里的颜色是一组基线，卡片、透明背景、选中状态和悬停状态还要分别测量。正文链接保留下划线；导航和按钮依靠组件结构表达交互，不必机械地为所有可点击内容加下划线。

### 4. 断行与布局：允许内容决定高度

```css
.prose, .post-title {
  word-break: normal;
  line-break: auto;
  overflow-wrap: anywhere;
}
.layout > *, .card > * { min-inline-size: 0; }
.navigation { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.control {
  min-inline-size: var(--target-size);
  min-block-size: var(--target-size);
  padding: 0.5rem 0.75rem;
  white-space: normal;
}
```

`overflow-wrap: anywhere` 为无法正常断开的长串提供兜底，不需要用全局 `break-all` 破坏普通单词。按钮使用最小高度和内边距，避免文字变大后被固定高度裁切。Grid 的可收缩内容列可以使用 `minmax(0, 1fr)`，同时检查侧栏何时折叠。

布局按语义逐步采用逻辑属性：随阅读方向变化的缩进、间距和对齐可用 `padding-inline-start`、`margin-inline-end`、`text-align: start`；确实表示物理方向的位置则保留 `left/right`。不要机械替换所有属性。逻辑属性只处理布局方向，RTL 内容仍需正确设置 `dir`，并处理混合文本的双向排序与隔离。

页面 viewport 保留 `width=device-width, initial-scale=1`，不写禁止用户缩放的限制。不要全局关闭移动端文字调整以掩盖布局问题。

独立按钮、图标按钮和导航以至少 44×44 CSS px 为设计目标。正文内联链接与脚注不强制变成大方块；WCAG 的增强目标本身包含内联例外。[点击目标说明](https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html)

标题优先换行。必须截断时，提供可用键盘和触屏访问的详情页或展开按钮。全文入口需有明确名称，不能只依赖 `title` 属性。

### 5. 代码、公式、数字和混排：分别处理

```css
code, pre { font-family: var(--font-code); }
pre {
  max-inline-size: 100%;
  overflow-x: auto;
  white-space: pre;
  overflow-wrap: normal;
  word-break: normal;
  line-height: 1.6;
}
pre code { white-space: inherit; }
.data-number { font-variant-numeric: tabular-nums; }
.table-scroll { max-inline-size: 100%; overflow-x: auto; }

@supports (text-autospace: normal) {
  .prose { text-autospace: normal; }
  .prose :is(pre, code, .katex, .MathJax, math) { text-autospace: no-autospace; }
}
```

等宽数字适合日期、计数和数据列，依赖字体支持对应特性；它不负责把不同长度的数值或小数点自动对齐，表格仍需布局规则。

代码保留缩进，必要时局部横向滚动；行内代码可以按上下文决定是否断行。数学公式继续由原有排版库管理字体和间距，不能对所有后代元素强制套用正文的字体、行距和字重。

中西文自动间距只作为渐进增强。旧浏览器忽略这项设置时，内容仍应正常阅读；不要批量给原始文本插入空格来修改代码、标识符或可复制内容。[自动间距说明](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-autospace)

### 6. 资源：系统字体基线与 Web 字体扩展

系统字体方案不额外下载正文字库，仍需要浏览器实际匹配可用字形。网站保留通用回退，并测试特殊字符、罕见汉字和 Emoji。用 CSS 引用访客设备已有字体，不等于把字体文件再分发给访客。[微软字体授权说明](https://learn.microsoft.com/en-us/typography/fonts/font-faq)

需要自托管 Web 字体时，应补齐以下环节：

- 核实 Web 使用、托管、修改和子集化许可，保留许可证及必要声明。
- 优先考虑 WOFF2，只引入需要的字重与样式；可变字体是否更省体积需要实测。
- 中文字体采用经过验证的分片或子集方案，不能只留下首页当前出现的字而遗漏后续文章。
- 正文可采用 `font-display: swap` 迅速显示回退文字；它仍可能产生字体交换和布局变化。`optional` 更偏向避免延迟交换，但可能让本次访问继续使用回退字体。[加载策略说明](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@font-face/font-display)
- 选择尺寸接近的回退字体。已知字体之间确有尺寸失衡时，可测量后使用 `size-adjust`；需要控制行盒度量时，再评估上升部、下降部等覆盖描述符。二者用途不同，均需检查换行和裁切，不能随意填写比例。
- 只预加载确实会在首屏使用的少量字体，检查缓存、跨域和部署路径，不预加载整套中文资源。
- 图标按实际使用集合打包，优先可访问的 SVG；装饰图标隐藏语义，按钮保留名称。检查最终产物是否仍有意外的外部请求。

可变字体需要在 `@font-face` 中声明文件实际支持的范围。例如，已核实某个获授权文件支持 300–800 的字重轴、且为正体时，可以写成：

```css
@font-face {
  font-family: "Site Sans";
  src: url("/fonts/site-sans-variable.woff2") format("woff2");
  font-style: normal;
  font-weight: 300 800;
  font-display: swap;
}
```

这里的文件名和范围是示例，必须按真实资源修改；把静态字体声明成范围不会产生可变字重。通常通过 `font-weight` 请求字重，不必为常规粗细控制直接操作 `font-variation-settings`。超出文件支持范围的请求仍会参与字体匹配，不能据此认为得到了真实的目标字重。匹配现有字重与浏览器合成粗体是不同过程；`font-synthesis-weight: none` 可以禁止合成，却不能补出字体没有的字形。[字体字重声明](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@font-face/font-weight)

加载策略最终需要通过网络和布局测试验证。[字体性能实践](https://web.dev/articles/font-best-practices)

### 7. 验收：让“完整”成为可重复的检查

配置完成后，至少覆盖以下测试：

1. Windows、macOS/iOS、Android 的代表性浏览器，检查实际渲染字体，而不只看声明的字体栈。
2. 桌面、平板与窄屏，长标题、中文标点、英文全称、长 URL、数字、代码、公式和表格。
3. 浏览器 200% 缩放、独立修改默认字号；检查相当于 320 CSS px 宽度的重排。必要的二维内容可以局部滚动，普通正文不应要求横向来回阅读。[重排要求](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html)
4. 用户增加行距、段距、字距、词距后，内容和操作仍完整。这是容错测试，不是要求所有页面默认使用那组测试间距。[文字间距要求](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html)
5. 浅色、深色、悬停、焦点、选中、错误与禁用状态；核对文字对比度和可辨认的交互状态。
6. 字体加载失败、慢网、冷缓存，以及脚本不可用时的主要内容。检查文字空白、布局跳动和意外外部请求。
7. 键盘访问、触屏点击、截断内容展开、搜索和导航。文字可见与功能可操作分别验收。

测试报告应区分实测与未测。某一台 Windows 浏览器通过，并不能写成跨平台兼容已完成；调整根字号的自动化测试，也不等于已经测试过浏览器真实缩放和所有系统的辅助设置。

## 五、换语言、技术栈和框架后如何使用

### 1. 可以沿用的是检查方法，数值需要重新验证

字体覆盖完整、层级清晰、对比度足够、尊重用户文字设置、加载失败仍可读、资源授权明确，这些原则不依赖某种语言或框架。内容、字体、排版、布局、加载和验收的分工也可以沿用。

本文示例中的中文字体栈、400/700 两档字重、1.75 行距、阅读宽度，以及正文采用无衬线字体，都是面向特定内容的起点。换语言、字体或产品类型后，应重新确定这些值，不能把它们当成全球通用标准。

### 2. 换语言时，重查字形、行距、断行与方向

- **中日韩文本**：检查目标地区字形、标点、换行和字体回退。简体中文的字体候选不应无条件覆盖日文或繁体中文。页面及不同语言的片段应声明相应 `lang`。[HTML 语言声明](https://www.w3.org/International/questions/qa-html-language-declarations)
- **拉丁字母语言**：检查重音符号、长词、连字符和译文长度。是否启用自动连字符断词，需要结合正确语言标记、浏览器支持和内容类型决定。
- **阿拉伯文、希伯来文等 RTL 文本**：在 HTML 中用 `dir` 标明基础方向；布局优先使用 `start/end`、`margin-inline` 等逻辑方向。混入数字、英文名称和 URL 时还要检查双向文本，必要时使用方向隔离。不能靠反转字符串或把所有组件镜像来处理。[W3C 方向说明](https://www.w3.org/International/questions/qa-html-dir)
- **泰文、南亚文字及其他复杂文字系统**：检查字体是否支持所需塑形、组合符号和断词，给上下附加符号留出空间。不要照搬西文的字距设置，也不要按单个 Unicode 码点强行截断文字。[W3C 各文字系统排版资料](https://www.w3.org/International/typography/)

日期、数字、单位和排序格式也应按地区处理。等宽数字只是字形宽度特性，不能代替本地化格式。

### 3. 换 Web 框架时，检查样式从哪里生效

React、Vue、Svelte、Angular 或服务端模板最终若输出 HTML/CSS，本文的浏览器配置原则仍然适用。需要调整的是接入方式：全局样式放在哪里，组件库是否覆盖字号，主题变量如何传递，以及构建后字体路径是否正确。

Tailwind 等工具类方案应把字体和字号映射到统一主题配置，避免组件里不断增加临时数值。CSS Modules、局部样式或 Shadow DOM 则需要核对作用域和继承边界。服务端渲染并不会自动修复字体回退；客户端渲染也不意味着必须等脚本完成才显示正文，关键仍是实际输出与加载顺序。

无论使用哪种框架，都应在最终构建产物中检查计算样式、实际字体、资源请求和交互，而不只检查开发预览。

### 4. 原生与跨平台界面需要使用各自的文字机制

CSS 的 `rem`、`@font-face`、`font-display` 和浏览器缩放规则不能原样搬进原生界面。

- **React Native**：通过 `Text` 及其样式组织文字，使用平台字体和文字缩放能力；继承范围、字体配置与 Web CSS 不同。应检查 `allowFontScaling` 等设置，不为维持布局而关闭用户字号偏好。[React Native Text](https://reactnative.dev/docs/text)
- **Flutter**：通过主题、`TextStyle`、字体资源和框架的文字缩放机制落实相同原则，并用真实的大字号设置测试布局。即使部署到 Web，也不能把 Flutter 的文字组件当作普通 DOM 元素套用这份 CSS。[Flutter 可访问性](https://docs.flutter.dev/ui/accessibility)
- **平台原生界面**：使用目标平台的语义文字样式、可缩放字号与无障碍机制。触控目标按平台单位和规范设计，不能把 CSS px 与原生布局单位直接等同。
- **WebView、Canvas 或图表中的文字**：WebView 仍需检查宿主限制；Canvas 或图表库绘制的文字则可能不参与普通 DOM 的排版和辅助技术语义，需要分别处理缩放、文字度量、可访问名称和替代内容。

迁移配置时，可以保留“正文、标题、说明、代码”等语义 token 名称，在各端映射为合适的字体、单位和组件。验收目标保持一致：用户在自己的语言、设备和文字设置下，仍能完整阅读并完成操作。

## 六、术语表

| 术语 | 含义与用途 |
| --- | --- |
| 字体家族 Font family | 共享设计的一组字体，例如同家族的常规体与粗体。 |
| 字形 Glyph | 字符在特定字体中的具体形状；字符与字形并非总是一一对应。 |
| 字体栈 Font stack | 按优先级排列的候选字体列表。 |
| 回退 Fallback | 首选字体不可用或缺少字形时，使用后续字体的过程。 |
| CJK | 中文、日文、韩文相关文字系统的合称。区域字形可能不同。 |
| 无衬线 Sans-serif | 笔画末端通常没有衬线装饰的字体类别。 |
| 等宽 Monospace | 字符采用相同前进宽度的字体设计；混入回退字体后仍需检查对齐。 |
| 字重 Font weight | 字形的笔画粗细属性，如 400、700。 |
| 合成粗体 Synthetic bold | 浏览器在缺少相应字形时算法生成的粗体效果。 |
| 可变字体 Variable font | 一个文件包含可调设计轴，例如字重或宽度。 |
| 字体度量 Font metrics | 基线、上升部、下降部、字符宽度等布局相关参数。 |
| 基线 Baseline | 字符排布所依据的参考线。 |
| 行高 Line height | 行框的高度；不等于字形可见部分的高度。 |
| 字距 Letter spacing | 字符之间增加或减少的间距。 |
| 字偶距 Kerning | 针对特定字形组合调整的间距。 |
| 连字 Ligature | 多个字符组合显示为一个或一组特殊字形。 |
| rem / em | rem 基于根字号；em 的参照随所用属性与上下文而定，字号上通常参照父元素字号。 |
| CSS px | 浏览器布局中的参考像素，不一定等于设备物理像素。 |
| 等宽数字 Tabular numerals | 让数字字形占用相同宽度的排版特性。 |
| 重排 Reflow | 可用空间或文字尺寸变化后，内容重新换行与布局。 |
| 渐进增强 Progressive enhancement | 基础体验先成立，再为支持的环境增加功能。 |
| FOIT / FOUT | 加载字体时的文字暂时不可见 / 回退字体先显示再交换现象。 |
| CLS | 累积布局偏移指标，用于衡量页面意外移动。字体交换是潜在原因之一。 |
| WOFF2 | 面向 Web 的压缩字体文件格式。 |
| 子集化 Subsetting | 仅保留需要的字形或功能，以减少字体体积。 |
| 抗锯齿 Antialiasing | 用像素颜色过渡减轻边缘锯齿感的渲染技术。 |
| 设计 token | 集中命名的设计值，例如字号、行距、颜色与间距。 |
| 文字塑形 Text shaping | 根据文字规则与上下文，把字符序列转换成正确的字形组合与位置。 |
| RTL / 双向文本 | RTL 指从右向左的基础书写方向；与从左向右的文字或数字混排时，需要双向文本处理。 |
| 逻辑属性 Logical properties | 按书写方向的起点、终点等定义布局，而不是固定使用左、右。 |
