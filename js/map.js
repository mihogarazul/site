// Initialize Leaflet map for Contact section
document.addEventListener('DOMContentLoaded', function () {
    const map = L.map('leaflet-map').setView([27.083098, -109.453772], 13);

    // OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Marker at the location
    L.marker([27.083098, -109.453772]).addTo(map)
        .bindPopup('Mi Hogar Azul')
        .openPopup();

    // Use ResizeObserver to handle container size changes robustly
    const mapContainer = document.getElementById('leaflet-map');
    if (mapContainer) {
        const resizeObserver = new ResizeObserver(() => {
            map.invalidateSize();
        });
        resizeObserver.observe(mapContainer);
    }

    // Fallback: Force invalidation after a delay
    setTimeout(() => {
        map.invalidateSize();
    }, 1000);
});
