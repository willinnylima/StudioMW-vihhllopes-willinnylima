function prepararMensagem() {
    var mensagem = document.getElementById("campoMensagem").value;
    document.getElementById('zap').href = "https://api.whatsapp.com//send?falecomstudio=" +"&text=" + mensagem;
    
}
