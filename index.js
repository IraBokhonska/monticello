let map;

const marker = document.createElement("span");
marker.classList.add("custom-marker");
marker.innerHTML = `<svg width="106" height="106" viewBox="0 0 106 106" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.3" cx="53" cy="53" r="53" fill="white"/>
<g opacity="0.8" filter="url(#filter0_d_9_39)">
<circle cx="53" cy="53" r="35" fill="white"/>
</g>
<circle cx="53" cy="53" r="8" fill="#7E5AFF"/>
<defs>
<filter id="filter0_d_9_39" x="3" y="3" width="100" height="100" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="7.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.690196 0 0 0 0 0.690196 0 0 0 0 0.690196 0 0 0 0.25 0"/>
<feBlend mode="multiply" in2="BackgroundImageFix" result="effect1_dropShadow_9_39"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_9_39" result="shape"/>
</filter>
</defs>
</svg>`;

async function initMap() {
  const position = { lat: -25.344, lng: 131.031 };

  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 2,
    center: position,
    mapId: "8fd1555f1b2a75a1",
  });

  const markersData = [
    {
      title: "Hong Kong - 1588 feet",
      position: { lat: 22.30282, lng: 114.161308 },
    },
    {
      title: "New York City, United States - 1776 feet",
      position: { lat: 40.712742, lng: -74.013382 },
    },
  ];

  markersData.forEach((data) => {
    const newMarker = new AdvancedMarkerElement({
      map: map,
      title: data.title,
      position: data.position,
      content: marker.cloneNode(true),
    });
  });
}

initMap();