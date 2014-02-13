var Game = (function(window, document, Game) {

    Game.Config = {
        Activities: {
            menuId: 'game-activity-menu',
            sceneId: 'game-activity-scene',
            recordsId: 'game-activity-records'
        },
        Buttons: {
            'backToMainMenuButton': Game.showMainMenu,
            'startNewGameButton': Game.startNewGame,
            'showHighscoresButton': Game.showHighscores,
            'exitFromGameButton': Game.exit
        }
    };

    return Game;
})(window, document, window.Game || {});