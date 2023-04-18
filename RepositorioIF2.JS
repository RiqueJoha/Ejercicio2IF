const VALOR_BTC_ETH = 13.5400;
const VALOR_BTC_USD = 39685.40;

let btcIngresado= prompt ("Ingrese Bitcoins a Convertir")
let conversionRequerida = confirm ("aceptar para ETH y cancelar para USD");

if (conversionRequerida) {
    alert ("Tu conversion es : "+ (btcIngresado * VALOR_BTC_ETH) + " ETH");
} else {
    alert ("Tu conversion es : "+ (btcIngresado * VALOR_BTC_USD) + " USD");
}