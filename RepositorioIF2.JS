const inputBtc = document.querySelector("#btc-ingresado");
const inputVerificacionEth=document.querySelector("#eth-verificacion");
const inputVerificacionUsd=document.querySelector("#usd-verificacion")
const pResultado=document.querySelector("#resultado");



const VALOR_BTC_ETH = 13.5400;
const VALOR_BTC_USD = 39685.40;

/* let btcIngresado= prompt ("Ingrese Bitcoins a Convertir")
let conversionRequerida = confirm ("aceptar para ETH y cancelar para USD"); */
btcIngresado= "def btc ingresados";
conversionRequeridaEth="def eth verificado";
conversionRequeridaUsd="def usd verificado";

function convertir(){
    btcIngresado=inputBtc.value;
    conversionRequeridaEth=inputVerificacionEth.value;

    if (conversionRequeridaEth == "true") {
        /* alert ("Tu conversion es : "+ (btcIngresado * VALOR_BTC_ETH) + " ETH"); */
        pResultado.innerHTML= "Tu conversion es : "+ (btcIngresado * VALOR_BTC_ETH) + " ETH";
    } else {
        conversionRequeridaUsd=inputVerificacionUsd.value;
        /* alert ("Tu conversion es : "+ (btcIngresado * VALOR_BTC_USD) + " USD"); */}
        if(conversionRequeridaUsd == "true"){
        pResultado.innerHTML= "Tu conversion es : "+ (btcIngresado * VALOR_BTC_USD) + " USD";}}