const {
    description
} = require('../package')

module.exports = {
    title: '开始使用ACPI',
    head: [
        ['meta', {
            name: 'theme-color',
            content: '#3eaf7c'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
        }],
        ["link", {
            rel: "'stylesheet",
            href: "/styles/website.css"
        },]
    ],
    base: '/Getting-Started-With-ACPI/',

    watch: {
        $page(newPage, oldPage) {
            if (newPage.key !== oldPage.key) {
                requestAnimationFrame(() => {
                    if (this.$route.hash) {
                        const element = document.getElementById(this.$route.hash.slice(1));

                        if (element && element.scrollIntoView) {
                            element.scrollIntoView();
                        }
                    }
                });
            }
        }
    },

    markdown: {
        extendMarkdown: md => {
            md.use(require('markdown-it-multimd-table'), {
                rowspan: true,
            });
        }
    },

    theme: 'vuepress-theme-succinct',
    globalUIComponents: [
        'ThemeManager'
    ],

    themeConfig: {
        repo: 'https://github.com/sumingyd/Getting-Started-With-ACPI',
        label: '简体中文',
        selectText: '选择语言',
        ariaLabel: '选择语言',
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: true,
        lastUpdated: '上次更新',
        logo: '/homepage.png',
        nav: [{
            text: '指南菜单',
            items: [
                {
                    text: 'OpenCore安装',
                    link: 'https://sumingyd.github.io/OpenCore-Install-Guide/'
                },
                {
                    text: 'OpenCore安装后',
                    link: 'https://sumingyd.github.io/OpenCore-Post-Install/'
                },
                {
                    text: 'OpenCore多重引导',
                    link: 'https://sumingyd.github.io/OpenCore-Multiboot/'
                },
                {
                    text: '开始使用ACPI',
                    link: 'https://sumingyd.github.io/Getting-Started-With-ACPI/'
                },
                {
                    text: '无线购买指南',
                    link: 'https://sumingyd.github.io/Wireless-Buyers-Guide/'
                },
                {
                    text: '显卡购买指南',
                    link: 'https://sumingyd.github.io/GPU-Buyers-Guide/'
                },
                {
                    text: '避免购买指南',
                    link: 'https://sumingyd.github.io/Anti-Hackintosh-Buyers-Guide/'
                },
            ]
        },
        ],
        sidebar: [{
            title: '简介',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                ['', '开始使用ACPI'],
                ['ssdt-platform', '选择SSDTs'],
            ]

        },
        {
            title: '方法',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                '/ssdt-methods/ssdt-methods',
                {
                    title: '方法',
                    collapsable: false,
                    sidebarDepth: 2,
                    children: [
                        '/ssdt-methods/ssdt-prebuilt',
                        '/ssdt-methods/ssdt-easy',
                        '/ssdt-methods/ssdt-long',
                    ]
                },
            ]
        },
        {
            title: '手动',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                '/Manual/dump',
                '/Manual/compile',
            ]
        },
        {
            title: '桌面',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                ['/Desktops/desktop-disable', '禁用桌面dGPUs'],
            ]
        },
        {
            title: '笔记本',
            collapsable: false,
            sidebarDepth: 0,
            children: [
                ['/Laptops/backlight', '修复背光'],
                {
                    title: '方法',
                    collapsable: true,
                    sidebarDepth: 2,
                    children: [
                        ['/Laptops/backlight-methods/prebuilt', '预构建'],
                        ['/Laptops/backlight-methods/manual', '手动'],
                    ]
                },
                ['/Laptops/trackpad', '修复触摸板'],
                {
                    title: '方法',
                    collapsable: true,
                    sidebarDepth: 2,
                    children: [
                        ['/Laptops/trackpad-methods/manual', '预构建'],
                    ]
                },
                ['/Laptops/laptop-disable', '禁用笔记本dGPUs'],
            ]
        },
        {
            title: 'Universal',
            collapsable: false,
            sidebarDepth: 0,
            children: [
                ['/Universal/ec-fix', '嵌入式控制器'],
                {
                    title: '方法',
                    collapsable: true,
                    sidebarDepth: 2,
                    children: [
                        ['/Universal/ec-methods/prebuilt', '预构建'],
                        ['/Universal/ec-methods/ssdttime', 'SSDTTime'],
                        ['/Universal/ec-methods/manual', '手动'],
                    ]
                },
                ['/Universal/plug', 'CPU电源管理'],
                {
                    title: '方法',
                    collapsable: true,
                    sidebarDepth: 2,
                    children: [
                        ['/Universal/plug-methods/prebuilt', '预构建'],
                        ['/Universal/plug-methods/ssdttime', 'SSDTTime'],
                        ['/Universal/plug-methods/manual', '手动'],
                    ]
                },
                ['/Universal/awac', 'AWAC vs RTC'],
                {
                    title: '方法',
                    collapsable: true,
                    sidebarDepth: 2,
                    children: [
                        ['/Universal/awac-methods/prebuilt', '预构建'],
                        ['/Universal/awac-methods/ssdttime', 'SSDTTime'],
                        ['/Universal/awac-methods/manual', '手动'],
                        ['/Universal/awac-methods/manual-hedt', '手动 HEDT'],
                    ]
                },
                ['/Universal/nvram', 'NVRAM PMC'],
                {
                    title: '方法',
                    collapsable: true,
                    sidebarDepth: 2,
                    children: [
                        ['/Universal/nvram-methods/prebuilt', '预构建'],
                        ['/Universal/nvram-methods/ssdttime', 'SSDTTime'],
                        ['/Universal/nvram-methods/manual', '手动'],
                    ]
                },
                ['/Universal/rhub', 'USB RHUB'],
                {
                    title: '方法',
                    collapsable: true,
                    sidebarDepth: 2,
                    children: [
                        ['/Universal/rhub-methods/prebuilt', '预构建'],
                        ['/Universal/rhub-methods/ssdttime', 'SSDTTime'],
                        ['/Universal/rhub-methods/manual', '手动'],
                    ]
                },
                ['/Universal/imei', 'IMEI'],
                {
                    title: '方法',
                    collapsable: true,
                    sidebarDepth: 2,
                    children: [
                        ['/Universal/imei-methods/prebuilt', '预构建'],
                        ['/Universal/imei-methods/manual', '手动'],
                    ]
                },
                ['/Universal/unc0', '修复Uncore桥'],
                {
                    title: '方法',
                    collapsable: true,
                    sidebarDepth: 2,
                    children: [
                        ['/Universal/unc0-methods/prebuilt', '预构建'],
                        ['/Universal/unc0-methods/manual', '方法'],
                    ]
                },
                ['/Universal/smbus', '修复SMBus支持'],
                {
                    title: '方法',
                    collapsable: true,
                    sidebarDepth: 2,
                    children: [
                        ['/Universal/smbus-methods/manual', '手动'],
                    ]
                },
                ['/Universal/irq', 'IRQ修复'],
                ['/Universal/spoof', 'GPU欺骗'],
            ]
        },
        {
            title: '清理',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                ['cleanup', '清理'],
            ]
        },
        {
            title: '其他',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                ['troubleshooting', '故障排除'],
                ['CONTRIBUTING', '贡献'],
            ]
        },
        ],
    },
    plugins: [
        ['@vuepress/back-to-top', true],//开启右下角返回顶层图标
        ['@vuepress/nprogress', true],//这个插件将会在你切换页面的时候，在顶部显示进度条。
        ['vuepress-plugin-smooth-scroll', true],//在你的 VuePress 站点中使用平滑滚动。
        ['vuepress-plugin-fulltext-search', true],//基于 Headers 的搜索插件
        ['@vuepress/medium-zoom',{
                selector: ".theme-succinct-content :not(a) > img",
                options: {
                    background: 'var(--bodyBgColor)'
                }
            }
        ],//这个插件将会使你的图片支持点击缩放。
        ['@vuepress/active-header-links', {
            sidebarLinkSelector: '.sidebar-link',
            headerAnchorSelector: '.header-anchor'
            }
        ],//页面滚动时自动激活侧边栏链接的插件
    ]
}