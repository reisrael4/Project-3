let pyramid = document.querySelector('.pyramid');
let url = 'http://ron-swanson-quotes.herokuapp.com/v2/quotes';
let searchUrl = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes/search/';
let search = document.querySelector('form');
let modal = document.querySelector('.modal');
let close = document.querySelector('.close-button');
let modalContent = document.querySelector('.modal-content');
// close.addEventListener('click', closeModal);
// function closeModal(e){
//     e.preventDefault();
//     if(e.target == window){
//     modal.style.display = 'none';
//     }
// }
for (let i=0; i<45; i++){
    let subject = document.createElement('div');
    subject.classList.add('pyramid-subject');
    subject.addEventListener('click', respond);
    function respond(e){
        e.preventDefault();
        if(e.target == subject){ 
            modal.style.display = 'block';
        } else{
            modal.style.display = 'none';
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
    pyramid.appendChild(subject);
    subject.appendChild(modal);
    // modal.appendChild(modalContent);
    // modal.appendChild(close);
};
search.addEventListener('submit', searchQuote);
function searchQuote(e){
    e.preventDefault();
    let input = document.querySelector('.input');
    let searchValue = input.value;
    console.log(searchValue);
    let quoteUrl = searchUrl + searchValue;
    fetch(quoteUrl)
    .then(res=>{
        return res.json();
    })
    .then(res=>{
        console.log(res[0]);
    })
}