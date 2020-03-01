(document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        var CLEAR_1 = document.getElementById('clear');
        var SOLUTION_1 = document.getElementById('solution');
        var MODEL = {};
        var VIEW_1 = {
            render: function () {
                CLEAR_1.onclick = function () {
                    CONTROLLER_1.clear();
                };
            },
            init: function () {
                VIEW_1.render();
            }
        };
        var CONTROLLER_1 = {
            clear: function () {
                SOLUTION_1.innerHTML = '0';
            },
            init: function () {
                VIEW_1.init();
            }
        };
        CONTROLLER_1.init();
    }
})();
