# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Links

- Solution URL: [Solution URL here](https://github.com/Memeena/FAQ-accordion-card-main)
- Live Site URL: [Live site URL here](https://memeena.github.io/FAQ-accordion-card-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

I learnt how to position the images using translate properties. Practised flexbox and how to change the flex layout to make the solution responsive. 

Used <picture> tag to use a different source set based on the viewport width

```html
<picture class="illustration-image">
  <source
    media="(max-width:1199px)"
    srcset="images/illustration-woman-online-mobile.svg"
  />
  <source
    media="(min-width:500px)"
    srcset="images/illustration-woman-online-desktop.svg"
  />
  <img
    src="images/illustration-woman-online-desktop.svg"
    alt="illustration image"
    class="illustration-img-class"
  />
</picture>
```

  Learnt how to set the background image position using the below code
  
```css
.illustration-image {
  /*////*/
    background-position-x: -52rem;
    background-position-y: -30rem;
    /*/ ////*/
}
```

To make the arrows turn upside down on clicking,

```css
.arrow-on-click {
  transform: scale(-0.3);
}
```


### Continued development

Shall continue to work on this for animating the arrow buttons.

## Author

- Frontend Mentor - [@meMeena](https://www.frontendmentor.io/profile/meMeena)
- Twitter - [@MeKrish18](https://www.twitter.com/MeKrish18)
