/* VALIDAÇÃO E SIMULAÇÃO DO FORMULÁRIO */
const formContato = document.getElementById("formContato");

formContato.addEventListener("submit", function (event) {
	event.preventDefault();

	const nome = document.getElementById("nome").value.trim();
	const email = document.getElementById("email").value.trim();
	const mensagem = document.getElementById("mensagem").value.trim();

	if (nome === "" || email === "" || mensagem === "") {
		alert("Erro: Todos os campos (Nome, E-mail e Mensagem) são obrigatórios.");
		return;
	}

	const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!regexEmail.test(email)) {
		alert(
			"Erro: Por favor, insira um e-mail válido (exemplo: usuario@dominio.com).",
		);
		return;
	}

	alert(`Mensagem enviada com sucesso!\nObrigada pelo contato, ${nome}.`);

	formContato.reset();
});

/* ALTERNÂNCIA DE TEMA (CLARO / ESCURO) */
const btnTema = document.getElementById("btn-tema");

btnTema.addEventListener("click", function () {
	document.body.classList.toggle("tema-escuro");

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
	navUl.classList.toggle("mostrar-menu");
});

const linksMenu = document.querySelectorAll("nav ul li a");
linksMenu.forEach((link) => {
	link.addEventListener("click", () => {
		navUl.classList.remove("mostrar-menu");
	});
});
