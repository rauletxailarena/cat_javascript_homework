var app = function() {

var newCat = document.createElement('ul');
newCat.classList.add('cat');

var catName = document.createElement('li');
catName.textContent = 'Lopez';

var catDescription = document.createElement('li');
catDescription.textContent = 'Stupid cat'

var catPictureList = document.createElement('li');
var catPicture = document.createElement('img');

catPicture.width = '500'
catPicture.src = "http://cdn.smosh.com/sites/default/files/legacy.images/smosh-pit/122010/ugly-cat-17.jpg"
catPictureList.appendChild(catPicture)

newCat.appendChild(catName);
newCat.appendChild(catDescription);
newCat.appendChild(catPictureList);

var cats = document.querySelector('#cats');
cats.appendChild(newCat)

}

window.addEventListener('DOMContentLoaded', app)
