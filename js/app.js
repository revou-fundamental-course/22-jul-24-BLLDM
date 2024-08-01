let slideIndex = 1;
showSlide(1);

function nextSlide(n){
    showSlide(slideIndex += n);
}

function showSlide(n){
    let listImage = document.getElementsByClassName('banner');
    console.log(listImage);

    if(n > listImage.length) {
        slideIndex = 1;
    }
    
    let index = 0;
    while(index < listImage.length){
        listImage[index].style.display = 'none';
        index++;
    }

    listImage[slideIndex - 1].style.display = 'block';
}

setInterval(() => nextSlide(1), 3000)

function formValidation(){
    let name = document.getElementById('input-name').value;
    let email = document.getElementById('input-email').value;
    let carSelection = document.getElementById('cars').value;
    console.log(name);
    console.log(email);
    console.log(carSelection);

    if (name === '') {
        alert('Nama tidak boleh kosong');
    } else if(name !== '') {
        alert('Nama sudah valid');
        }
    if (email === '') {
        alert('Email tidak boleh kosong');
    } else if(email !== '') {
            alert('Email sudah valid');
    }     
    if (carSelection === 'select') {
        alert('Pilih minat anda');
    } else {
        alert('Minat telah dipilih');
    }
}