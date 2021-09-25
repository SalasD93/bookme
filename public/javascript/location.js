// This function uses the google geocode API to convert postal code to coordinates
async function getCoordinates(event) {
    console.log('whoop whoop');
    event.preventDefault();
    const zipCode = document.querySelector('#zip-code').value.trim();
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${zipCode}&key=AIzaSyBGjt8MdI_N4adowcL8ig1YcWWSkzGm3Tg`);

    const convertedZip = await response.json();
    // console.log(convertedZip);
    // Need to have lat and lon saved to table related to User
    const latitude = convertedZip.results[0].geometry.location.lat;
    // console.log(latitude);
    const longitude = convertedZip.results[0].geometry.location.lng;
    // console.log(longitude);
    const coords = await fetch(`/api/location`, {
        method: 'POST',
        body: JSON.stringify({
            latitude,
            longitude
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    initMap(latitude, longitude);

    // const city = convertedZip.results[0].formatted_address;
    // console.log(city);
    // // This separates the city information and puts it in an array
    // const cityName = city.split(' ');
    // console.log(cityName);
    // // This takes out the city and state from the split need to display on page
    // const dispCity = cityName[0] + ' ' + cityName[1];
    // console.log(dispCity);
}

// This function gets the coordinates based off geolocation confirmed by the user when they click on 'near me' button
async function getLocation() {
    console.log('whomp whomp')
    if ('geolocation' in navigator) {
        console.log('geolocation available');
        navigator.geolocation.getCurrentPosition(async function(position) {
            console.log(position.coords.latitude);
            const latitude = position.coords.latitude;

            console.log(position.coords.longitude);
            const longitude = position.coords.longitude;

            const coords = await fetch(`/api/location`, {
                method: 'POST',
                body: JSON.stringify({
                    latitude,
                    longitude
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
}

function initMap(latitude, longitude) {
    // Use to set the center of the map to the current user's location / Need to get from stored values in table of lat and lon
    let currentUser = {};
    if(latitude == null || latitude == '' || latitude == undefined) {
    currentUser = { lat: 27.88, lng: -82.8 };
    } else {
    currentUser = { lat: Number(latitude), lng: Number(longitude) };
    }
    // latitude = Number(latitude);
    // longitude = Number(longitude);
    // const currentUser = { lat: latitude, lng: longitude };
    // const currentUser = { lat: 27.88, lng: -82.8 };
    console.log(currentUser);
    // const currentUser = coords;
    const map = new google.maps.Map(document.getElementById("map"), {
        // This sets the zoom distance in the map
        zoom: 10,
        // This sets the center of the map for the current location being searched
        center: currentUser,
    });
    // This calls for the markers to be created and placed on the map after the map has been created
    setMarkers(map);
}

// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.
// var users1 = [
//     // [user.username, user.latitude, user.longitude, user.zIndex],
//     // Use match.floor to randomly generate zIndex
//     ["mmegroff0", 27.87986, -82.75092, 4],
//     ["lchinnery1", 27.90803, -82.75529, 5],
//     ["jhelin2", 27.84179, -82.79544, 3],
//     ["bsatterley3", 27.88301, -82.82732, 2],
//     ["hlozano4", 27.91560, -82.80650, 1],
// ];

// This creates the multiple markers for the map
async function setMarkers(map) {
    console.log('init');
    let response = await fetch('/api/location', (data) => {
        method: 'GET',
        console.log('location', data);
    })
    const users = await response.json();
    // const users
    // console.log(data);
    console.log(users);
    // Adds markers to the map.
    const image = {
        // url:`${userImg}`,
        url: "../img/BookHeartPin2.png",
        //url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
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

    const zIndex = Math.floor(Math.random() * 5) + 1;

    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        console.log(user.latitude);
        let userLat = Number(user.latitude);
        let userLng = Number(user.longitude);
        console.log(userLat, userLng);
        const marker = new google.maps.Marker({
            position: { lat: userLat, lng: userLng },
            map,
            icon: image,
            shape: shape,
            title: user[5],
            zIndex: zIndex
        });
        // console.log(marker);
        // Add a click listener for each marker
        marker.addListener("click", () => {
            console.log("Marker clicked");
        });
    }
    
}

// This method adds an event listener to the zip code submit button to call the getCoordinates function when clicked
document.querySelector('.zip-submit').addEventListener('submit', getCoordinates);

// Need to add a {{#if logedin}} button to the header with an id="near-me"
document.querySelector('#near-me').addEventListener('click', getLocation);

// getLocation();