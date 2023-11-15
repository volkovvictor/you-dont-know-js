'use strict';

const books = document.querySelectorAll('.book');

const changeOrder = function() {
   books[0].before(books[1]);
   books[5].after(books[2]);
   books[3].before(books[4]);
}


changeOrder();