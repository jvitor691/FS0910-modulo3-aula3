function checkStatus()
{
    event.preventDefault();
    switch(status_compra.value){
        case "pago":
            document.getElementById("resultado").innerHTML = "Pedido pago";
        break;
        case "recusado":
            document.getElementById("resultado").innerHTML = "Pedido recusado";
        break;
        case "pendente":
            document.getElementById("resultado").innerHTML = "Pedido pendente";
        break;
        case "disputa":
            document.getElementById("resultado").innerHTML = "Pedido disputa";
        break;
        default:
            document.getElementById("resultado").innerHTML = "Ocorreu um erro";
    }
}

function checkIdade()
{
    event.preventDefault();

    let resultado = document.getElementById("resultado");
    let idd = Number(idade.value);

    // idd < 10 ? resultado.innerHTML = "É criança" : resultado.innerHTML = "Não é criança";
    idd < 10 && (document.getElementById("imagem").src = "https://eyekids.med.br/wp-content/uploads/2020/02/como-convencer-a-crianca-usar-oculos.jpg");
    (idd >= 10 && idd < 18) && (resultado.innerHTML = "É Juvenil");
    (idd >= 18 && idd < 60) && (resultado.innerHTML = "É Adulto");
    idd > 60 && (resultado.innerHTML = "É Idoso");

}
