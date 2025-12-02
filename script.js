// Promociones automáticas
const promos = [
    "¡Descuentos los miércoles!",
    "Pregunta por nuestras promociones de temporada",
    "Servicio express ¡Entrega el mismo día!"
];

function mostrarPromoAleatoria() {
    const promo = promos[Math.floor(Math.random() * promos.length)];
    document.getElementById("promo-text").textContent = promo;
}

// Cambiar promoción cada 5 segundos
setInterval(mostrarPromoAleatoria, 5000);

mostrarPromoAleatoria();
