//export default {
module.exports = {
    base: '/rvt2-docs/',
    title: 'Revealer Toolkit 2',
    description: 'An open source platform for forensics investigations',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'RVT2', link: '/rvt2/' },
            { text: 'RVT2-analyzer', link: '/analyzer/' },
            { text: 'Resources', link: '/resources/' }
        ],
        sidebar: [
            {
                title: 'RVT2',
                children: [
                    '/rvt2/',
                    '/rvt2/install',
                    '/rvt2/definitions',
                    '/rvt2/configure',
                    '/rvt2/folder',
                    '/rvt2/base',
                    '/rvt2/common',
                    '/rvt2/windows',
                    '/rvt2/macos',
                    '/rvt2/linux',
                    '/rvt2/ios',
                    '/rvt2/indexer',
                    '/rvt2/extend',
                    '/rvt2/examples'
                ]
            },
            {
                title: 'RVT2 analyzer',
                children: [
                    '/analyzer/',
                    '/analyzer/install',
                    '/analyzer/development'
                ]
            },
            {
                title: 'Resources',
                children: [
                    '/resources/'
                ]
            },
            'contact'
        ],
        // Configure "edit this page"
        repo: 'https://github.com/IncideDigital/rvt2-docs',
        repoLabel: 'Contribute!',
        editLinks: true,
        editLinkText: 'Help us to improve this page!',
        lastUpdated: 'Last Updated', // string | boolean
        // configure the languages
        locales: {
            '/es/': {
                editLinkText: 'Ayúdanos a mejorar esta página.'
            }
        }
    },
    locales: {
        '/': {
            lang: 'en', // this will be set as the lang attribute on <html>
        },
        '/es/': {
            lang: 'es',
            description: 'Una plataforma para análisis forense basada en software libre.',
        }
    }
}
