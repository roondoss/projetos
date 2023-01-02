let lgpdUrl = 'https://jsonplaceholder.typicode.com/posts';  //url para solicitar o ID  BackEnd

let lgpdHtml = `

<link rel="stylesheet" href="lgpd.css">
<div class="lgpd">
            <div class="lgpd-left">
                Nós utilizamos cookies para melhorar a experiencia do usuário. <br>
                para conferir os detalhes, leia nossa <a href="#">politica de privacidade.</a>
            </div>
            <div class="lgpd-right">
                <button>OK</button>
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
            let id = 'AUTORIZADO'  //DEVERIA SER JSON.ID
            localStorage.setItem('lgpd', id);
        }

    });
}