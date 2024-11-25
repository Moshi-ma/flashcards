function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = `
<div class="cartaoconteudo">
    <h3>${categoria} </h3>
        <div class="cartaoconteudo-pergunta">
            <p>${pergunta}</p>
        </div>
    <div class="cartaoconteudo-resposta">
        <p>${resposta}</p>
    </div>
</div>
`
    let respostaVisivel = false

    function viraCartao (){
        respostaVisivel = !respostaVisivel
        cartao.classList.toggle('active',respostaVisivel)
    }
    cartao.addEventListener('click', viraCartao)

    container.appendChild(cartao)
} 



