// Example: CSS DOM Manipulation using Different Selectors

// Select by tag name: Change the style of all <p> elements
const paragraphs = document.getElementsByTagName('p');
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].classList.add('highlight');
}

// Select by class name: Change the style of all elements with the class "list-item"
const listItems = document.getElementsByClassName('list-item');
for (let i = 0; i < listItems.length; i++) {
  listItems[i].classList.add('highlight');
}

// Select by query selector: Change the style of the first <h1> element with class "title"
const title = document.querySelector('h1.title');
title.classList.add('highlight');

// Select by query selector all: Change the style of all <h2> elements with class "title"
const titles = document.querySelectorAll('h2.title');
titles.forEach((title) => {
  title.classList.add('highlight');
});

// Select by ID: Change the style of the element with the ID "container"
const container = document.getElementById('container');
container.classList.add('highlight');
