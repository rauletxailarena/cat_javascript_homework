var app = function() {

  addNewCat("Garfield", "Lasagna", "http://garfieldgo.com/images/GarfieldCurious.png");

}

var addNewCat = function(newName, newFavouriteFood, newPictureSource) {

  var newCat = document.createElement('ul');
  newCat.classList.add('cat');
  var catName = createCatName(newName);
  var favouriteFood = createCatFavouriteFood(newFavouriteFood);
  var catPictureList =  createCatPicture(newPictureSource);

  newCat.appendChild(catName);
  newCat.appendChild(favouriteFood);
  newCat.appendChild(catPictureList);

  var cats = document.querySelector('#cats');
  cats.appendChild(newCat)
}

var createCatName = function(name){
  var catName = document.createElement('li');
  catName.textContent = name;
  return catName;
}

var createCatFavouriteFood = function(favouriteFood){
  var catFavouriteFood = document.createElement('li');
  catFavouriteFood.textContent = favouriteFood;
  return catFavouriteFood;
}

var createCatPicture = function(pictureSource){
  var catPictureList = document.createElement('li');
  var catPicture = document.createElement('img');

  catPicture.width = '500';
  catPicture.src = pictureSource;

  catPictureList.appendChild(catPicture);
  return catPictureList
}

window.addEventListener('DOMContentLoaded', app)
