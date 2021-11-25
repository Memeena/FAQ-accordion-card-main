# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
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

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

I learnt how to position the images using translate properties. Practised flexbox and how to change the flex layout to make the solution responsive. Learnt how to set the background image position using the below ccode

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

```js
const proudOfThisFunc = () => {
  console.log("🎉");
};
```

### Continued development

Shall continue to work on this for animating the arrow buttons.

## Author

- Frontend Mentor - [@meMeena](https://www.frontendmentor.io/profile/meMeena)
- Twitter - [@MeKrish18](https://www.twitter.com/MeKrish18)