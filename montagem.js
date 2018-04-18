function gerar() {

	var loja = document.getElementById("loja");	
	
	if (loja.value == "nctech") {
		var logo = document.getElementById("logo-nctech");
		var loja = "NC Technology Development";
		var site = "www.nctech.net.br"
	}

	var nome = document.getElementById("nome").value;
	var funcao = document.getElementById("funcao").value;
	var email = document.getElementById("email").value;
	var cel = document.getElementById("cel").value;
	var cel2 = document.getElementById("cel2").value;
	
	var canvas = document.getElementById("canvas");
	var contexto = canvas.getContext("2d");
	
	contexto.clearRect(0, 0, canvas.width, canvas.height);

	contexto.drawImage(logo,0,0);

	contexto.font="bold 15px Arial";
	contexto.fillText(nome,170,20);

	contexto.font="13px Arial";
	contexto.fillText(funcao,170,40);

	contexto.font="bold 16px Arial";
	contexto.fillText(loja,170,80);

	contexto.font="bold 11px Arial";
	contexto.fillText(site,170,100);

	contexto.font="bold 11px Arial";
	contexto.fillText(cel,170,120);

	contexto.font="bold 11px Arial";
	contexto.fillText(cel2,290,120);

	contexto.font="11px Arial";
	contexto.fillText(email,170,140);

	var img = document.createElement("IMG");
	var assinatura = document.getElementById("assinatura");
	var download = document.getElementById("download");

	img.src = canvas.toDataURL("image/png");
	assinatura.innerHTML = "";
	assinatura.appendChild(img);

	canvas.style.display = "none";

	download.href = canvas.toDataURL("image/png");

	window.open(canvas.toDataURL("image/png"));
}
