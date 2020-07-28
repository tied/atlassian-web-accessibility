define("confluence-space-ia/avatar-picker/upload-interceptor", [
    "jquery",
    "underscore"
], function($, _) {

    function UploadInterceptor(el, opts){
        return this.init.apply(this, arguments);
    }

    UploadInterceptor.prototype.defaults = {
        replacementEl: undefined,
        clientFileHandler: null
    };

    UploadInterceptor.prototype.init = function(el, opts) {
        _.bindAll(this, 'onSelectFile', 'onReplacementClick');

        this.$el = $(el);
        this.options = $.extend({}, this.defaults, opts);

        this.$el.on('change', this.onSelectFile);

        if (this.options.replacementEl) {
            this.$replacement = $(this.options.replacementEl);
            this.$el.hide();
            this.$replacement.on('click', this.onReplacementClick);
        }
    };

    UploadInterceptor.prototype.onSelectFile = function(e){
        if ($(e.target).val() && this.options.clientFileHandler) {
            this.options.clientFileHandler.handleFiles(e.target.files, this.$el);
        }
    };

    UploadInterceptor.prototype.onReplacementClick = function(e){
        e.preventDefault();
        this.$el.click();
    };

    UploadInterceptor.prototype.destroy = function(){
        this.$el.off('change', this.onSelectFile);
        this.$replacement.off('click', this.onReplacementClick);
    };

    return UploadInterceptor;
});
