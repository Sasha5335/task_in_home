'use strict';

const array = [];
const form = document.getElementById('root-form');
const btnSubmit = document.getElementById('btn-submit');
const btnReset = document.getElementById('btn-reset');
const btnDelete = document.getElementById('btn-del');

form.addEventListener('submit', pushForm);
btnSubmit.addEventListener('click', renderForm);
btnReset.addEventListener('click', resetForm);
btnDelete.addEventListener('click', deleteForm);

function pushForm(e) {
   e.preventDefault();
   const { target: { input: { value } } } = e;
   array.push(String(value.trim()));
}


function resetForm() {
   form.reset();
}

function renderForm() {
   const theLi = document.createElement('li');
   array.map((item) => {
      theLi.textContent = item;
      this.parentNode.appendChild(theLi);
   });
}

function deleteForm() {
   const liElem = document.querySelectorAll('li');

   liElem.forEach((element, i) => {
      if (form.parentNode) {
         i.parentNode.removeChild(element);
      }
   });
   array.pop();
}
