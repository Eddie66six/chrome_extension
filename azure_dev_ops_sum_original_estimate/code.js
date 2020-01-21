(function() {
    function somar(){
        document.querySelector('.grid-canvas[role="presentation"]').scrollTo(0,20000)
        setTimeout(() => {
            var grid = document.querySelector('[role="grid"]').querySelectorAll('[role="row"]');
            var headers = grid[0].children[0].querySelectorAll('[role="columnheader"]');
            var indexColumn = -1;
            for(let i = 0; i < headers.length; i++){ if(headers[i].querySelector('.title').innerText == "Original Estimate") {indexColumn= i; break;} }

            if(indexColumn == -1) return;
            var soma = 0;
            for(let i = 1; i < grid.length; i++){ soma += parseFloat(grid[i].children[indexColumn ].innerHTML) ? parseFloat(grid[i].children[indexColumn ].innerHTML) : 0 }

            if(document.getElementById('totalId')){
                document.getElementById('totalId').innerText = soma;
                return;
            }
            
            criarTotal(soma);
        }, 500);
    }
    function criarTotal(soma){
        var conteudoNovo = document.createElement('div');
        conteudoNovo.id = "totalId";
        conteudoNovo.innerText = soma;
        conteudoNovo.style.position = "fixed";
        conteudoNovo.style.top = "95%";
        conteudoNovo.style.left = "95%";
        conteudoNovo.style.transform = "translate(-50%, -50%)";
        conteudoNovo.style.fontSize = "40px";
        conteudoNovo.style.color = "red";
        conteudoNovo.style.backgroundColor = "white";
        document.getElementsByTagName('body')[0].appendChild(conteudoNovo);
    }
    somar();
})();