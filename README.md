# GPTs Bridge Web

![logo](public/images/logo/b_256x256.png)

## 项目简介

GPTs Bridge Web 是一个基于 Next.js 14、React 18、Tailwind CSS、Prisma 和 MySQL 的现代化 AI 应用聚合与管理平台。平台支持多种 GPT 应用的展示、排行、统计、用户管理等功能，适合 AI 应用开发者和用户进行交流与分享。

## 主要功能
- GPT 应用排行榜与统计
- 作者与主题分类展示
- 用户注册、登录与第三方登录（GitHub、Google）
- 支持仪表盘（Dashboard）管理
- 数据可视化与报表
- 支持多端深色模式

## 技术栈
- [Next.js 14](https://nextjs.org/)
- [React 18](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Flowbite-React](https://flowbite-react.com/)
- [Prisma ORM](https://www.prisma.io/)
- [MySQL](https://www.mysql.com/)
- [NextAuth.js](https://next-auth.js.org/)（支持邮箱、GitHub、Google 登录）

## 快速开始

### 1. 克隆项目
```bash
git clone https://github.com/your-org/gpts-bridge-web.git
cd gpts-bridge-web
```

### 2. 安装依赖
```bash
npm install
```

### 3. 配置环境变量
复制 `.env.example` 为 `.env.development`，并根据实际情况填写数据库、第三方登录等配置。

### 4. 数据库初始化
```bash
npm run migrate:dev
```

### 5. 启动开发环境
```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看效果。

## 数据库配置

项目使用 Prisma 作为 ORM，MySQL 作为数据库。数据库连接配置在 `.env.development` 文件中的 `DATABASE_URL`。

Prisma 数据模型定义在 `prisma/schema.prisma`，如需自定义表结构可修改后执行 `npx prisma migrate dev`。

## 用户注册与登录

- 支持邮箱注册/登录，注册需填写用户名、邮箱、密码。
- 支持 GitHub、Google 第三方登录。
- 登录后可访问 Dashboard 进行个性化管理。

## 目录结构

```
├── app/                # Next.js 应用主目录
│   ├── (auth)/         # 认证相关页面（登录、注册）
│   ├── (dashboard)/    # 仪表盘与管理后台
│   ├── (seo)/home/     # 首页与 SEO 相关页面
│   └── ...
├── components/         # 复用组件
├── prisma/             # Prisma 数据模型与迁移
├── public/             # 静态资源（logo、图片等）
├── config/             # 配置文件
├── lib/                # 工具库
├── context/            # React 上下文
├── types/              # 类型定义
└── README.md           # 项目说明
```

## 贡献与反馈

欢迎提交 Issue 和 PR 参与项目建设。

## License

MIT
