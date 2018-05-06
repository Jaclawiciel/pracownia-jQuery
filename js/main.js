// Cwiczenie 1

$("#unordered-list .list-element").each( function( index, element ){
    var spanToPrepend = $("<span></span>").addClass("order-number").text(index + 1);
    $(element).prepend(spanToPrepend)
});

// Cwiczenie 2

function createParag() {
    var article = $("#cw-2");
    var parag = $("<p></p>").addClass("textfield-change");
    article.append(parag);
}

createParag();

// Usuń paragrafy po zmianie radio buttona
$('input[name=solution]').on('change', function() {
    $("#cw-2 .textfield-change").remove();
    createParag();
});

$("#textfield").change(function () {
    var element = $(this);
    var inputValue = element.val();
    var radioValue = $("input[name=solution]:checked").val();
    if (radioValue === "change") {
        $("#cw-2 .textfield-change").text("Zmieniono tekst na: " + inputValue);
    } else {
        var article = $("#cw-2");
        var newParag = $("<p></p>").addClass("textfield-change");
        newParag.text("Zmieniono tekst na: " + inputValue);
        article.append(newParag);
    }
});
