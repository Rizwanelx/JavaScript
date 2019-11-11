const para = document.querySelector('p');

console.log(para.innerText);
// Adding new text
para.innerText += ' ninjas are awesome';
//  Replacing new text
para.innerText = 'ninjas are awesome';

//Selecting all p element

// const paras = document.querySelectorAll('p');
// //Sohwing all p element by forEacH Method 
paras.forEach(p => {
    console.log(p.innerText);
});

const content = document.querySelector('.content');
// Reading html element 
console.log(content.innerHTML);
// Replacing new html element on the place of older element 
content.innerHTML += '<h2>this is a new h2</h2>';
// Adding new content in the place of older element 

content.innerHTML += '<h2>this is an h2 added to the content</h2>';

const people = ['mario', 'luigi', 'yoshi'];
// Showing content  of array  element 

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});
const result = document.querySelector('.result')
const scores = ['A', 'B', 'C'];

scores.forEach(score => {
    result.innerHTML += ` <p>Score :  ${score} </p>`
})