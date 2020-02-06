let pyramid = document.querySelector('.pyramid');
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
    subject.addEventListener('click', respond)
    function respond(){
        console.log('This is an excellent rectangle!')
    }
    pyramid.appendChild(subject);
}