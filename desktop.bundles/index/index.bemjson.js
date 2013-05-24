({
    block: 'b-page',
    title: 'BEM Server Motivator',
    head: [
        { elem: 'css', url: '_index.css' },
        { elem: 'meta', attrs: { name: 'description', content: 'Project to motivate yourself' }},
        { elem: 'meta', attrs: { name: 'keywords', content: 'bem, express, pysch' }}
    ],
    content: [
        {
            block: 'b-text',
            elem: 'h1',
            content: 'b_'
        },
        {
            block: 'form',
            content: [
                {
                    block: 'b-layout-table',
                    content: {
                        elem: 'row',
                        content: [
                            {
                                elem: 'cell',
                                content: [
                                    {
                                        block: 'b-text',
                                        elem: 'h4',
                                        content: 'bemjson'
                                    },
                                    {
                                        block: 'editor',
                                        mods: { type: 'bemjson' },
                                        content: "({ block: 'bla' })"
                                    }
                                ]
                            },
                            {
                                elem: 'cell',
                                content: [
                                    {
                                        block: 'b-text',
                                        elem: 'h4',
                                        content: 'bemhtml'
                                    },
                                    {
                                        block: 'editor',
                                        mods: { type: 'bemhtml' },
                                        content: "block bla, tag: 'pysch'"
                                    }
                                ]
                            },
                            {
                                elem: 'cell',
                                content: [
                                    {
                                        block: 'b-text',
                                        elem: 'h4',
                                        content: 'html'
                                    },
                                    {
                                        block: 'editor',
                                        mods: { type: 'html' }
                                    },
                                    {
                                        block: 'button',
                                        mods: { theme: 'grey-s', size: 's' },
                                        type: 'submit',
                                        content: 'Сделай мне html!'
                                    }
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        { block: 'i-jquery', mods: { version: '1.8.3' } },
        { elem: 'js', url: '//rawgithub.com/ajaxorg/ace-builds/master/src-noconflict/ace.js' },
        { elem: 'js', url: '_index.js' }
    ]
})