# 研究日志

采用 [Clarity / blog-v3](https://github.com/L33Z22L11/blog-v3) 的 Nuxt 主题，部署到 GitHub Pages。

- 网站：https://ashripa.github.io/research-journal/
- 已移除上游文章、个人导航、统计脚本与评论服务。使用系统字体和本站图标。

## 写作

在 content/posts/<年份>/ 下创建 Markdown 文件，在 frontmatter 中填写 title、description、date、updated、categories、tags 和 permalink。

分类可用：研究笔记、论文阅读、实验记录、阶段复盘。不要提交密钥、个人隐私、未经许可的数据或研究材料。

## 本地开发

需要 Node.js 24 LTS 和 pnpm 12.5.1。

- 安装依赖：pnpm install --frozen-lockfile
- 启动预览：pnpm dev
- 代码检查：pnpm lint
- 静态构建：pnpm generate

开发和部署的应用基路径均为 /research-journal/。

## 发布

向 main 推送后，GitHub Actions 自动检查、构建并通过 Pages 发布，无需个人访问令牌。不要提交 node_modules、.env 或构建缓存。

## 许可与来源

主题源码：L33Z22L11 / blog-v3，MIT 许可，保留原始 LICENSE。上游文章采用 CC BY-NC-SA 4.0，但未收录到本站。修改者请继续遵守相应许可。

上游基准提交：5faa7c72485d1317bfd28c38b8600cd080f64fb8（主题 3.8.0）。
