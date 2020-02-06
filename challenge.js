let pyramid = document.querySelector('.pyramid');
let url = 'http://ron-swanson-quotes.herokuapp.com/v2/quotes';
let searchUrl = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes/search/';
let search = document.querySelector('form');
for (let i=0; i<45; i++){
    let subject = document.createElement('div');
    let modal = document.createElement('div');
    let close = document.createElement('span');
    close.innerHTML = "&times;";
    let modalContent = document.createElement('p');
    modalContent.classList.add('modal-content')
    close.classList.add('close-button');
    modal.classList.add('modal');
    subject.classList.add('pyramid-subject');
    subject.addEventListener('click', respond);
    close.addEventListener('click', closeModal)
    function respond(e){
        e.preventDefault();
        modal.style.display = 'block';
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
        modal.style.display = 'none';
    }
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