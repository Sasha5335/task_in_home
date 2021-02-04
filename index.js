'use strict';

function loadImage(src) {
   const img = document.createElement('img');
   img.setAttribute('src', src);

   return new Promise((resolve, reject) => {
      img.addEventListener('load', () => {
         resolve(img);
      });

      img.addEventListener('error', () => {
         reject(new Error('Not img'));
      });
   })
}

loadImage('https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg')
   .then((img) => {
      document.body.append(img);
   })
   .catch((error) => {
      console.log('error');
   })