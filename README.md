# Spotify (UK) Website Clone 🎶

A recreation of the [Spotify UK](https://www.spotify.com/uk/)'s frontend using HTML, SCSS and JS. This project uses [Parcel](https://parceljs.org/) to compile SCSS to CSS.

> Note: I took some creative liberty to provide a bit more consistency in styles where it was lacking on the original [Spotify UK](https://www.spotify.com/uk/) site.

## Project Aims

This project helped me to:

- **Practice** implementing the frontend of an application **from an existing design**
- Gain a better understanding of [SASS](https://sass-lang.com/)
- Use [Parcel](https://parceljs.org/) to compile SCSS to CSS

## What I Learned

### SASS

I learned a lot about [SASS](https://sass-lang.com/) either through direct implementation or research during this project. The main learning points are:

- SASS allows us to modularise our CSS using partials for an improved development experience and easier maintenance.
- With `dart-sass` we should `@use` instead of `@import` - as `@import` pollutes the global scope and will eventually be phased out.
- Mixins and Placeholders are useful for grouping styles that are commonly used together, however the CSS output is distinctly different.
- Various combinations of Functions, Loops, Maps and Conditionals can be used to easily generate class variants; e.g. for font-sizes, spacing, breakpoints and more.

### HTML Data Attributes

I learned how to control the "state" of HTML elements using HTML data attributes & JS, as well as styling elements by targeting such attributes with CSS Selectors. Specifically, I used data attributes to display the background overlay when the navigation drawer is opened. Originally, I also used a `data-toggle` attribute to toggle the navigation drawer open/closed. However, I later opted to use `aria-expanded` over `data-toggle` for better accessibility practices.

## Bugs That I Fixed

As of March-April 2022, the official [Spotify UK](https://www.spotify.com/uk/)'s frontend has a few bugs/issues, which I resolved in this recreation. The issues resolved are discussed below.

### Mobile Navigation

When navigation drawer is expanded:

<details>
<summary>An additional scrollbar is visible</summary>

- By inspecting the styles with the browser developer tools we can see that this can simply be resolved by removing the `overflow-y: scroll;` style

</details>

<details>
<summary>Site scrolling is still possible</summary>

- The header does not have a fixed position
- This means that when scrolled, anything contained within the header will also scroll
- This includes the navigation toggle used to open/close the navigation drawer
- i.e. when you scroll down, the 'X' button will scroll with the rest of the page
- My solution was to add a `.prevent-scroll` utility class to the `<body>` tag when the navigation drawer is opened, and then remove the class once it is closed
- The `.prevent-scroll` class makes the site un-scrollable by setting `overflow: hidden;`

</details>
<br>

### Support Page - Accordions toggled when not in view

On mobile to laptop screen-widths, the links for different categories of support (provided by Spotify) are grouped into accordions. On desktop and large screens, they're grouped into columns. The container for the heading of the grouped links acts as the accordion toggle.

Whilst in the desktop view on the official site, clicking headings will toggle the related accordion open on smaller screen-widths. In my recreation I resolved this using `window.matchMedia('(max-width: 991px)').matches`; it returns `true` if the media query matches and `false` otherwise. I used this to ensure that accordions are only toggled if they are in-view (i.e. visible to the user).
