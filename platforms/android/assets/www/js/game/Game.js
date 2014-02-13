var Game = (function(window, document, Game) {

    Game = {
        /**
         * Initialize game
         */
        initialize: function() {
            Game.Events.bindEvents();
        },

        /**
         * Show main menu in game
         */
        showMainMenu: function() {
            Game.Helper.showActivity(Game.Config.Activities.menuId);
        },

        /**
         * Start new Game
         */
        startNewGame: function() {
            Game.Helper.showActivity(Game.Config.Activities.sceneId);
        },

        /**
         * Show highscores
         */
        showHighscores: function() {
            Game.Helper.showActivity(Game.Config.Activities.recordsId);
        },

        /**
         * Close application
         */
        exit: function() {
            navigator.app.exitApp();
        }
    };

    return Game;
})(window, document, window.Game || {});