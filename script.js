/* VALIDAÇÃO E SIMULAÇÃO DO FORMULÁRIO */
const formContato = document.getElementById("formContato");

formContato.addEventListener("submit", function (event) {
	// Evita o recarregamento da página ao enviar o formulário
	event.preventDefault();

	// Captura os valores dos campos e remove espaços em branco nas pontas (.trim())
	const nome = document.getElementById("nome").value.trim();
	const email = document.getElementById("email").value.trim();
	const mensagem = document.getElementById("mensagem").value.trim();

	// Verificação 1: Campos vazios
	if (nome === "" || email === "" || mensagem === "") {
		alert("Erro: Todos os campos (Nome, E-mail e Mensagem) são obrigatórios.");
		return; // Interrompe a execução
	}

	// Verificação 2: Formato de e-mail válido usando Regex
	const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!regexEmail.test(email)) {
		alert(
			"Erro: Por favor, insira um e-mail válido (exemplo: usuario@dominio.com).",
		);
		return;
	}

	// Se passou por todas as validações, simula o envio com sucesso
	alert(`Mensagem enviada com sucesso!\nObrigada pelo contato, ${nome}.`);

	// Limpa os campos do formulário
	formContato.reset();
});

/* ALTERNÂNCIA DE TEMA (CLARO / ESCURO) */
const btnTema = document.getElementById("btn-tema");

btnTema.addEventListener("click", function () {
	// Adiciona ou remove a classe 'tema-escuro' no <body>
	document.body.classList.toggle("tema-escuro");

	// Troca o texto do botão dependendo do tema atual
	if (document.body.classList.contains("tema-escuro")) {
		btnTema.textContent = "☀️ Tema Claro";
	} else {
		btnTema.textContent = "🌙 Tema Escuro";
	}
});

/* MENU RESPONSIVO (MOBILE) */
const btnMenu = document.getElementById("btn-menu");
const navUl = document.querySelector("nav ul");

btnMenu.addEventListener("click", function () {
	// Adiciona ou remove a classe 'mostrar-menu' na lista de navegação
	navUl.classList.toggle("mostrar-menu");
});

// Esconde o menu mobile automaticamente ao clicar em um link
const linksMenu = document.querySelectorAll("nav ul li a");
linksMenu.forEach((link) => {
	link.addEventListener("click", () => {
		navUl.classList.remove("mostrar-menu");
	});
});
