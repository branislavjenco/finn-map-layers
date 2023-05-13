// content.js


// finn.no elements with information
top_section_query = '[data-testid="object-title"]'
address_el_query = '[data-testid="object-address"]'

// map layer urls
stoy_url = "https://wms.miljodirektoratet.no/arcgis/rest/services/stoy/stoykart_strategisk_veg/MapServer"
flom_url = "https://nve.geodataonline.no/arcgis/rest/services/FlomAktsomhet/MapServer"
losmasse_url = "https://arcgis06.miljodirektoratet.no/arcgis/rest/services/NIN_hjelpelag/Losmasser/MapServer"
kvikkleire_url = "https://nve.geodataonline.no/arcgis/rest/services/SkredKvikkleire2/MapServer"

section = document.querySelectorAll(top_section_query)[0];
address = document.querySelectorAll(address_el_query)[0];

function getMap(address, urls) {
    arcgis_url = `https://www.arcgis.com/home/webmap/viewer.html?urls=${urls.join(",")}&source=sd&find=${encodeURIComponent(address.innerHTML)}&mapOnly=true`
    return arcgis_url
}

// Create the iframe element
const iframe = document.createElement("iframe");

iframe.src = getMap(address, [stoy_url, flom_url, losmasse_url, kvikkleire_url]);
iframe.width = "100%";
iframe.height = "500px";
iframe.frameBorder = "0";


section.appendChild(iframe)
