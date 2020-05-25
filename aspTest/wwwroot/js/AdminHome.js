var today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
$('#startDate').datepicker({
    uiLibrary: 'bootstrap4',
    iconsLibrary: 'fontawesome',
    dateFormat: 'mm-dd-yyyy',
    minDate: "@DateTime.Today.AddDays(-14).ToShortDateString()",
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
    minDate: "@DateTime.Today.AddDays(-14).ToShortDateString()",
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