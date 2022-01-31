$(document).on("click", "#block-element", function () {
    var anchorElement = $(this).siblings("a");
    var iElement = $(anchorElement).find("i.icon-info-sign");
    if (iElement.length) iElement.trigger("dblClick");
});

$("i.icon-info-sign").on("dblClick", function () {
    alert("success!");
});