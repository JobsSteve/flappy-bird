var Game = (function(window, document, Game) {

    Game.Events = {
        /**
         * Bind all events
         */
        bindEvents: function() {
            var buttons = Game.Config.Buttons;

            //Binding all events from Game.Config.Buttons
            for (var key in buttons) {
                if (buttons.hasOwnProperty(key)) {
                    $('.' + key).on('click touchend', buttons[key]);
                }
            }
        }
    };

    return Game;
})(window, document, window.Game || {});