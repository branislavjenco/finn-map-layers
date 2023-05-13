// content.js

// Create the iframe element
const iframe = document.createElement("iframe");

section = document.querySelectorAll('[data-testid="object-title"]')[0];
address = document.querySelectorAll('[data-testid="object-address"]')[0];


function getMap(url1, url2, address) {
    arcgis_url = `https://www.arcgis.com/home/webmap/viewer.html?urls=${url1},${url2}&source=sd&find=${encodeURIComponent(address.innerHTML)}&mapOnly=true`
    return arcgis_url
}


stoy_url = "https%3A%2F%2Fwms.miljodirektoratet.no%2Farcgis%2Frest%2Fservices%2Fstoy%2Fstoykart_strategisk_veg%2FMapServer"
flom_url = "https%3A%2F%2Fnve.geodataonline.no%2Farcgis%2Frest%2Fservices%2FFlomAktsomhet%2FMapServer"


iframe.src = getMap(stoy_url, flom_url, address);
iframe.width = "100%";
iframe.height = "500px";
iframe.frameBorder = "0";


section.appendChild(iframe)
