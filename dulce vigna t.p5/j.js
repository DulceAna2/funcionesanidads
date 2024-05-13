function conventirUnidad(cantidad, unidadOriginal) {
    function metrosA_pies(metros) {
        return metros * 3.281;
    }
    function kilogramosA_libras(kilogramos) {
        return kilogramos * 2.20462
    }
    function kilometrosA_millas(kilometros) {
        return kilometros / 1.609
    }
    function litrosA_galones(litros) {
        return litros / 3.785
    }
    function centrimetrosA_pulgadas(centimetros) {
        return centimetros / 2.54
    }
    let resultado;
    switch (unidadOriginal.toLowerCase()) {
        case "metros":
            resultado = metrosA_pies(cantidad);
            return `La cantidad ${cantidad} metros es equivalentes a ${resultado.toFixed(2)} pies`;
        case "kilogramos":
            resultado = kilogramosA_libras(cantidad);
            return `La cantidad ${cantidad} kilogramos es equivalentes a ${resultado.toFixed(2)} libras`;
        case "kilometros":
            resultado = kilometrosA_millas(cantidad);
            return `La cantidad ${cantidad} kilometros es equivalentes a ${resultado.toFixed(2)} millas`;
        case "litros":
            resultado = litrosA_galones(cantidad);
            return `La cantidad ${cantidad} litros es equivalentes a ${resultado.toFixed(2)} galones`;
        case "centrimetros":
            resultado = centrimetrosA_pulgadas(cantidad);
            return `La cantidad ${cantidad} centimetros es equivalentes a ${resultado.toFixed(2)} pulgadas`;
        default:
            return `Unidad de medida no compatible`;

    }

}
console.log(conventirUnidad(5, "metros"))
console.log(conventirUnidad(5, "kilogramos"))
console.log(conventirUnidad(5, "kilometros"))
console.log(conventirUnidad(5, "litros"))
console.log(conventirUnidad(5, "centrimetros"))