import { defineNavbarConfig } from 'vuepress-theme-plume';

export const navbar = defineNavbarConfig([
  {
    text: '基础',
    items: [
      { text: 'HTML', link: '/basis/html/' },
      { text: 'CSS', link: '/basis/css/' },
      { text: 'JavaScript', link: '/basis/javascript/' },
      { text: 'TypeScript', link: '/basis/typescript/' },
      { text: 'Node.js', link: '/basis/nodejs/' },
      { text: '浏览器', link: '/basis/browser/' },
    ],
  },
  {
    text: '框架',
    items: [
      { text: 'Vue', link: '/framework/vue/' },
      { text: 'React', link: '/framework/react/' },
    ],
  },
  {
    text: '网络',
    link: '/network/',
  },
  {
    text: '工具',
    items: [
      { text: 'Webpack', link: '/toolchain/webpack/' },
      { text: 'Git', link: '/toolchain/git/' },
    ],
  },
  {
    text: '算法',
    link: '/algorithm/',
  },
  {
    text: '性能',
    link: '/performance/',
  },
  {
    text: '友链',
    items: [
      { text: '前端学习路线', link: 'https://objtube.github.io/front-end-roadmap/' },
      { text: 'web前端面试', link: 'https://vue3js.cn/interview/' },
      { text: '前端那些事儿', link: 'https://jonny-wei.github.io/blog/' },
      { text: '被删的前端游乐场', link: 'http://www.godbasin.com/' },
      { text: 'WindrunnerMax', link: 'https://blog.touchczy.top/' },
    ],
  },
]);
