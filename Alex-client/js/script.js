////////////////////////// 
// google maps information
//////////////////////////
// Initialize and add the map

var map;

function initMap() {
    // The map, centered at place of work
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 51.8245, lng: -1.3904 },
        zoom: 14
    });
    // The marker, positioned at place of work
    var marker = new google.maps.Marker({
        position: {
            lat: 51.824510,
            lng: -1.390410
        },
        map: map
    });
}

////////////////////////// 
// Index page nav toggle
//////////////////////////

var navListItems = document.getElementsByClassName("navigation__item"); // this returns an array with each item that contains the class name navigation__item.
 
for(var i = 0; i < navListItems.length; i++){ // you can only apply condition to individual elements so we need to call each element of the array by using [] and an index so [index]. Here we are looping on all the elements of the array and assigning them a condition
    navListItems[i].onclick = function(){ // for each item of the array execute the following function when it becomes clicked.
        document.getElementById("navi-toggle").checked = false; //close the menu by unchecking the checkbox
    };
}