
document.getElementById("calcular").addEventListener("click", function() {
    let productos = document.querySelectorAll("#lista-productos input[type='checkbox']:checked");
    let costoTotal = 0;
    for (let i = 0; i < productos.length; i++) {
        costoTotal += parseInt(productos[i].value);
    }
    document.getElementById("resultado").textContent = "El costo total de los productos seleccionados es: USD" + costoTotal;
});
