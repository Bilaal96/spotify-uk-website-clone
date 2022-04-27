# Spotify (UK) Website Clone 🎶

![Netlify Status](https://api.netlify.com/api/v1/badges/bd2e336a-14d1-4fc7-8e25-7440fa4188aa/deploy-status)

A recreation of the [Spotify UK](https://www.spotify.com/uk/)'s frontend using HTML, SCSS and JS. This project uses [Parcel](https://parceljs.org/) to compile SCSS to CSS. View the live demo [here](https://spotify-uk.netlify.app/index.html).

> <strong>Note:</strong> The implemented design was last live around March 2022.

> <strong>Note:</strong> I took some creative liberty to provide a bit more consistency in styles where it was lacking on the original [Spotify UK](https://www.spotify.com/uk/) site.

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

- I learned how to control the "state" of HTML elements using HTML data attributes & JS, as well as styling elements by targeting such attributes with CSS Selectors.
- Specifically, I used a `data-visible` attribute to display the background overlay when the navigation drawer is opened.
- Originally, I also used a `data-toggle` attribute to toggle the navigation drawer open/closed. However, I later opted to use `aria-expanded` over `data-toggle` for better accessibility practices.

## Issues Faced & Solved

### Mobile Navigation

When navigation drawer is expanded:

<details>
<summary>An additional scrollbar is visible</summary>

> <strong>Note:</strong> this bug is present on the official [Spotify UK](https://www.spotify.com/uk/) site (around March 2022).

<strong>Problem</strong>

- On vertically small viewports, the contents overflow the navigation drawer
- The additional scrollbar is present to make overflowing content scrollable
- By inspecting the styles of the official site with the browser developer tools, we can see that it specifies the style: `overflow-y: scroll;` which permanently displays a scrollbar, regardless of whether the content is scrollable or not

<strong>Solution</strong>

- We can replace this with `overflow-y: auto;` which ensures that the scrollbar is only present when the content exceeds the container

</details>
<!-- / An additional scrollbar is visible -->

<details>
<summary>Site scrolling is still possible</summary>

> <strong>Note:</strong> this bug is present on the official [Spotify UK](https://www.spotify.com/uk/) site (around March 2022).

<strong>Problem</strong>

- The header does not have a fixed position, and as a result the header (and its contents) will scroll with the rest of the page, including `.nav-toggle`
  - i.e. the 'X' button used to close the navigation drawer when it is open

<strong>Solution</strong>

- My solution was to add a `.prevent-scroll` utility class to the `<body>` tag when the navigation drawer is opened, and then remove the class once it is closed
- The `.prevent-scroll` class makes the site un-scrollable by setting `overflow: hidden;` on the targetted element

</details>
<!-- / Site scrolling is still possible -->

### Home Page

<details>
<summary>Container height set with `vh` units causing children to overflow</summary>

<strong>Problem</strong>

- When implementing the call-to-action (CTA) on the home page, I used `vh` units to make the CTA take up the entire viewport
- When resized vertically, this caused issues where the contents of the CTA would overflow the container and cover the top header (or navbar)

<strong>Solution</strong>

- To resolve this issue I used min-height (with `px` values) at different breakpoints to resize the CTA container, thus mitigating the issue

</details>
<!-- / Container height set with `vh` units causing children to overflow -->

### Support Page

<details>
<summary>Accordions toggled when not in view</summary>

> <strong>Note:</strong> this bug is present on the official [Spotify UK](https://www.spotify.com/uk/) site (around March 2022).

<strong>Context</strong>

- On mobile to laptop screen-widths, the links for different categories of support (provided by Spotify) are grouped into accordions.
- On desktop and large screens, they're grouped into columns.
- The container for the heading of the grouped links acts as the accordion toggle.

<strong>Problem</strong>

- Whilst in the desktop view on the official site, clicking headings will toggle the related accordion open on smaller screen-widths.

<strong>Solution</strong>

- In my recreation I resolved this using `window.matchMedia('(max-width: 991px)').matches`; it returns `true` if the media query matches and `false` otherwise.
- I used this to ensure that accordions are only toggled if they are in-view (i.e. visible to the user).

</details>
<!-- / Accordions toggled when not in view -->
