---
title: AI 学术发表体系
description: 发表载体、研究社群、同行评审、论文版本与评价标签。
date: 2026-11-10
updated: 2026-11-10
categories: [研究笔记]
tags: [人工智能, 学术发表, 同行评审]
permalink: /ai-academic-publication-system
recommend: 10
---

## 发表体系的几个层次

一篇论文的完整出处包含多个维度：研究领域、发表场所、年份、投稿轨道、文章类型、评审状态、正式版本与展示形式。

- **Venue（发表场所）**：承接投稿、评审与录用的会议或期刊。
- **Track（投稿轨道）**：同一 venue 内按贡献类型、研究主题或稿件形式划分的投稿入口，具有各自的征稿说明与评审要求。
- **Proceedings（会议论文集）**：会议录用论文的正式出版集合，可按年份、卷次或轨道组织。
- **Preprint（预印本）**：作者公开传播的稿件版本，可以在投稿前、评审中或正式出版后持续更新。
- **Review platform（评审平台）**：管理投稿、审稿、讨论与决策的软件系统。
- **Index（索引）**：收录论文元数据、引文关系或全文入口的检索系统。

书目信息可记录为：作者、标题、venue、年份、track、卷期或页码、DOI／论文链接、稿件版本。阅读记录再补充评审链接、代码仓库、数据来源与勘误。

## 研究社群与发表入口

### 机器学习

- **NeurIPS**：学习算法、理论、优化、概率方法、神经计算、应用及相关交叉研究。主会之外设有独立征稿的专题轨道与 workshops，轨道名称和范围随年份调整。
- **ICML**：机器学习方法、理论、系统、评估与应用。具体贡献范围和投稿要求由当年的 Call for Papers 确定。
- **ICLR**：表示学习、深度学习及相关理论、方法和应用。投稿与评审讨论通过 OpenReview 组织。
- **AISTATS**：统计与机器学习的交叉研究。
- **UAI**：不确定性建模、概率推断、因果推断与相关机器学习研究。
- **COLT**：计算学习理论。

正式论文可从各会议官网、NeurIPS Proceedings、Proceedings of Machine Learning Research（PMLR）及 OpenReview 的会议页面定位。PMLR 按会议和卷次出版论文集。[^ml-venues]

### 计算机视觉

**CVPR、ICCV、ECCV** 的研究范围包括视觉表征、识别、检测、分割、三维视觉、视频、生成模型与视觉语言等。CVF Open Access 提供 CVPR、ICCV 等会议的开放论文入口；ECCV 的出版信息可由 ECVA 与 Springer 的对应卷次查询。[^vision]

### 自然语言处理与计算语言学

**ACL、EMNLP、NAACL** 覆盖语言建模、语义、机器翻译、信息抽取、对话、语言资源与评估等方向。**COLING** 也是计算语言学的重要发表入口。论文、长短文轨道、系统演示与 Findings 等出版记录可在 **ACL Anthology** 查询。[^acl-venues]

### 人工智能综合与交叉研究

**AAAI、IJCAI** 覆盖人工智能的多个方向，包括知识表示、推理、规划、搜索、学习与多智能体。相关研究也进入专门的学术社群：信息检索有 SIGIR，数据挖掘有 KDD，机器人有 ICRA、IROS、RSS，人机交互有 CHI。投稿对象由论文的问题、贡献与预期读者共同决定。[^ai-venues]

### 期刊

- **JMLR（Journal of Machine Learning Research）**：机器学习研究，采用编辑负责的同行评审流程。
- **TMLR（Transactions on Machine Learning Research）**：机器学习研究，全年接收投稿，采用双盲评审与公开讨论。
- **TPAMI（IEEE Transactions on Pattern Analysis and Machine Intelligence）**：模式分析、机器智能与计算机视觉等。
- **TACL（Transactions of the Association for Computational Linguistics）**、**Computational Linguistics**：自然语言处理与计算语言学。
- **Artificial Intelligence**、**JAIR（Journal of Artificial Intelligence Research）**：人工智能领域的综合性研究。

期刊录用后进入终稿检查、出版协议、在线发布、卷期编排等环节，具体顺序取决于出版方式。部分期刊设有将已发表论文带到会议展示的安排。[^journals]

## 同行评审的工作流

### 会议投稿

常见流程为：

**征稿与选轨 → 摘要登记 → 全文提交 → 形式检查 → 分配审稿人 → 初审 → 作者回复与讨论 → 综合评审 → 录用决定 → 终稿与出版 → 会议展示。**

- **Call for Papers（CFP）**：规定研究范围、文章类型、篇幅、匿名要求、截止时间、补充材料与出版政策。
- **Abstract deadline**：登记标题、摘要、作者及领域信息。部分会议单独设置这一节点。
- **Desk rejection**：因超出范围、违反格式、匿名或其他政策等原因直接拒稿；通常发生在初筛，也可能在后续发现违规时发生。
- **Reviewer**：评估问题、方法、论证、实验、相关工作与局限，给出文字意见、评分和置信度。
- **Area Chair（AC）**：组织审稿与讨论，处理分歧，形成综合判断。部分会议另设 Senior Area Chair。
- **Rebuttal／author response**：作者对评审问题作出回应，澄清误读、补充证据并说明修改。可提交的材料与修改幅度由当年规则约束。
- **Meta-review**：汇总评审、回复及讨论中的关键判断，说明建议录用或拒稿的理由。
- **Program Chairs（程序主席）**：组织整体评审流程与录用决策。
- **Camera-ready**：录用后提交的正式终稿，包含作者信息、最终文本、致谢与规定的出版材料。

评审通常涉及技术正确性、贡献、证据充分性、表达清晰度、相关工作、可复现性与伦理。具体权重随 venue 和贡献类型变化。录用决定包含对文字意见、分歧、作者回应和程序要求的综合判断。[^conference-review]

### 匿名与公开

**双盲评审**隐藏作者与审稿人的身份；**单盲评审**通常向作者隐藏审稿人身份；**开放评审**涉及稿件、评审或讨论的公开范围。身份可见性、材料可见性、公开时间是分别配置的维度。[^open-review]

利益冲突申报、审稿保密、引用方式、预印本宣传与大模型使用政策，均属于评审程序的一部分。规则应定位到具体年份、venue 与 track。

### 期刊投稿

期刊通常由编辑接收稿件，检查研究范围与基本要求，再邀请审稿人。作者按决定提交修订稿及逐条回复，编辑依据修订与评审作出后续决定。

常见状态包括：submitted、with editor、under review、revision requested、accepted、published。状态名称与可见粒度取决于投稿系统。

TMLR 采用滚动投稿，评审与讨论通过 OpenReview 开展。其录用标准围绕两个问题：论文主张是否得到准确且有说服力的证据支持；研究是否对部分目标读者有价值，并清楚传达其发现。另设 certification 机制，对符合条件的录用论文作进一步标注。[^tmlr]

### ARR 与会议 commitment

**ACL Rolling Review（ARR）** 为参与的 NLP 会议提供分轮次的评审服务。作者提交稿件，获得评审、作者回复机会与 meta-review；修改后的稿件可按规则再次提交评审。

当目标会议开放 **commitment** 时，作者将符合要求的稿件及其 ARR 评审记录提交给该会议，由会议作出录用决定。流程中的时间节点包括 ARR 投稿截止、评审完成、会议 commitment 截止、录用通知与终稿截止。

**Findings of the Association for Computational Linguistics（简称 Findings）** 是有正式出版记录的论文集合。进入某届会议主会或对应 Findings 的决定及展示安排，由该届会议政策确定。书目中的出版集合应如实保留。[^arr]

## 轨道、文章类型与展示形式

### 按贡献组织的轨道

- **Main／Research track**：按该会议征稿范围接收研究论文。
- **Datasets／Benchmarks／Evaluations track**：围绕数据、基准、评测方法与评测基础设施组织贡献，具体名称由会议规定。
- **Position paper**：提出清晰立场，并以论据组织对研究方向、实践或制度问题的讨论。
- **Systems／Demonstrations**：围绕系统实现、可用能力或现场演示组织稿件。
- **Industry／Applied track**：面向产业实践、真实应用与部署经验，具体证据要求由征稿说明确定。

轨道名称本身只提供投稿类别。正式出版归属、评审标准、篇幅及是否接收已发表工作，都需要读取对应 CFP。[^tracks]

### Workshops

Workshop 围绕较集中的主题组织报告、论文与讨论。一次 workshop 可以设置完整论文、短文、摘要、邀请报告或已有论文展示等入口。

核对 workshop 论文时，需记录：组织方、所属会议与年份、具体 workshop 名称、稿件类型、评审方式、是否 **archival**、论文集入口及后续投稿政策。Archival 表示该轨道将作品作为正式学术出版记录保存；non-archival 的具体边界由公开政策确定。[^workshops]

### Oral、Spotlight、Poster 与奖项

- **Oral**：口头报告。
- **Spotlight**：较短的重点报告或相应展示安排，具体形式由会议定义。
- **Poster**：海报展示与现场交流。
- **Best Paper／Outstanding Paper**：会议或期刊按特定程序评选的论文奖项。

记录一篇论文时，先保存准确的 venue、track 和录用状态，再记录其展示形式与奖项。[^presentation]

## 论文版本、平台与出版记录

### arXiv

arXiv 提供稿件公开存储、学科分类、版本管理与长期链接。一个条目可有 v1、v2 等版本，并可补充 journal reference 与 DOI。引用依赖特定实验结果、公式或文字时，应记录实际阅读的版本。

arXiv 的内容审核属于 moderation，处理适用范围及内容规范；论文的同行评审状态需要从相应会议、期刊或评审记录中确认。[^arxiv]

### OpenReview

OpenReview 支持投稿、审稿、作者回复、讨论、决策与终稿管理。页面可能处于投稿、撤稿、拒稿、录用或正式出版等不同状态，访问权限由组织者配置。

核对时查看 venue／group、年份、track、decision、版本历史与官方出版链接。[^platform]

### 正式出版与检索

- **Publisher／proceedings page**：确认正式标题、作者、出版年份、卷期页码及出版集合。
- **DOI**：标识并链接数字对象；解析到的落地页承载相应版本与元数据。
- **DBLP**：计算机科学书目检索，便于定位作者、会议、期刊及出版记录。
- **Google Scholar、Semantic Scholar**：用于发现文献、引文关系与可访问版本。
- **论文主页、GitHub、Hugging Face**：承载代码、模型、数据、演示与补充材料。

同一研究可以同时具有预印本、投稿版本、作者接收稿与正式出版版本。结果、作者顺序、附录和勘误应以所引用版本为准。会议论文扩展为期刊稿时，需要核对目标期刊对新增贡献、先前发表披露及文本重用的规定。[^versions]

## 评价标签及其适用范围

### Venue 层面的目录与指标

**CCF 推荐目录**按计算机学科领域列出推荐的国际学术会议与期刊，并使用 A、B、C 类别。2026 年发布的第七版明确，会议条目的考虑范围为 Full／Regular paper。使用时注明目录版本、学科领域、具体条目与论文类型；所在机构的成果认定规则另行核对。[^ccf]

**Journal Citation Reports（JCR）**提供期刊引文指标及学科排名。使用 Journal Impact Factor（JIF）、JIF rank 或 quartile 时，应记录报告年份和学科类别；同一期刊可被归入多个学科。[^jcr]

**中国科学院期刊分区表**是按其自身方法形成的期刊评价体系。中国科学院文献情报中心于 2026 年 3 月 27 日声明，自 2026 年起不再更新与发布该表。引用历史分区信息时，应记录版本年份、大类或小类及 Top 等标签的具体含义。[^cas]

### 论文层面的证据

阅读一篇论文，可以按以下顺序建立判断：

1. **问题与主张**：研究试图解决什么问题？结论的适用条件是什么？
2. **方法与假设**：核心机制、数学假设、数据前提与计算条件是否写清？
3. **证据链**：每个主要结论分别由哪些定理、实验或分析支撑？
4. **实验设计**：数据划分、基线选择、调参预算、随机种子、统计不确定性与数据泄漏是否得到处理？
5. **消融与边界**：关键模块的作用、失败案例、分布变化及限制是否有证据？
6. **可复现材料**：代码版本、环境、超参数、数据处理、模型权重与运行成本是否可追踪？
7. **评审与后续研究**：争议点、作者回应、独立复现、修正及撤稿记录是否改变结论？

venue、录用率、引用量、排名与奖项可作为背景信息。技术判断需要落实到论文的主张、证据及适用边界。[^evaluation]

## 投稿前的核对项

- **范围**：研究问题、贡献类型与目标读者是否符合当年 CFP。
- **轨道**：文章类型、篇幅、模板、匿名要求及正式出版归属。
- **时间**：摘要、全文、补充材料、作者回复、commitment 与终稿的独立截止点，以及 UTC／AoE 等时区。
- **作者**：作者名单、贡献、单位、通讯信息、利益冲突及审稿义务。
- **材料**：正文、附录、证明、代码、数据、伦理审批、许可证与披露要求。
- **重复发表**：同时投稿、预印本、workshop 版本、会议扩展稿的适用政策。
- **可公开性**：数据使用权限、个人隐私、第三方材料、研究保密与潜在风险。
- **录用后义务**：终稿、出版协议、注册、展示、材料公开及勘误。

[^ml-venues]: 官方入口：[NeurIPS](https://neurips.cc/)、[ICML](https://icml.cc/)、[ICLR](https://iclr.cc/)、[PMLR](https://proceedings.mlr.press/)、[NeurIPS Proceedings](https://papers.neurips.cc/)。PMLR 是论文集系列，JMLR 是期刊，二者不应因名称相近而混记。AISTATS、UAI、COLT 的历年论文集可通过 PMLR 查询。

[^vision]: [CVF Open Access](https://openaccess.thecvf.com/)；[ECVA Publications](https://www.ecva.net/papers.php)。检索时保留 main conference 与 workshop 的出版集合信息。

[^acl-venues]: [ACL Anthology](https://aclanthology.org/)。同一会议名下可能有主会论文、Findings、演示与 workshop 等不同出版集合，不能仅靠会议简称合并记录。

[^ai-venues]: 官方入口：[AAAI](https://aaai.org/conference/aaai/)、[IJCAI](https://www.ijcai.org/)、[SIGIR](https://sigir.org/)、[SIGKDD](https://www.kdd.org/)、[IEEE Robotics and Automation Society](https://www.ieee-ras.org/)、[RSS](https://roboticsconference.org/)、[ACM SIGCHI](https://sigchi.org/)。

[^journals]: [JMLR Author Information](https://jmlr.org/author-info.html)、[TMLR](https://jmlr.org/tmlr/)、[TACL](https://transacl.org/)、[Computational Linguistics](https://direct.mit.edu/coli)、[JAIR](https://www.jair.org/)。会议与期刊是发表组织形式，不能在所有 AI 子领域套用统一的高低顺序；是否经过完整同行评审、具体 track、贡献和证据，需要分别确认。

[^conference-review]: [NeurIPS 2026 Main Track Handbook](https://neurips.cc/Conferences/2026/MainTrackHandbook)、[ICML 2026 Call for Papers](https://icml.cc/Conferences/2026/CallForPapers)、[ICLR 2027 Author Guidelines](https://iclr.cc/Conferences/2027/AuthorGuidelines)。这些文件体现具体年度的流程，页数、修改权限、评审表和截止安排不宜直接外推到其他年份。

[^open-review]: 双盲与公开评审并不互斥：前者涉及身份，后者涉及材料与过程的可见性。例如 TMLR 在双盲条件下公开稿件与评审讨论，见 [TMLR FAQ](https://jmlr.org/tmlr/faq.html)。

[^tmlr]: [TMLR Acceptance Criteria](https://jmlr.org/tmlr/acceptance-criteria.html)、[Author Guide](https://jmlr.org/tmlr/author-guide.html)、[Reviewer Guide](https://jmlr.org/tmlr/reviewer-guide.html)。TMLR 的基础录用标准与突出影响力等额外 certification 分开处理；certification 的名称和规则应按当前指南核对。

[^arr]: [ARR Author Instructions](https://aclrollingreview.org/authors)、[ACL 2026 CFP](https://2026.aclweb.org/calls/main_conference_papers/)、[Findings 系列](https://aclanthology.org/venues/findings/)。会议 commitment、主会与 Findings 的具体规则应查目标会议当年 CFP。ARR 提供评审记录，会议负责相应录用决定；获得 ARR 评审不等于被某届会议录用。Findings 是正式出版集合，不应标成 workshop 或未经评审的预印本。

[^tracks]: 示例：[ICML 2026 Position Papers](https://icml.cc/Conferences/2026/CallForPositionPapers)、[NeurIPS 2026 Evaluations and Datasets](https://neurips.cc/Conferences/2026/CallForEvaluationsDatasets)。同一会议的不同轨道可以有不同的贡献标准与流程，不能仅用主会简称替代具体轨道信息。

[^workshops]: Archival 与 non-archival 不能仅凭 workshop 名称判断。后续投稿是否允许，还取决于目标 venue 的重叠发表规则；例如 [TMLR Editorial Policies](https://jmlr.org/tmlr/editorial-policies.html) 对明确公开声明为 non-archival 的 venue／track 作出专门规定。[ECCV 2026 投稿政策](https://eccv.ecva.net/Conferences/2026/SubmissionPolicies) 将经过同行评审并录用、正文超过四页的 workshop 论文视为 prior publication，即使没有正式论文集。因此 non-archival 不等于可以原文再投任何目标。Workshop 录用与主会录用是不同记录。

[^presentation]: Oral、spotlight、poster 是展示安排，不是跨会议通用的质量等级；poster 也可以属于正式主会录用论文。具体示例见 [ICML 2026 Presenter Instructions](https://icml.cc/Conferences/2026/PresenterInstructions)、[ICLR 2026 Author Guide](https://iclr.cc/Conferences/2026/AuthorGuide)。ICLR 2026 的 spotlight 是 poster session 中的特别标识。奖项与普通录用、展示形式应分别记录。

[^arxiv]: [arXiv Moderation](https://info.arxiv.org/help/moderation/index.html)、[Versions and Journal References](https://info.arxiv.org/help/versions.html)。arXiv 明确说明 moderation 不是同行评审；“有 arXiv 链接”既不等于“尚未录用”，也不等于“已经同行评审”。

[^platform]: [About OpenReview](https://openreview.net/about)。OpenReview 是平台，会议或期刊是评审与录用主体；页面存在、评审公开、论文录用是不同事实。

[^versions]: [JMLR Author Information](https://jmlr.org/author-info.html) 对先前会议发表、扩展内容和投稿时的披露有具体要求。DOI、索引收录与项目代码分别提供标识、检索和研究材料，均不能单独替代质量评估。

[^ccf]: [CCF 第七版目录公告](https://www.ccf.org.cn/Academic_Evaluation/By_category/2026-03-31/870181.shtml)。该版明确 Short、Demo、Technical Brief、Summary、Findings 及伴随 Workshop 不在目录考虑范围，并强调目录是推荐列表而非学术评价依据。CCF 类别面向 venue，不是对每篇论文的直接评分；“未列入某版目录”与“论文质量低”也不是等价判断。

[^jcr]: [JCR 官方术语表](https://journalcitationreports.zendesk.com/hc/en-gb/articles/28351666061457-Glossary)。JCR 分区是特定年份、特定学科中的期刊排名结果，不能与 CCF 的会议／期刊分类直接换算，也不等于单篇论文的质量。

[^cas]: 中科院分区与 JCR Q1—Q4 的方法、类别及含义不同，不能将“一区”和“Q1”互换。[中国科学院文献情报中心声明](https://las.cas.cn/news/tzgg/202603/t20260327_8178738.html)同时明确，其他机构发布的分区表与该中心无关。实际成果认定需查明使用的版本和机构规则。

[^evaluation]: [NeurIPS Paper Checklist](https://neurips.cc/public/guides/PaperChecklist)、[DORA 宣言](https://sfdora.org/read/)。DORA 反对用期刊层面的指标代替对单篇研究的评价。录用率还受投稿池、轨道、统计口径和年份影响，跨 venue 的数值不构成统一的难度尺度。
