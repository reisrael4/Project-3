let pyramid = document.querySelector('.pyramid');
let url = 'http://ron-swanson-quotes.herokuapp.com/v2/quotes';
let searchUrl = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes/search/';
let search = document.querySelector('form');
for (let i=0; i<45; i++){
    let subject = document.createElement('div');
    let modal = document.createElement('div');
    let close = document.createElement('span');
    let modalContent = document.createElement('p');
    modalContent.classList.add('modal-content')
    close.classList.add('close-button');
    modal.classList.add('modal');
    subject.classList.add('pyramid-subject');
    subject.addEventListener('click', respond);
    function respond(e){
        e.preventDefault();
        fetch(url)
            .then(res=>{
                return res.json();
            })
            .then(res=>{
            // console.log('Bully for you!')
            console.log(res[0]);
        })
        // console.log('This is an excellent rectangle!')
    }
    close.innerHTML = "&times;"
    pyramid.appendChild(subject);
    subject.appendChild(modal);
    modal.appendChild(modalContent);
    modal.appendChild(close);
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