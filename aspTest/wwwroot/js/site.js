﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

var imageOne = document.getElementById("graphOne");

function ChangeGraphOne()
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

function searchBar() {
    let val = searchtxt.value;
    if (val === "lamp") {
        window.location.href = 'AfterSearch';
    } else if (val === "") {
        window.location.href = 'Index';
    } else {
        window.location.href = 'ItemNotFound';
    }
};

function contacted() {
    var button = document.getElementById("ContactButton");
    window.alert("Poster has been contacted!");
    button.disabled = true;
    button.value = "Pending";
};