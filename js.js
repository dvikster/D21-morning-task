// Задание 1.
// При клике на любом элементе на странице выводится класс этого элемента.
// Если класс отсутствует - то выводится имя тега.

document.addEventListener('click', getClassName);
var out = '';
function getClassName(event) {
    console.log(event);
    if (event.target.className != ''){
        // console.log(event.toElement.className);
        out =  'Элемент с классом - '+ event.target.className;
    }
    else{
        // console.log(event.target.localName);
        out =  'тег - '+ event.target.localName;
    }
    document.getElementById('out').innerHTML = out;
}

// Задание 2
// При заходе на страницу, спустя 5 секунд выскакивает всплывающее окно с checkbox.
// Если пользователь отметил checkbox то окно больше не показывается ни на одной странице сайта.
// Если окно просто закрылось - то при следующем обновлении - открывается снова.

var poPupDiv = document.getElementById('popup');
var checkbox = document.getElementById('checkbox-popup');
var localStorageChecked = localStorage.getItem('checkbox');

document.getElementById('checkbox-popup').onchange = function() {
    if (this.checked ){localStorage.setItem('checkbox', 'checked');}
    else{localStorage.setItem('checkbox', 'checked-no');}
};

document.getElementById('close_popup').onclick = function () {
    poPupDiv.style.display = 'none';
};

function poPup() {
    if (localStorageChecked == 'checked-no' || localStorageChecked == undefined){
        checkbox.checked = false;
        poPupDiv.style.display = 'block';
        console.log('true');
    }
    else if (localStorageChecked == 'checked' ){
        console.log('false');
        poPupDiv.style.display = 'none';
    }
}
window.onload = setTimeout(poPup,1000);











