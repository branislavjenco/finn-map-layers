// content.js

// finn.no elements with information
const top_section_query = '[data-testid="object-title"]'
const address_el_query = '[data-testid="object-address"]'

// map layer urls
const stoy_url = "https://wms.miljodirektoratet.no/arcgis/rest/services/stoy/stoykart_strategisk_veg/MapServer"
const flom_url = "https://nve.geodataonline.no/arcgis/rest/services/FlomAktsomhet/MapServer"
const kvikkleire_url = "https://nve.geodataonline.no/arcgis/rest/services/SkredKvikkleire2/MapServer"


function getMapUrl(address, urls) {
    const arcgis_url = `https://www.arcgis.com/home/webmap/viewer.html?urls=${urls.join(",")}&source=sd&find=${encodeURIComponent(address.innerHTML)}&mapOnly=true`
    return arcgis_url
}


try {
    const section = document.querySelectorAll(top_section_query)[0];
    const address = document.querySelectorAll(address_el_query)[0];

    // Create the iframe element
    const iframe = document.createElement("iframe");

    iframe.src = getMapUrl(address, [stoy_url, flom_url, kvikkleire_url]);
    iframe.width = "100%";
    iframe.height = "500px";
    iframe.frameBorder = "0";

    section.appendChild(iframe)

} catch(e) {
    console.error("Error adding map to the page.", e)
}

