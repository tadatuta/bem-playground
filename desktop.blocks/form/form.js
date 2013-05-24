BEM.DOM.decl('form', {
    onSetMod: {
        'js': function() {
            var bemjson = this.findBlockInside({ block: 'editor', modName: 'type', modVal: 'bemjson' }),
                bemhtml = this.findBlockInside({ block: 'editor', modName: 'type', modVal: 'bemhtml' }),
                html = this.findBlockInside({ block: 'editor', modName: 'type', modVal: 'html' });

            this.bindTo('submit', function(e) {
                $.ajax({
                    type: 'POST',
                    url: '/',
                    data: {
                        bemjson: bemjson.val(),
                        bemhtml: bemhtml.val()
                    },
                    success: function(data) {
                        html.val(data);
                    },
                    error: function() {
                        console.log('error', arguments);
                    }
                });

                e.preventDefault();
            });
        }
    }
});