# 🚀 TechBlog - 高性能技术博客# Astro Starter Kit: Basics

基于 Astro + WordPress API 构建的现代化技术博客。```sh

npm create astro@latest -- --template basics

## ✨ 特性```

- 🏃‍♂️ **极致性能**: SSG 静态生成 + 智能缓存策略> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

- 📱 **响应式设计**: 完美适配所有设备

- 🎨 **现代化 UI**: Tailwind CSS 美观界面## 🚀 Project Structure

- 🔍 **SEO 优化**: 完整的 meta 标签支持

- 📊 **性能监控**: 内置性能统计Inside of your Astro project, you'll see the following folders and files:

## 🛠️ 技术栈```text

/

- **框架**: Astro (静态站点生成器)├── public/

- **样式**: Tailwind CSS│ └── favicon.svg

- **内容源**: WordPress REST API├── src

- **部署**: GitHub Pages + GitHub Actions│   ├── assets

│   │   └── astro.svg

## 🚀 快速开始│   ├── components

│   │   └── Welcome.astro

````bash│   ├── layouts

# 安装依赖│   │   └── Layout.astro

npm install│   └── pages

│       └── index.astro

# 启动开发服务器└── package.json

npm run dev```



# 构建生产版本To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

npm run build

```## 🧞 Commands



## 📊 性能指标All commands are run from the root of the project, from a terminal:



- **首页加载**: < 500ms| Command                   | Action                                           |

- **文章页加载**: < 600ms  | :------------------------ | :----------------------------------------------- |

- **Lighthouse 评分**: 95+| `npm install`             | Installs dependencies                            |

| `npm run dev`             | Starts local dev server at `localhost:4321`      |

## 🌐 部署| `npm run build`           | Build your production site to `./dist/`          |

| `npm run preview`         | Preview your build locally, before deploying     |

推送到 GitHub 后，GitHub Actions 会自动部署到 GitHub Pages。| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
````
