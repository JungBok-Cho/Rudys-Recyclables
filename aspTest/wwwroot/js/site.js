// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
function myFunc() {
    let val = searchtxt.value;
    if (val === "lamp") {
        window.location.href = 'AfterSearch';
    } else if (val === "") {
        window.location.href = 'Index';
    } else {
        window.location.href = 'ItemNotFound';
    }
}