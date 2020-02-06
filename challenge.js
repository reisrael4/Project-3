let pyramid = document.querySelector('.pyramid');
for (let i=0; i<45; i++){
    let subject = document.createElement('div');
    subject.style.height = '20px';
    subject.style.width = '30px';
    subject.style.backgroundColor = 'grey';
    pyramid.style.display = 'flex';
    pyramid.style.flexDirection = 'row';
    pyramid.style.flexWrap = 'wrap';
    pyramid.style.justifyContent = 'space-evenly';
    pyramid.appendChild(subject);
}