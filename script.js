'use strict';

const books = document.querySelectorAll('.book');
const adv = document.querySelector('.adv');

const editDoc = function() {
   document.body.style.backgroundImage = 'url("image/you-dont-know-js.jpg")';
   adv.remove();
}

const changeOrder = function() {
   books[0].before(books[1]);
   books[5].after(books[2]);
   books[3].before(books[4]);
};
editDoc();
changeOrder();