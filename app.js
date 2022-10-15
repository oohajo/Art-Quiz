const images = document.getElementsByTagName('img');
const answerP = document.getElementById("odp");

const answerTable = [];
for (let i = 0; i < images.length; i++) {
    images[i].onclick = showImage;
    answerTable.push(images[i].alt);
};
console.log(answerTable);

function reblur(image) {
    let name = image.id;
    name = `img/${name}bl.png`;
    image.src = name;
    answerP.innerText = '...';
}

function showImage(eventObj) {
    let image = eventObj.target;
    let name = image.id;
    name = `img/${name}.png`;
    image.src = name;
    answerP.innerText = image.alt;

    setTimeout(reblur, 2000, image);
}

