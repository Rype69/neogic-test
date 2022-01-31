var HomeCategoriesViewModel = function () {
    var self = this;

    var trainTypes = [
        { Value: 1, Text: "Steam train" },
        { Value: 2, Text: "Diesel train" },
        { Value: 3, Text: "Electric train" }
    ];

    var boatTypes = [
        { Value: 4, Text: "Canoe" },
        { Value: 5, Text: "Dinghy" },
        { Value: 6, Text: "Kayak" }
    ];

    var planeTypes = [
        { Value: 7, Text: "Sopwith camel" },
        { Value: 8, Text: "Spitfire" },
        { Value: 9, Text: "Hurricane" }
    ];

    self.TrainsChecked = ko.observable(true);
    self.BoatsChecked = ko.observable(true);
    self.PlanesChecked = ko.observable(true);

    self.ListBoxItems = ko.computed(function () {

        var results = [];

        if (self.TrainsChecked()) results.push.apply(results, trainTypes);
        if (self.BoatsChecked()) results.push.apply(results, boatTypes);
        if (self.PlanesChecked()) results.push.apply(results, planeTypes);

        return results;
    });

}
