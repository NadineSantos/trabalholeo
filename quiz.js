var acertos = 0;
var erros = 0;

// CONHECIMENTOS GERAIS

//verifica questão do alfabeto

function alfabeto() {

	var resp25 = document.getElementById('resp25');
	var resp23 = document.getElementById('resp23');
	var resp21 = document.getElementById('resp21');
	var resp26 = document.getElementById('resp26');
	
	while((!resp25.checked)&(!resp23.checked)&(!resp21.checked)&(!resp26.checked)){

		alert("Marque uma opcao para continuar");
		breack;

	}

	
	if(resp26.checked){

		acertos++;

		alert("Resposta certa!");

	}


	else{ 

		alert("Errou seu burro!");
		erros++;

	}

	alert("Acertos: " + acertos +" "
	 + "erros: " + erros);
}

// Verifica questao da capital de pernambuco
function capital() {

	var sp = document.getElementById('sp');
	var bras = document.getElementById('bras');
	var rec = document.getElementById('rec');
	var car = document.getElementById('car');
	
	while((!sp.checked)&(!bras.checked)&(!rec.checked)&(!car.checked)){

		alert("Marque uma opcao para continuar");
		breack;

	}

	if(rec.checked){

		acertos++;

		alert("Resposta certa!");

	}


	else{ 

		alert("Errou seu burro!");
		erros++;

		}

	alert("Acertos: " + acertos +" "
	 + "erros: " + erros);
}

//TRANSITO

//verifica questão da placa

function placa() {

	var di = document.getElementById('dir');
	var es = document.getElementById('es');
	var ci = document.getElementById('ci');
	var ri = document.getElementById('ri');
	
	while((!di.checked)&(!es.checked)&(!ci.checked)&(!ri.checked)){

		alert("Marque uma opcao para continuar");
		breack;

	}

	if(di.checked){

		acertos++;

		alert("Resposta certa!");

	}


	else{ 

		alert("Errou seu burro!");
		erros++;

		}

	alert("Acertos: " + acertos +" "
	 + "erros: " + erros);
}

//verifica questao do sinal
function sinal() {

	var resp1 = document.getElementById('resp1');
	var resp2 = document.getElementById('resp2');
	var resp3 = document.getElementById('resp3');
	var resp4 = document.getElementById('resp4');
	
	while((!resp1.checked)&(!resp2.checked)&(!resp3.checked)&(!resp4.checked)){

		alert("Marque uma opcao para continuar");
		breack;

	}

	if(resp3.checked){

		acertos++;

		alert("Resposta certa!");

	}


	else{ 

		alert("Errou seu burro!");
		erros++;

		}

	alert("Acertos: " + acertos +" "
	 + "erros: " + erros);
}

//MUSICA

//verifica questao da musica

function musica() {

	var res1 = document.getElementById('res1');
	var res2 = document.getElementById('res2');
	var res3 = document.getElementById('res3');
	var res4 = document.getElementById('res4');
	
	while((!res1.checked)&(!res2.checked)&(!res3.checked)&(!res4.checked)){

		alert("Marque uma opcao para continuar");
		breack;

	}

	if(res1.checked){

		acertos++;

		alert("Resposta certa!");

	}


	else{ 

		alert("Errou seu burro!");
		erros++;

		}

	alert("Acertos: " + acertos +" "
	 + "erros: " + erros);
}

//verifica questao do instrumento

function instrumento() {

	var bat = document.getElementById('bat');
	var gui = document.getElementById('gui');
	var vio = document.getElementById('vio');
	var fla = document.getElementById('fla');
	
	while((!bat.checked)&(!gui.checked)&(!vio.checked)&(!fla.checked)){

		alert("Marque uma opcao para continuar");
		breack;

	}

	if(bat.checked){

		acertos++;

		alert("Resposta certa!");

	}


	else{ 

		alert("Errou seu burro!");
		erros++;

		}

	alert("Acertos: " + acertos +" "
	 + "erros: " + erros);
}


//JOGO

//testa questao de erros na figura

function jerro() {

	var e4 = document.getElementById('4');
	var e10 = document.getElementById('10');
	var e7 = document.getElementById('7');
	var e8 = document.getElementById('8');
	
	while((!e4.checked)&(!e10.checked)&(!e7.checked)&(!e8.checked)){

		alert("Marque uma opcao para continuar");
		breack;

	}

	if(e7.checked){

		acertos++;

		alert("Resposta certa!");

	}


	else{ 

		alert("Errou seu burro!");
		erros++;

		}

	alert("Acertos: " + acertos +" "
	 + "erros: " + erros);
}