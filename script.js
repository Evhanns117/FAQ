result.onclick = () => {
  map.flyTo(result.coords, 10, {
    duration: 2 // Animation fluide de 2 secondes
  });
  L.popup()
    .setLatLng(result.coords)
    .setContent(`<b>${result.city}</b><br>${result.answer}`)
    .openOn(map);
};
