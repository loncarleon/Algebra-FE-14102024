// 1. Pročitajte više o JS BOM-u na https://www.w3schools.com/js/js_window.asp






// 2. Dok ste još na toj stranici:
// 	- Ispišite u konzoli visinu i širinu svog trenutno otvorenog browser prozora

console.log("Sirina viewporta: " + window.innerWidth);

console.log("Sirina prozora: " + window.outerWidth);

console.log("Sirina ekrana: " + screen.width);

console.log("Visina viewporta: " + window.innerHeight);

console.log("Visina prozora: " + window.outerHeight);

console.log("Visina ekrana: " + screen.height);

// 	- Saznajte ime domene stranice (hostname) i redirektajte na www.google.com

console.log(window.location.hostname);
window.location.replace("http://www.google.com");

// 	- Napišite naredbu koja otvara konfirmacijski prozor u browseru vezan uz politiku cookija

var rezultat = window.confirm("Allow cookies?");
console.log(rezultat);
// 	- Napišite jednostavnu console.log funkciju koja se izvršava 2 sekunde nakon što je pozvana

window.setTimeout(function() {
    console.log("I am late");
}, 2000);


//Bonus

if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
        console.log("Duzina: ", position.coords.longitude);
        console.log("Sirina: ", position.coords.latitude);
    });
} else {
    console.log("Geolocation disabled")
}



