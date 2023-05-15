import { defineUserConfig, defaultTheme } from 'vuepress';
import { searchPlugin } from '@vuepress/plugin-search';

export default defineUserConfig({
    lang: 'zh-CN',
    title: '前端面试宝典',
    description: '全网最全前端面试题总结',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }],
    ],
    theme: defaultTheme({
        logo: '/logo.png',
        repo: 'jyp0426/interview',
        navbar: [
            {
                text: '基础',
                children: [
                    { text: 'HTML', link: '/html/' },
                    { text: 'CSS', link: '/css/' },
                    { text: 'JS', link: '/js/' },
                    { text: 'TS', link: '/ts/' },
                ],
            },
            {
                text: '框架',
                children: [
                    { text: 'Vue', link: '/vue/' },
                    { text: 'React', link: '/react/' },
                ],
            },
            {
                text: '工具',
                children: [
                    { text: 'Webpack', link: '/webpack/' },
                    { text: 'Git', link: '/git/' },
                ],
            },
            {
                text: '网络',
                link: '/network/',
            },
            {
                text: '算法',
                link: '/algorithm/',
            },
        ],
        sidebar: {
            '/html/': [{
                text: 'HTML',
                children: ['/html/README.md'],
            }],
            '/css/': [{
                text: 'CSS',
                children: ['/css/README.md'],
            }],
            '/js/': [{
                text: 'JavaScript',
                children: ['/js/README.md'],
            }],
            '/ts/': [{
                text: 'TypeScript',
                children: ['/ts/README.md'],
            }],
            '/vue/': [{
                text: 'Vue',
                children: ['/vue/README.md'],
            }],
            '/react/': [{
                text: 'React',
                children: ['/react/README.md'],
            }],
            '/webpack/': [{
                text: 'Webpack',
                children: ['/webpack/README.md'],
            }],
            '/git/': [{
                text: 'Git',
                children: ['/git/README.md'],
            }],
            '/network/': [{
                text: '网络',
                children: ['/network/README.md'],
            }],
            '/algorithm/': [{
                text: '算法',
                children: ['/algorithm/README.md'],
            }],
        },
        editLink: false,
        lastUpdated: false,
        contributors: false,
    }),
    plugins: [
        searchPlugin({}),
    ],
});
