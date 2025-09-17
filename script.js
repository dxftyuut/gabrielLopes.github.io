const botao = document.getElementById("botão")
const cores = ["lightblue", "lightpink", "black"];
const alterar_color = () => {
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    document.body.style.backgroundColor = corAleatoria;
};
botao.addEventListener("click", () => alterar_color())


