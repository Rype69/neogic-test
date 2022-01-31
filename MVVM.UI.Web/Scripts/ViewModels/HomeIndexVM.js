var HomeIndexViewModel = function() {
    var self = this;

    self.SelectListItems = ko.observableArray([
        { Value: null, Text: ko.observable("Please Select") },
        { Value: false, Text: ko.observable("Hide") },
        { Value: true, Text: ko.observable("Show") }
    ]);
}
