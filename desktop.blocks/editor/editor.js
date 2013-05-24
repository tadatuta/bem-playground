BEM.DOM.decl('editor',
{
    onSetMod: {
        'js': {
            'inited': function() {
                try {
                    var editor = this._editor = ace.edit(this.domElem[0]);

                    editor.getSession().setUseWorker(false);
                    editor.setTheme('ace/theme/monokai');
                    this.hasMod('type', 'html') ? editor.getSession().setMode('ace/mode/html') : editor.getSession().setMode('ace/mode/javascript');
                } catch(e) {};
            }
        }
    },
    val: function(val) {
        if (!val) return this._editor.getValue();

        this._editor.setValue(val);
    }
});