/*CSS Style for Restaurant Landing Page "index.html"*/

/******************************************************************************
	Table of Contents
	-----------------
	1. Global Styles
		1.1 -- :root (pseudo-class)
        1.2 -- :is(*, ::before, ::after)
        1.3 -- body
        1.4 -- img
        1.5 -- input, select
        1.6 -- button
        1.7 -- main

	2. main__header
        2.1 -- header-section
        2.2 -- header-side-section
        2.3 -- header-logo
        2.4 -- header-phone
        2.5 -- header-reservation

	3. main__nav
        3.1 -- main__nav
            3.1.1 -- .main__nav::before
            3.1.2 -- .main__nav:hover::before
        3.2 -- hamburger
        3.3 -- header-menu
        3.4 -- menu-open
            3.4.1 -- .menu-open li 
        3.5 -- .header-menu__items
            3.5.1 -- .header-menu__items a
        3.6.1 -- .sub-menu > a:first-child::after
            3.6.2 -- .sub-menu:hover > a:first-child::after
            3.6.3 -- .sub-menu:hover .sub-menu__extend
        3.7.1 -- .sub-menu__extend
            3.7.2 -- .sub-menu__extend li
            3.7.3 -- .sub-menu__extend li:nth-child(2)
            3.7.4 -- .sub-menu__extend li:nth-child(3)
            3.7.5 -- .sub-menu__extend li:nth-child(4)
        3.8 -- li:hover .sub-menu__extend, li:focus .sub-menu__extend, .sub-menu-open 
        
	4. main__content

        4.1 -- main__content
        4.2 -- .slider-image
        4.3 -- .main__welcome-section
            4.3.1 -- .main__welcome-section > *
        4.4 -- .welcome-article
            4.4.1 -- .welcome-article *
        4.5 -- .welcome-title
            4.5.1 -- .welcome-text
        4.6 -- .main__reservation-section
            4.6.1 -- .main__reservation-section *
        4.7 -- .reservation-form
        4.8 -- Classes represent grid-areas within reservation-form

    5. main__footer
        5.1 -- 

    6. Utility Classes
        6.1 -- .spread-cols
        6.2 -- .reduce-input-width

    7. Animation
        7.1 -- @keyframes rollDown 

*******************************************************************************/

/******************************************************************************
1. Global Styles
******************************************************************************/

/* 1.1  Declares custom variables for the html document*/
:root {
     /* General property declarations */
     box-sizing: border-box;
     scroll-behavior: smooth;
     /* note: both Google only fonts have 400 and 700 options */
     --font-1: "Tangerine", cursive;
     --font-2: "Philosopher", sans-serif;
     /* Custom colours */
     --black-0: hsl(0, 0%, 0%);
     --black-3: hsl(0, 0%, 3%);
     --black-3-op: rgba(0, 0, 3, 0.5);
     --grey-19: hsl(0, 0%, 19%);
     --grey-19-op: rgba(48, 48, 48, 0.7);
     --grey-43: hsl(0, 0%, 33%);
     --grey-43-op: rgba(84, 84, 84, 0.7);
     --white-100: hsl(0, 0%, 100%);
     --white-100-op: rgba(255, 255, 255, 0.5);
     --white-90: hsl(0, 0%, 90%);
     /* Custom sizing */
     --half-em: 0.5em;
     --quarter-em: 0.25em;
}

/* 1.2 Rules the universal selector and basic pseudo classes to defined global styles*/
:is(*, ::before, ::after) {
     box-sizing: inherit;
     color: var(--white-100);
     font-family: var(--font-1);
     margin: 0;
     padding: 0;
}

/* 1.3 Sets some default values for the body tag */
body {
     background-color: var(--grey-43);
     margin-top: 0;
     letter-spacing: 0.02em;
}

/* 1.4 Sets a max width for all images */
img {
     max-width: 100%;
}

/* 1.5 sets some default colors for text with user input */
input,
select,
input::placeholder {
     color: var(--black-3);
     padding: var(--half-em) 0em;
     opacity: 1;
}

/* 1.6 defaults for buttons on the page */
button {
     background-color: var(--grey-19);
     border: solid 2px var(--white-100);
     color: var(--white-100);
     font-family: var(--font-2);
     font-size: 1rem;
     cursor: pointer;
     padding: 0.75em 1em;
}

/* 1.7 Apply a default global style to all html <h2> tags to use this font*/
h2 {
     font-family: var(--font-2);
     font-size: 2rem;
}
@media (min-width: 40em) {
     h2 {
          font-size: 2.5rem;
     }
}
@media (min-width: 75em) {
     h2 {
          font-size: 4rem;
     }
}

/* 1.7 The largest div will need to be sticky positioned in order for the main__nav section to work on mobile viewports, and the back-top-top element needs to be fixed, too. Both must have this selector be relative. */
.main {
     position: relative;
}

/******************************************************************************
2. main__header
******************************************************************************/

/* 2.1 */
.header-section {
     background-color: var(--grey-19);
     display: flex;
     justify-content: space-around;
     padding: 1em 2em 0 2em;
     position: relative;
     text-align: center;
     z-index: 200; /* needs to sit in front of the main__nav to hide the top part of its box-shadow */
}

/* 2.2 */
.header-side-section {
     display: flex;
     flex-direction: column;
     justify-content: space-around;
     margin-left: 2em;
}
@media (min-width: 40em) {
     .header-side-section * {
          font-size: 1.25rem;
     }
}

/* 2.3 */
.header-logo {
     /* https://looka.com/editor/75934574 for more colours of grey need be*/
}

/* 2.4 add some minor letter spacing for readability */
.header-phone {
     font-family: var(--font-2);
     letter-spacing: 0.1em;
}

/* 2.5 */
.header-reservation {
}

/* media query for desktop */
/* .header-reservation:hover {
   box-shadow: 0em 0em 1em 0.3em var(--grey-43);
} */

/******************************************************************************
3. main__nav
******************************************************************************/

/* 3.1 This section stays sticky for mobile viewports for easier UI */
.main__nav {
     background-color: var(--grey-19);
     box-shadow: 0em var(--quarter-em) 0.5em black;
     /* margin-top: -1em; */
     position: sticky;
     position: -webkit-sticky;
     top: 0;
     z-index: 100; /*Force this element to always be interactive over any other elements of the page, especially for reservation-form, iframe map, etc. Javascript will close the back-to-top and man nav menus, so no need to succeed those z-index numbers with this selector.*/
}

/* 3.1.1 hovering effect for desktop (style for black bar fixme:!!!) */
/* .main__nav::before {
   background-color: var(--white-100);
   bottom: 0;
   box-shadow: 0 0px 10px var(--white-100);
   content: "";
   height: 2px;
   left: 0;
   position: absolute;
   right: 0;
   transform: scaleX(0);
   transition: transform 300ms ease-in-out;
} */

/* 3.1.2 */
/* .main__nav:hover::before {
   transform: scaleX(1);
} */

/* 3.2 Needs position relative to be brought up into the header when the page initially loads */
.hamburger {
     background-color: transparent;
     border: none;
     cursor: pointer;
     display: block;
     font-size: 2.5em;
     margin: 0 auto;
     padding: 0 var(--half-em);
     position: relative;
}

/* 3.3 Hides the main nav items by default */
.header-menu {
     display: none;
}

/* 3.4 JavaScript toggles this class to display the main__nav section */
.menu-open {
     display: block;
}

/* 3.4.1  */
.menu-open li {
     list-style: none;
     padding-top: var(--half-em);
}

/* 3.5 */
.header-menu__items {
     display: flex;
     justify-content: space-around;
}

.swoop-in-animation {
     animation: swoopIn 1s cubic-bezier(0.68, -0.55, 0, 1.32); /*custom bezier function gives a "bounce" effect at the end of the animation*/
}

.swoop-out-animation {
     animation: swoopOut 1s cubic-bezier(0.68, -0.55, 0, 1.32);
}

/* 3.5.1 */
.header-menu__items a {
     text-decoration: none;
     font-size: 1.75rem;
}
@media (min-width: 40em) {
     .header-menu__items a {
          font-size: 2.5rem;
     }
}

.header-menu__items > li {
     font-size: 2rem;
     padding: var(--quarter-em) 0;
     text-shadow: 1px 1px 1px var(--black-3);
}

/* 3.6.3 Desktop hover on certain nav elements displays their sub-menu items*/
.sub-menu:hover .sub-menu__extend {
     display: flex;
     flex-direction: column;
}

/* 3.7.1 Default hidden until the parent li is hovered or clicked */
.sub-menu__extend {
     display: none;
}

.sub-menu__contact {
     /* padding-right: 2em; */
}

/* 3.7.2 */
.sub-menu__extend li {
     animation: rollDown 0.1s linear backwards;
}

/* 3.7.3 */
.sub-menu__extend li:nth-child(2) {
     animation-delay: 0.2s;
}

/* 3.7.4 */
.sub-menu__extend li:nth-child(3) {
     animation-delay: 0.3s;
}

/* 3.7.5 */
.sub-menu__extend li:nth-child(4) {
     animation-delay: 0.4s;
}

.sub-menu__extend li:nth-child(5) {
     animation-delay: 0.5s;
}

/* 3.8 Desktop media query as well as toggling class in JavaScript*/
li:hover .sub-menu__extend,
li:focus .sub-menu__extend,
.sub-menu-open {
     display: flex;
     flex-direction: column;
}

/******************************************************************************
4. main__content
******************************************************************************/

/* 4.1 */
.main__content {
     /* padding: 0 2em; */
}

/* 4.2 Hide all slideshow images by default */
.slider-image {
     background-size: contain;
     display: none;
     /* Force the images to have the same height for a more seamless slideshow */
     min-height: 20em;
     min-width: 100%;
}

/* ||| */

.bottom-section__map,
.footer-section,
.main__hours-section,
.main__reservation-section,
.main__private-dining-section {
     padding: 8em 2em;
}
@media (min-width: 40em) {
     .main__menu-section {
          padding: 4em 0;
     }
}
@media (min-width: 75em) {
     .main__menu-section {
          padding: 4em 18em;
     }
}

/* 4.4.1 */
.welcome-text {
     text-shadow: 1px 1px 1px var(--black-3);
     margin-top: var(--half-em);
     padding: 0 2em;
}

[class*="-text"] {
     font-weight: 700;
     font-size: 1.75rem;
     letter-spacing: 0.02em;
     line-height: 1.25;
}
@media (min-width: 40em) {
     [class*="-text"] {
          font-size: 2.5rem;
     }
}
@media (min-width: 75em) {
     [class*="-text"] {
          font-size: 3rem;
     }
}
/* 4.6 */
.main__reservation-section {
     background-image: url(../img/mobile/banquet-mobile.jpg);
     background-size: cover;
     background-position: center;
}
@media (min-width: 40em) {
     .main__reservation-section {
          background-image: url(../img/tablet/banquet-tablet.jpg);
     }
}
@media (min-width: 75em) {
     .main__reservation-section {
          background-image: url(../img/desktop/banquet.jpg);
          padding: 18em;
     }
}

/* 4.6.1 */
.main__reservation-section *,
.private-dining-modal-form * {
     font-family: var(--font-2);
}

/* 4.7 */
.reservation-form {
     background-color: var(--grey-19);
     box-shadow: var(--half-em) var(--half-em) var(--half-em) var(--black-3);
     opacity: 0.7;
     padding: 1em;
}

.inner-reservation-form {
     display: grid;
     gap: 1em;
     grid-template-areas:
          "reservation-title"
          "reservation-guests-input"
          "reservation-date-input"
          "reservation-time-input"
          "reservation-name-input"
          "reservation-phone-input"
          "reservation-button"
          "reservation-text";
     padding: 1em 2em 0 2em;
}
@media (min-width: 40em) {
     .inner-reservation-form {
          gap: 1.5em;
     }
     .inner-reservation-form input,
     .inner-reservation-form select {
          padding: 1em 0;
     }
}
@media (min-width: 75em) {
     .inner-reservation-form input,
     .inner-reservation-form select {
          padding: 1em 0;
          font-size: 1.25rem;
     }
}

/* Start 4.8 -- All the below selectors represent a specific grid item of the reservation-form element*/
.reservation-title {
     grid-area: reservation-title;
     text-align: center;
}

#reservation-guests {
     grid-area: reservation-guests-input;
}

#reservation-date {
     grid-area: reservation-date-input;
     min-width: 100%; /*force this to be the width of the form, as its causing issues on non-firefox  mobile browsers*/
}

#reservation-time {
     background-color: var(--white-100);
     grid-area: reservation-time-input;
}

.reservation-name-input {
     grid-area: reservation-name-input;
}

.reservation-phone-input {
     grid-area: reservation-phone-input;
}

.reservation-text {
     font-size: 0.8rem;
     grid-area: reservation-text;
     text-align: center;
}
@media (min-width: 40em) {
     .reservation-text {
          font-size: 1.1rem;
     }
}
@media (min-width: 75em) {
     .reservation-text {
          font-size: 1.3rem;
     }
}

.reservation-button {
     background-color: var(--white-100);
     color: var(--black-3);
     font-size: 1rem;
     grid-area: reservation-button;
     margin: 0 1em;
     width: 50%;
     justify-self: center;
}
@media (min-width: 40em) {
     .reservation-button {
          font-size: 1.25rem;
     }
}

/* End 4.8 */

/* 4.9 */
.menu-grid {
     display: grid;
     gap: 1em;
     grid-template-areas:
          "image-1"
          "image-2"
          "image-3"
          "image-4"
          "image-5";
     margin-bottom: 1.5em;
     padding: 2em 1em;
}

.menu-article {
     font-size: 1.5rem;
     padding: 1em 1em 0 1em;
}

.menu-title {
     padding-bottom: 1em;
}

.menu-title,
.menu-text {
     text-shadow: 1px 1px 1px var(--black-3);
}

/* todo: for mobile, these images should be an obvious link to the corresponding menu! */

.menu-grid > a {
     position: relative;
}
@media (min-width: 40em) {
     .menu-grid:nth-child(1) {
          background-image: url(../img/tablet/brunch-tablet.jpg);
     }
}
@media (min-width: 75em) {
     .menu-grid:nth-child(1) {
          background-image: url(../img/desktop/brunch.jpg);
     }
}

.menu-grid > a::after {
     bottom: 0;
     color: var(--black-3);
     font-family: var(--font-2);
     font-size: 1.75rem;
     left: 0;
     padding: var(--half-em) 1em;
     position: absolute;
}
@media (min-width: 40em) {
     .menu-grid > a::after {
          font-size: 3rem;
     }
}

.menu-grid a:nth-child(2n)::after {
     color: var(--white-100);
}

.image-1 {
     grid-area: image-1;
}

.image-1::after {
     content: "Brunch";
}

.image-2 {
     grid-area: image-2;
}

.image-2::after {
     content: "Drinks";
}

.image-3 {
     grid-area: image-3;
}

.image-3::after {
     content: "Dinner";
}

.image-4 {
     grid-area: image-4;
}

.image-4::after {
     content: "Takeout";
}

.image-5 {
     grid-area: image-5;
}

.image-5::after {
     content: "Dessert";
}

/* Force all images of the menu-grid to be the height of their grid-row, but also make their images cover as not to be stretched*/
.menu-grid img {
     object-fit: cover;
     min-height: 100%;
}

/* easily select multiple grid items for media query */
/* [class*="image-"] {
   opacity: 0.5;
}

[class*="image-"]:hover {
   opacity: 1;
} */

/* 
[class*="image-"]::after {
   content: "";
   height: 8px;
   width: 8px;
   display: block;
   background-color: red;
} */

/* ||| */
.main__private-dining-section {
     background-image: url(../img/mobile/dining-mobile.jpg);
     background-size: cover;
     background-position: center;
}
@media (min-width: 40em) {
     .main__private-dining-section {
          background-image: url(../img/tablet/dining-tablet.jpg);
     }
}
@media (min-width: 75em) {
     .main__private-dining-section {
          background-image: url(../img/desktop/dining.jpg);
          padding: 18em;
     }
}

.private-dining-article {
     background-color: var(--grey-19);
     box-shadow: var(--half-em) var(--half-em) var(--half-em) var(--black-3);
     opacity: 0.7;
     padding: 1em;
}

.private-dining-title,
.private-dining-text {
     padding-bottom: 1em;
     text-shadow: 1px 1px 1px var(--black-3);
}

@media (min-width: 40em) {
     .private-dining-button {
          font-size: 1.25rem;
     }
}

/* ||| */
.main__hours-section {
     background-image: url(../img/mobile/clock-mobile.jpg);
     background-size: cover;
     background-position: center;
}
@media (min-width: 40em) {
     .main__hours-section {
          background-image: url(../img/tablet/clock-tablet.jpg);
     }
}
@media (min-width: 75em) {
     .main__hours-section {
          background-image: url(../img/desktop/clock.jpg);
          padding: 8em 4em;
     }
}

.main__hours-section * {
     color: var(--black-3);
}

.hours-aside {
     font-size: 1.5rem;
}

.hours-title {
     padding-bottom: 1em;
}

.hours-grid {
     display: grid;
     gap: var(--quarter-em);
     grid-template-columns: 2fr 3fr;
}

.main__bottom-section {
     display: flex;
     flex-direction: column;
}

.bottom-section__map {
     background-image: url(../img/mobile/open-mobile.jpg);
     background-size: cover;
     background-position: 40%;
     overflow: hidden;
     padding: 4em 2em;
}
@media (min-width: 40em) {
     .bottom-section__map {
          background-image: url(../img/tablet/open-tablet.jpg);
     }
}
@media (min-width: 75em) {
     .bottom-section__map {
          background-image: url(../img/desktop/open.jpg);
     }
}

.iframe {
     border: none;
     overflow: auto;
     padding: 1em 0 0 0;
}
@media (min-width: 75em) {
     .iframe {
          padding: 18em 18em 18em 18em;
          margin-top: -12em;
     }
}

.map-title {
     text-align: center;
}

/******************************************************************************
5. main__footer
******************************************************************************/

.main__footer {
     background-color: var(--black-0);
}

.main__footer * {
     font-family: var(--font-2);
}

.footer-section {
     align-items: center;
     display: flex;
     flex-direction: column;
     justify-content: space-around;
     padding: 4em 2em; /*half of the other elements' padding*/
}

.footer-section > * {
     margin-top: 1em;
}

.footer,
.social-media {
     list-style: none;
     display: flex;
}

.footer {
     align-items: center;
     flex-direction: column;
}

.footer li {
     padding-top: var(--quarter-em);
}

.social-media {
     display: flex;
     padding: 2em 0;
}

.social-media li {
     font-size: 2rem;
     padding: 0 1em;
}

.main__footer span {
     font-size: 0.6rem;
     background-color: var(--grey-43);
     display: block;
     padding-left: 2em;
}

/******************************************************************************
6. Utility Classes
******************************************************************************/

/* Utility class consistent from Bootstrap framework that hides content, while keeping it within screen-reader accessability. This is mainly to apply to text labels. */
.sr-only {
     position: absolute;
     width: 1px;
     height: 1px;
     padding: 0;
     margin: -1px;
     overflow: hidden;
     clip: rect(0, 0, 0, 0);
     white-space: nowrap;
     border: 0;
}

.back-to-top {
     background-color: var(--black-3);
     bottom: 1em;
     box-shadow: 0px 0px 1px 2px var(--white-100-op);
     padding: var(--half-em);
     position: fixed;
     right: 1em;
     z-index: 1; /*Needs to be in front of all default elements*/
}
@media (min-width: 40em) {
     .back-to-top {
          padding: 1em;
     }
}

.back-to-top i {
     font-size: 1.5em;
}

.hide {
     display: none;
}

/******************************************************************************
7. Animation
******************************************************************************/

/* The header-menu__items element will use this animation to "drop" onto the page with style*/
@keyframes swoopIn {
     0% {
          transform: translateX(-35em);
     }

     100% {
          transform: translateX(0);
     }
}
@media (min-width: 40em) {
     @keyframes swoopIn {
          0% {
               transform: translateX(-55em);
          }

          100% {
               transform: translateX(0);
          }
     }
}
@media (min-width: 75em) {
     @keyframes swoopIn {
          0% {
               transform: translateX(-80em);
          }

          100% {
               transform: translateX(0);
          }
     }
}

@keyframes swoopOut {
     0% {
          transform: translateX(0);
     }

     100% {
          transform: translateX(35em);
     }
}

/* 7.1 elements will be "hidden" by the 90deg start position but will become fully visible after the animation is done*/
@keyframes rollDown {
     0% {
          transform: rotateX(90deg);
     }
     100% {
          transform: rotateX(0deg);
     }
}

.inner-welcome-section {
     position: relative;
     background-color: var(--black-0);
}

.welcome-article {
     position: absolute;
     z-index: 1; /*This needs to be in front of any img element siblings within its parent container*/
     background-color: var(--black-3-op);
     min-height: 100%;
     width: 100%;
     display: grid;
     align-items: center;
}

.inner-welcome-article {
     text-align: center;
}
@media (min-width: 75em) {
     .inner-welcome-article {
          padding: 0 18em;
     }
}

.inner-welcome-section > img {
     animation: fadeAway 9s ease-in;
}

@keyframes fadeAway {
     0% {
          opacity: 0.1;
     }

     20% {
          opacity: 1;
     }

     80% {
          opacity: 1;
     }
     100% {
          opacity: 0.1;
     }
}

/* Modal container for private dining */
.private-dining-modal-container {
     background-color: var(--black-3-op);
     bottom: 0;
     left: 0;
     place-items: center;
     position: fixed;
     right: 0;
     top: 0;
     z-index: 200; /*Must be in front of the main__nav menu when this modal is open*/
}

.private-dining-modal-section {
     background-color: var(--white-90);
     height: 80%;
     overflow: auto; /*need scroll bars for the information at the bottom*/
     width: 80%;
     position: relative;
}

.private-dining-modal-container * {
     color: var(--black-3);
}

.close-private-dining {
     background-color: transparent;
     border: none;
     display: block;
     position: fixed;
}

.close-private-dining i {
     font-size: 2em;
}

.private-dining-modal-article {
     display: flex;
     flex-direction: column;
     text-align: center;
     padding: 2em 1em;
}

.private-dining-modal-title {
     padding-top: 1em;
     text-align: center;
}

.private-dining-modal-text {
     font-size: 1.75rem;
     font-weight: 700;
     padding: 1em 1em 0 1em;
}

.private-dining-modal-form {
     display: grid;
     gap: 1em;
     grid-template-areas:
          "private-dining-name-input"
          "private-dining-phone-input"
          "private-dining-email-input"
          "private-dining-message-input";
     padding: 2em;
}

.private-dining-modal-button {
     color: var(--white-100);
     padding: 1em 0;
}

#private-dining-name {
     grid-area: private-dining-name-input;
}

#private-dining-phone {
     grid-area: private-dining-phone-input;
}

#private-dining-email {
     grid-area: private-dining-email-input;
}

#private-dining-message {
     grid-area: private-dining-message-input;
}

/* ||| */

.newsletter-modal {
     position: relative;
     text-align: center;
     background-color: var(--white-100);
     font-size: 1.5rem;
     padding: 3em 0 1em 0;
}

.newsletter-modal h1,
.newsletter-modal a {
     color: var(--black-3);
}

.newsletter-modal button {
     position: absolute;
     margin: var(--quarter-em);
     left: 0;
     top: 0;
}

.newsletter-modal-container {
     background-color: var(--black-3-op);
     bottom: 0;
     left: 0;
     place-items: center;
     position: fixed;
     right: 0;
     top: 0;
     z-index: 200; /*Must be in front of the main__nav menu when this modal is open*/
}

.res-success {
     width: 100%;
     height: 100%;
     text-align: center;
     position: fixed;
     top: 0%;
     z-index: 300; /*Should be in front of any other element when open*/
     font-size: 3rem;
     padding: 50% 0;
     background-color: transparent;
}

.res-success div {
     padding: var(--half-em);
     background-color: black;
}
