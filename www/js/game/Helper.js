var Game = (function(window, document, Game) {

    Game.Helper = {
        /**
         * Switch activity to each other
         * @param  {string} id Id of activity which need to show
         */
        showActivity: function(id) {
            $('#' + id).show().addClass('show').siblings().hide().addClass('hide');
        }
    };

    return Game;
})(window, document, window.Game || {});