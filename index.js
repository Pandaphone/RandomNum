let randomNum = 0;
function random(){
 randomNum = Math.floor(Math.random() * 10) + 1;
 console.log(randomNum);
}

let randomButton = document.getElementById('butt');
randomButton.addEventListener('click', {random});