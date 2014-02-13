var Game = (function(window, document, Game) {
    Game.Events = {
        /**
         * Bind all events
         */
        bindEvents: function() {
            document.addEventListener('deviceready', Game.Events.onDeviceReady, false);
        },
        /**
         * Triggers when application will load
         */
        onDeviceReady: function() {
            var parentElement = document.getElementById('game-container'),
                listeningElement = parentElement.querySelector('.listening'),
                receivedElement = parentElement.querySelector('.received');

            listeningElement.setAttribute('style', 'display:none;');
            receivedElement.setAttribute('style', 'display:block;');
        }
    };

    return Game;
})(window, document, window.Game || {});