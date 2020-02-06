let pyramid = document.querySelector('.pyramid');
let url = 'http://ron-swanson-quotes.herokuapp.com/v2/quotes'
for (let i=0; i<45; i++){
    let subject = document.createElement('div');
    subject.style.height = '100px';
    subject.style.width = '120px';
    subject.style.backgroundColor = 'grey';
    pyramid.style.display = 'flex';
    pyramid.style.flexDirection = 'row';
    pyramid.style.flexWrap = 'wrap';
    pyramid.style.justifyContent = 'space-between';
    pyramid.style.alignContent = 'center';
    subject.style.margin = '20px 15px';
    subject.style.border = '5px solid #7B232E'
    subject.addEventListener('click', respond)
    function respond(){
        console.log('This is an excellent rectangle!')
    }
    pyramid.appendChild(subject);
}
fetch(url).then(res=>{
    console.log('Bully for you!', res)
})