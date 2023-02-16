# Frontend Mentor - Interactive rating component

![Design preview for the Interactive rating component coding challenge](./assets/images/desktop-preview.jpg)

## Welcome! 👋

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Interactive rating component solution](#frontend-mentor---interactive-rating-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
  - [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Links

- Solution URL: [Interactive rating component [Tailwindcss, JS Vanilla]](https://www.frontendmentor.io/solutions/interactive-rating-component-tailwindcss-js-vanilla-NVeqldOTGy)
- Live Site URL: [Frontend Mentor | Interactive rating component](https://interactive-rating-component-jet-nu.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- Tailwindcss
- Mobile-first workflow
- JS Vanilla

### What I learned

I refreshed the Javascript I had and learned a way not to use a form to only use radio-type inputs, plus with Tailwind I discovered that with peer-checked I can use it so I can change the background of a label when it's selected.

```html
<input class="peer/first" type="radio" name="rating" id="first" value="1">
<label class="peer-checked/first:bg-orange peer-checked/first:text-white" for="first">1</label>
```

```js
let submit = document.getElementById('submit')
submit.addEventListener('click', () => {
    let elementActive = document.querySelector('input[name="rating"]:checked')
    if(elementActive) {
      alert(elementActive.value)
    } else {
        alert('Select a number')
    }
})
```

### Continued development

I'd like to learn React, but first I have to keep practicing with Javascript. I will continue with Tailwind for the time being, using some of the features that I have used and some that I will use in other projects and strengthen my knowledge of flexbox, grid, positioning and media queries.

## Author

- Frontend Mentor - [@nextokoi](https://www.frontendmentor.io/profile/nextokoi)
