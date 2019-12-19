(document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        var model = {};
        var view_1 = {
            render: function () {
            },
            init: function () {
            }
        };
        var controller = {
            init: function () {
                view_1.init();
            }
        };
        controller.init();
    }
})();
