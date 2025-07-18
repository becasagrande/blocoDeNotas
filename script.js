// Espera o carregamento completo do conteúdo HTML antes de executar o código
document.addEventListener('DOMContentLoaded', () => {

    // 1. SELEÇÃO DOS ELEMENTOS DA INTERFACE
    // --------------------------------------
    // Pegamos os elementos do HTML pelos seus IDs para poder manipular depois.
    const blocoDeNotas = document.getElementById('blocoDeNotas');      // Área de texto onde o usuário digita
    const btnLimparNotas = document.getElementById('btnLimparNotas');  // Botão para limpar as notas
    const btnSalvarNotas = document.getElementById('btnSalvarNotas');  // Botão para salvar as notas
    const btnAlternarModo = document.getElementById('btnAlternarModo'); // Botão para alternar entre modo escuro e claro

    // 2. CARREGAR NOTA SALVA (SE HOUVER)
    // -----------------------------------
    // O localStorage permite guardar informações mesmo após fechar o navegador.
    // Aqui estamos buscando a nota salva com a chave 'minhaNota'.
    const notaSalva = localStorage.getItem('minhaNota');
    if (notaSalva) {
        // Se existir uma nota salva, ela é colocada automaticamente dentro do textarea
        blocoDeNotas.value = notaSalva;
    }

    // 3. SALVAR A NOTA NO LOCALSTORAGE
    // ----------------------------------
    // Quando o botão de salvar for clicado...
    btnSalvarNotas.addEventListener('click', () => {
        // Salvamos o conteúdo atual do textarea no localStorage
        localStorage.setItem('minhaNota', blocoDeNotas.value);
        // E mostramos uma mensagem no console (para depuração)
        console.log("Nota salva no localStorage!");
    });

    // 4. LIMPAR A NOTA E REMOVER DO LOCALSTORAGE
    // --------------------------------------------
    // Quando o botão de limpar for clicado...
    btnLimparNotas.addEventListener('click', () => {
        // Limpamos o conteúdo do textarea
        blocoDeNotas.value = '';
        // E também apagamos a nota salva no localStorage
        localStorage.removeItem('minhaNota');
        // Mensagem de confirmação no console
        console.log("Notas limpas e removidas do localStorage!");
    });

    // 5. ALTERNAR ENTRE MODO CLARO E MODO ESCURO
    // --------------------------------------------
    // Quando o botão de alternar modo for clicado...
    btnAlternarModo.addEventListener('click', () => {
        // Alternamos as classes do <body> para mudar o tema da página
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
        // Essas classes são definidas no CSS e mudam as cores do fundo, texto etc.
    });
});
