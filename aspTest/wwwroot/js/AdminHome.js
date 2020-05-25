var imageOne = document.getElementById("graphOne");

function changeGraphOne()
{
    if (imageOne.getAttribute('src') == "/img/PrimaryGraphOne.png")
    {
        imageOne.src = "/img/SecondaryGraphOne.png";
    }
    else
    {
        imageOne.src = "/img/PrimaryGraphOne.png";
    }
}

var today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());

$('#startDate').datepicker({
    uiLibrary: 'bootstrap4',
    iconsLibrary: 'fontawesome',
    dateFormat: 'mm-dd-yyyy',
    minDate: "05-01-2020",
    maxDate: today,
});

$('#endDate').datepicker({
    uiLibrary: 'bootstrap4',
    iconsLibrary: 'fontawesome',
    minDate: function () {
        return $('#startDate').val();
    },
    maxDate: today
});

$('#startDateTwo').datepicker({
    uiLibrary: 'bootstrap4',
    iconsLibrary: 'fontawesome',
    dateFormat: 'mm-dd-yyyy',
    minDate: "05-01-2020",
    maxDate: today,
});

$('#endDateTwo').datepicker({
    uiLibrary: 'bootstrap4',
    iconsLibrary: 'fontawesome',
    minDate: function () {
        return $('#startDate').val();
    },
    maxDate: today
});