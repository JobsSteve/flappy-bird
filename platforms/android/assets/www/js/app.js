$(document).on('pageinit', function() {
    //Start new game
    $('#game').on('pageshow', function() {
        new Game();
    });

    //Close the game on confirmation button click
    $('#exitFromGameButton').on('click', function() {
        navigator.app.exitApp();
    });
});