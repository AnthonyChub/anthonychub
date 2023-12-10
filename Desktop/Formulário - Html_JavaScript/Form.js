/*function exercicioFormulario(){
    var campoA = document.getElementById("CampoA").value;
    var campoB = document.getElementById("CampoB").value;

    if (isNaN(valorA) || isNaN(valorB) || valorA >= valorB) {
        alert('O valor A é menor que o Valor B');
    return;
    }
}

function validarValores() {
    // Obter os valores dos campos do formulário
    var valorA = parseFloat(document.getElementById("CampoA").value);
    var valorB = parseFloat(document.getElementById("CampoB").value);

    // Validar se o Valor A é menor que o Valor B
    if (isNaN(CampoA) || isNaN(CampoB) || CampoA >= CampoB) {
        alert('O valor A é maior que o valor B');
        return;
    }
    */

    function validarFormulario() {
        var CampoA = (document.getElementById("CampoA").value);
        var CampoB = (document.getElementById("CampoB").value);
    
        if (isNaN(CampoA) || isNaN(CampoB) || CampoA >= CampoB) {
            alert('Por favor, certifique-se de que o Campo A é menor que o Campo B.');
        } else {
            alert('Formulário Validadoo! Campo A é menor que o Campo B.');
        }
    }