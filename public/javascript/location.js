// This function uses the google geocode API to convert postal code to coordinates
async function getCoordinates(event) {
    event.preventDefault();
    const zipCode = document.querySelector('#zip-code').value.trim();
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${zipCode}&key=AIzaSyBGjt8MdI_N4adowcL8ig1YcWWSkzGm3Tg`);
    const convertedZip = await response.json();

    const latitude = convertedZip.results[0].geometry.location.lat;
    const longitude = convertedZip.results[0].geometry.location.lng;
    const zIndex = Math.floor(Math.random() * 5) + 1;

    return initMap(latitude, longitude);
};

// This function gets the coordinates based off geolocation confirmed by the user when they click on 'near me' button
async function getLocation() {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(async function(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const zIndex = Math.floor(Math.random() * 5) + 1;
            const coords = await fetch(`/api/location`, {
                method: 'POST',
                body: JSON.stringify({
                    latitude,
                    longitude,
                    zIndex
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            return initMap(latitude, longitude);
        });
    } else {
        console.log('geolocation not available');
    }
};

function initMap(latitude, longitude) {
    // Use to set the center of the map to the current user's location
    let currentUser = {};
    if (latitude == null || latitude == '' || latitude == undefined) {
    currentUser = { lat: 27.88, lng: -82.8 };
    } else {
    currentUser = { lat: Number(latitude), lng: Number(longitude) };
    }

    const map = new google.maps.Map(document.getElementById("map"), {
        // This sets the zoom distance in the map
        zoom: 10,
        // This sets the center of the map for the current location being searched
        center: currentUser,
    });
    // This calls for the markers to be created and placed on the map after the map has been created
    setMarkers(map);
};

// This creates the markers for the map
async function setMarkers(map) {
    // Get the user information to use in the markers
    let response = await fetch('/api/users', (data) => {
        method: 'GET'
    });
    const users = await response.json();

    // Adds markers to the map.
    const image = {
        // Image for the marker
        url: "../img/BookHeartPin2.png",
        // This marker is 20 pixels wide by 32 pixels high.
        size: new google.maps.Size(20, 32),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(0, 32),
    };
    // Shapes define the clickable region of the icon.
    const shape = {
        coords: [1, 1, 1, 20, 18, 20, 18, 1],
        type: "poly",
    };
    // Creates random zIndex for marker
    const zIndex = Math.floor(Math.random() * 5) + 1;
    // Iterates through all the users and displays the ones local to center
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.location) {
            let userLat = Number(user.location.latitude);
            let userLng = Number(user.location.longitude);
            const marker = new google.maps.Marker({
                position: { lat: userLat, lng: userLng },
                map,
                icon: image,
                shape: shape,
                title: user[5],
                zIndex: zIndex
            });
            // Add a click listener for each marker
            marker.addListener("click", () => {
                // Need to add user info to markers
                console.log("Marker clicked");
            });
        }
        // else user.zip convert
    }
    
};

// This method adds an event listener to the zip code submit button to call the getCoordinates function when clicked
document.querySelector('.zip-submit').addEventListener('submit', getCoordinates);

// Changed document.querySelector to window and changed click to load to have function run after handlebars load
window.addEventListener('load', getLocation);