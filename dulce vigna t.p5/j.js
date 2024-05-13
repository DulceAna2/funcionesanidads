//FUNCION GRANDE
function conventirUnidad(){
    let cantidad=parseInt(document.getElementById("cantidad").value);
    let unidadOriginal=document.getElementById("medida_original").value;
    console.log("el valor del select es:"+unidadOriginal)
    console.log("el valor del input es:"+cantidad)
    //SUB FUNCIONES
    function metrosA_pies(metros) {
        return (metros * 3.281).toFixed(2);
    }
    function kilogramosA_libras(kilogramos) {
        return (kilogramos * 2.20462).toFixed(2);
    }
    function kilometrosA_millas(kilometros) {
        return (kilometros / 1.609).toFixed(2);
    }
    function litrosA_galones(litros) {
        return (litros / 3.785).toFixed(2);
    }
    function centrimetrosA_pulgadas(centimetros) {
        return (centimetros / 2.54).toFixed(2);
    }
    let resultado;
    //CLASIFICAR LAS unidadOriginal
    switch (unidadOriginal.toLowerCase()) {
        case "metros":
            resultado = metrosA_pies(cantidad);
            return alert("La cantidad "+cantidad+"metros es equivalentes a" + resultado+" pies")
            //no se necesita break porque el return(retorna) las opciones
        case "kilogramos":
            resultado = kilogramosA_libras(cantidad);
            return  alert("La cantidad "+ cantidad+" kilogramos es equivalentes a "+ resultado+" libras")
        case "kilometros":
            resultado = kilometrosA_millas(cantidad);
            return  alert("La cantidad "+ cantidad+" kilometros es equivalentes a "+ resultado+" millas")
        case "litros":
            resultado = litrosA_galones(cantidad);
            return  alert("La cantidad "+ cantidad+" litros es equivalentes a "+ resultado+" galones")
        case " centimetros":
            resultado = centrimetrosA_pulgadas(cantidad);
            return alert("La cantidad "+ cantidad+" centimetros es equivalentes a "+ resultado+" pulgadas")
        default:
            return alert(`Unidad de medida no compatible`);
    }
    
}
