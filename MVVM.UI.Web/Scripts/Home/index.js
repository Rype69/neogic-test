
$(document).on("ready", function () {
    retrieveDataFromServer();

    var viewModel = new HomeIndexViewModel();

    if ($('#controls-container')[0] && !ko.dataFor($('#controls-container')[0])) {
        console.log("Applying bindings - #controls-container ..");
        ko.applyBindings(viewModel, $('#controls-container')[0]);
    };
});

function retrieveDataFromServer() {
    // TODO: Correct the error
    $.get("/Values", function (data) {
        $("#data-textarea").text(data);
    });
}
