			function verifica(campo) {
			if (campo.match(/^[0-9]+$/)) {
				return true;
			} else {
				return false;
			}
		}

		function calcular() {

			var n1 = document.getElementById("box1").value;
			var n2 = document.getElementById("box2").value;
			var rAdicao = document.getElementById("rAdicao");
			var rSubtracao = document.getElementById("rSubtracao");

			

			if (n1 == "" && n2 == "") {
				naTela.textContent = "campo 1 e 2 vazios!";
			} else if (n2 == "") {
				naTela.textContent = "campo 2 vazio!";
			} else if (n1 == "") {
				naTela.textContent = "campo 1 vazio!";
			} else if (rAdicao.checked==false && rSubtracao.checked==false) {
				naTela.textContent = "POR FAVOR, SELECIONE UMA OPERAÇÃO";
			} else {
				var a = verifica(n1);
				var b = verifica(n2);

				
				if (a == true && b == true) {
					if (rAdicao.checked == true) {
						soma = parseFloat(n1) + parseFloat(n2);
						naTela.textContent = soma;
				} else if (rSubtracao.checked == true) {
					sub = parseFloat(n1) - parseFloat(n2);
						naTela.textContent = sub;
				}
					
				} else if (a == false && b == false) {
					naTela.textContent = "Ambos os campos devem conter apenas números!";
				} else if (!a == true) {
					naTela.textContent = "O campo 1 deve conter apenas números!";
				} else if (!b == true) {
					naTela.textContent = "O campo 2 deve conter apenas números!";
				}

			}

		} //fim funcao
