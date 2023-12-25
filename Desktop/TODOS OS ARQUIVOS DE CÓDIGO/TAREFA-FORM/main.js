function addContact() {

    var Nome = document.getElementById("Nome").value;
    var Telefone = document.getElementById("Telefone").value;

    var table = document.getElementById("Tabela-com-contatos").getElementsByTagName('tbody')[0];
    var novalinha = table.insertRow(table.rows.length);

    var cell1 = novalinha.insertCell(0);
    var cell2 = novalinha.insertCell(1);

    cell1.innerHTML = Nome;
    cell2.innerHTML = Telefone;

    document.getElementById("Nome").value = "";
    document.getElementById("Telefone").value = "";

}
