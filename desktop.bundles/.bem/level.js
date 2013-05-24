var extend = require('bem/lib/util').extend;

exports.getTechs = function() {
    var techs;
    techs = techs || this.__base();
    techs['bemjson.js'] = '';
    techs['bemhtml.js'] = '../../bem-bl/blocks-common/i-bem/bem/techs/bemhtml.js';
    techs['html'] = '../../bem-bl/blocks-common/i-bem/bem/techs/html';
    return techs;
};

exports.getConfig = function() {
    return extend({}, this.__base() || {}, {
        bundleBuildLevels: this.resolvePaths([
            '../../bem-bl/blocks-common',
            '../../bem-bl/blocks-desktop',
            '../../bem-controls/common.blocks',
            '../../bem-controls/desktop.blocks',
            '../../desktop.blocks'
        ])
    });
};
