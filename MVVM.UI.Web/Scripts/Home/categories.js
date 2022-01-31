
$(document).on("ready", function () {
    var viewModel = new HomeCategoriesViewModel();

    if ($('#categories-container')[0] && !ko.dataFor($('#categories-container')[0])) {
        console.log("Applying bindings - #categories-container ..");
        ko.applyBindings(viewModel, $('#categories-container')[0]);
    };
});
