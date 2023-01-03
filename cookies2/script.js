let lgpdUrl = 'https://jsonplaceholder.typicode.com/posts';  //url para solicitar o ID  BackEnd

let lgpdHtml = `

<link rel="stylesheet" href="lgpd.css">
<div class="lgpd">
            <div class="lgpd-left">
            Utilizamos cookies para oferecer melhor experiência,
            aprimorar o desempenho e personalizar o nosso conteúdo.
            para saber mais, acesse a nossa  <a href="#">politica de privacidade.</a>
            </div>
            <div class="lgpd-right">
                <button>Entendi</button>
            </div>
        </div>

`;

let lsContent = localStorage.getItem('lgpd');
if(!lsContent) {
    document.body.innerHTML += lgpdHtml;

    let lgpdArea = document.querySelector('.lgpd')
    let lgpdButton = lgpdArea.querySelector('button');

    lgpdButton.addEventListener('click', async ()=>{
        lgpdArea.remove();

        let result = await fetch(lgpdUrl);
        let json = await result.json();

        if(json.error != '') {
            let id = 'COOKIES AUTORIZADOS'  //DEVERIA SER JSON.ID
            localStorage.setItem('lgpd', id);
        }

    });
}