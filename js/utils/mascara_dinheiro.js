
function aplicarMascaraParaRealComPrefixo (valor) {
    if(isNaN(valor)){
        return 0;
    }
    return Number (valor).toLocaleString ( 'pt-Br', { style: 'currency', currency:'BRL' } );

}