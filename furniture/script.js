const input = document.getElementById("input");
const submit = document.getElementById("submit");

submit.addEventListener("click", function(evento){
evento.preventDefault();

if (input.validity.valid){
alert("Cadastro concluido!");
input.value= "";
}
else{
alert("Seu cadastro precisa ser feito com um endereço de email!")
input.value= "";
}
});


const bt1 = document.getElementById("buy");
const bt2 = document.getElementById("learn");
const btt = document.getElementById("lista")


function botoes(){
alert("Página em construção!")
}

    bt1.addEventListener("click", botoes);
    bt2.addEventListener("click", botoes);
    btt.addEventListener("click", botoes);

