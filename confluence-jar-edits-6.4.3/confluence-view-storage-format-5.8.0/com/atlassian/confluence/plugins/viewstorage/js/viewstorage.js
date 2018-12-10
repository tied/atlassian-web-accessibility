AJS.toInit(function ($) {
    $(".view-storage-link, .view-storage-link a").click(function (e) {
        window.open(this.href, (this.id + "-popupwindow").replace(/-/g, "_"), "width=800, height=600, scrollbars, resizable");
            e.preventDefault();
            return false;
        });
});
