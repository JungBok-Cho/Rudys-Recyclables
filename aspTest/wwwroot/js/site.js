// Functionality to change the displayed image in the first graph spot
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

// jQuery to control date selector on Admin page
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

// Controls functionality around the search bar
function searchBar()
{
    let val = searchtxt.value;

    if (val === "lamp")
    {
        window.location.href = 'AfterSearch';
    }
    else if (val === "")
    {
        window.location.href = 'Index';
    }
    else
    {
        window.location.href = 'ItemNotFound';
    }
};

// Changes contact button to Pending and unclickable
function contacted()
{
    var button = document.getElementById("ContactButton");
    button.disabled = true;
    button.value = "Pending";
};

// Create a new list item when clicking on the "Add" button
function newElement()
{
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.className = "myItem";

    li.appendChild(t);

    if (inputValue === '')
    {
        alert("You must write something!");
    }
    else
    {
        document.getElementById("myUL").appendChild(li);
    }

    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");

    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++)
    {
        close[i].onclick = function ()
        {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}