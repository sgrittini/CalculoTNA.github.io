let inversion;
function calcular() {
    if ( validarInversion()) {
        const TASA = () => document.getElementById("inpTasa").value / 100;
        let tna = TASA();
        let totalMeses = document.getElementById("inpMeses").value;
        let ganaciaNeta = 0;
        let mensaje = "";
        let inversionInicial = inversion;
        let interes;
        let dineroGanado=0;


        for (let index = 0; index < totalMeses; index++) {
            interes = calcularInteres(inversion, tna);
            mensaje = `${mensaje}mes: ${index + 1} acumulado: ${formatNumero(inversion)} interes=${formatNumero(interes)}\n`;
            if (document.getElementById("flagReInvertir").checked) {
                inversion = parseFloat(inversion) + parseFloat(interes);
               
                

            }
            else {
                ganaciaNeta = ganaciaNeta + interes;
                
            }

        }
        if (document.getElementById("flagReInvertir").checked) {
            ganaciaNeta = (inversion-inversionInicial);
            mensaje = `${mensaje}total ganancia ${formatNumero(parseFloat(inversion) - parseFloat(inversionInicial))}`;
           
        }
        else {
            mensaje = `${mensaje}total ganancia ${formatNumero(ganaciaNeta)}`;
           
          
        }
        dineroGanado=ganaciaNeta;
       
        mesage(mensaje,dineroGanado);
        
    }
}


/*function recuperarTasaNominal() {
    let tasa = document.getElementById("inpTasa").value;
    return tasa / 100;
}*/
function calcularInteres(valor, tasa) {
    return valor * (tasa * 30 / 365);
}
function formatNumero(numero) {
    let numeroStr= Intl.NumberFormat('de-DE').format(numero);
    if(numeroStr.indexOf(",")<0)
    {
        return numeroStr+",00";    
    }
    return numeroStr;
}
function mesage(mensaje,dineroGanado) {
    if (document.getElementById("alert").checked) {
        alert(mensaje);
    }
    if (document.getElementById("console").checked) {
        console.log(mensaje);
    }
    document.getElementById("ganancia").value = formatNumero(dineroGanado);
}

function formatoNumerico(input) {
    if (validarInversion()) {
        document.getElementById("inpInversion").value = Intl.NumberFormat('de-DE').format(parseInt(input.value)) + ",00";
        //alert(Intl.NumberFormat('de-DE').format(parseInt(input.value))+",00");

    }

}
function validarInversion()
{
    inversion = (document.getElementById("inpInversion").value).replaceAll(".", "").replace(",", ".");
    if (isNaN(inversion)||inversion=="") {
        alert("debe ingresar un numero valido");
        document.getElementById("inpInversion").focus();
        return false;
    }
    else
    {   
        return true;
    }
    
}