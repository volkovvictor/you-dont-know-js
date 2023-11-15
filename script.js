'use strict';

const books = document.querySelectorAll('.book');
const adv = document.querySelector('.adv');

const editDoc = function() {
   document.body.style.backgroundImage = 'url("image/you-dont-know-js.jpg")';
   adv.remove();

   const changeOrder = function() {

      const changeOrderBook = function() {
         books[0].before(books[1]);
         books[5].after(books[2]);
         books[3].before(books[4]);
      };
   
      const changeOrderChapter = function() {
         const chapterBook2 = books[0].querySelectorAll('li');
         const chapterBook5 = books[5].querySelectorAll('li');
         const chapterBook6 = books[2].querySelectorAll('li');
         const titleBook3 = books[4].querySelector('h2 > a');
   
         chapterBook2[10].before(chapterBook2[2]);
         chapterBook2[3].after(chapterBook2[6], chapterBook2[8]);
   
         chapterBook5[10].before(chapterBook5[5], chapterBook5[8]);
         chapterBook5[3].before(chapterBook5[9]);
         chapterBook5[6].before(chapterBook5[2]);
   
         titleBook3.textContent = titleBook3.textContent.replace("Пропопипы", "Прототипы");
         chapterBook6[8].insertAdjacentHTML('afterend','<li>Глава 8: За пределами ES6</li>');
      };
   
      changeOrderBook();
      changeOrderChapter();
   };

   changeOrder();
};

editDoc();