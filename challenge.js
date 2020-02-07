let pyramid = document.querySelector('.pyramid');
let url = 'http://ron-swanson-quotes.herokuapp.com/v2/quotes';
let searchUrl = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes/search/';
let search = document.querySelector('form');
let modal = document.querySelector('.modal');
let close = document.querySelector('.close-button');
let modalContent = document.querySelector('.modal-content');
for (let i=1; i<=9; i++){
    for(let j=1; j<=i; j++){
        let subject = document.createElement('div');
        subject.classList.add('pyramid-subject');
        subject.addEventListener('click', respond);
        close.addEventListener('click', closeModal)
        function respond(e){
            e.preventDefault();
            if(e.target == subject){ 
                modal.style.display = 'block';
            } 
            fetch(url)
                .then(res=>{
                    return res.json();
                })
                .then(res=>{
                // console.log('Bully for you!')
                modalContent.innerText = res[0];
                })
            // console.log('This is an excellent rectangle!')
            }
        function closeModal(e){
            e.preventDefault();
            if(e.target == close){
                modal.style.display = 'none';
            }
        }
        let row = document.querySelector(`.row-${i}`);
        row.appendChild(subject);
        }
        search.addEventListener('submit', searchQuote);
function searchQuote(e){
    e.preventDefault();
    let input = document.querySelector('.input');
    let searchValue = input.value;
    let quoteUrl = searchUrl+searchValue;
    fetch(quoteUrl).then(res=>{
        return res.json();
    })
    .then(res=>{
        modalContent.innerText = res[0];
    })
    if(e.target == search){ 
        modal.style.display = 'block';
    } 
    if(e.target == close){
        modal.style.display = 'none';
    }
}
};
// search.addEventListener('submit', searchQuote);
// function searchQuote(e){
//     e.preventDefault();
//     let input = document.querySelector('.input');
//     let searchValue = input.value;
//     let quoteUrl = searchUrl+searchValue;
//     fetch(quoteUrl).then(res=>{
//         return res.json();
//     })
//     .then(res=>{
//         modalContent.innerText = res[0];
//     })
//     if(e.target == search){ 
//         modal.style.display = 'block';
//     } 
//     if(e.target == close){
//         modal.style.display = 'none';
//     }
// }