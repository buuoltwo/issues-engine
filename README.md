# issues-engine

哇，部署起来问题不少。可以考虑给那个npm库贡献一下。

1. blog-dog 本身仓库呢script命令错了，应为
```
"deploy": "bash deploy.sh"
```
2. vuepress-theme-dog库里的组件呢还没有适配base变更的情况，a链接不太对头。是需要用个hook拿vuepress数据吗。
3. Navbar左侧的标题数据写死了,可以取`siteData.value.description`之类的
