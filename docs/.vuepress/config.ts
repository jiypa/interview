import { defineUserConfig, defaultTheme } from 'vuepress';
import { searchPlugin } from '@vuepress/plugin-search';

export default defineUserConfig({
    base: '/',
    lang: 'zh-Hans',
    title: '前端面试宝典',
    description: '全网最全前端面试题总结',
    head: [
        ['link', { rel: 'icon', href: '/images/logo.png' }],
    ],
    theme: defaultTheme({
        logo: '/images/logo.png',
        repo: 'jiypa/interview',
        docsDir: 'docs',
        navbar: [
            {
                text: '基础',
                children: [
                    { text: 'HTML', link: '/basics/html/' },
                    { text: 'CSS', link: '/basics/css/' },
                    { text: 'JS', link: '/basics/js/' },
                    { text: 'TS', link: '/basics/ts/' },
                    { text: 'Node', link: '/basics/node/' },
                ],
            },
            {
                text: '框架',
                children: [
                    { text: 'Vue', link: '/frameworks/vue/' },
                    { text: 'React', link: '/frameworks/react/' },
                ],
            },
            {
                text: '工具',
                children: [
                    { text: 'Webpack', link: '/tools/webpack/' },
                    { text: 'Git', link: '/tools/git/' },
                ],
            },
            {
                text: '其他',
                children: [
                    { text: '网络', link: '/others/network/' },
                    { text: '安全', link: '/others/security/' },
                    { text: '算法', link: '/others/algorithm/' },
                ],
            },
            {
                text: '友链',
                children: [
                    { text: '前端学习路线', link: 'https://objtube.github.io/front-end-roadmap/' },
                    { text: 'web前端面试', link: 'https://vue3js.cn/interview/' },
                    { text: '前端那些事儿', link: 'https://jonny-wei.github.io/blog/' },
                    { text: '被删的前端游乐场', link: 'http://www.godbasin.com/' },
                    { text: 'WindrunnerMax', link: 'https://blog.touchczy.top/' },
                ],
            },
        ],
        sidebar: {
            '/basics/': [{
                text: '基础',
                children: [
                    '/basics/html/README.md',
                    '/basics/css/README.md',
                    '/basics/js/README.md',
                    '/basics/ts/README.md',
                    '/basics/node/README.md',
                ],
            }],
            '/frameworks/': [{
                text: '框架',
                children: [
                    '/frameworks/vue/README.md',
                    '/frameworks/react/README.md',
                ],
            }],
            '/tools/': [{
                text: '工具',
                children: [
                    '/tools/webpack/README.md',
                    '/tools/git/README.md',
                ],
            }],
            '/others/': [{
                text: '其他',
                children: [
                    '/others/network/README.md',
                    '/others/security/README.md',
                    '/others/algorithm/README.md',
                ],
            }],
        },
        // page meta
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributors: false,
        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',
        // 404 page
        notFound: [
            '这里什么都没有',
            '我们怎么到这来了？',
            '这是一个 404 页面',
            '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',
        // a11y
        openInNewWindow: '在新窗口打开',
        toggleColorMode: '切换颜色模式',
        toggleSidebar: '切换侧边栏',
    }),
    plugins: [
        searchPlugin({}),
    ],
});
