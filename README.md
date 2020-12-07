# whee-shop

## How to run

There is only really the dev-server to run the app on.

1. Install dependencies `yarn`
2. Start the server `yarn start`
3. Open browser in address: `http://localhost:55555`

As seen from the above I used `yarn`, but `npm` should work as well, although then the lock-file is different from mine.

## Technologies

- Typescript
- React
- CSS-in-JS (emotion) styled-components mostly
- React Context for more "complex" state management
- Webpack
- webpack-plugin-serve for dev-server
- Cypress for a handful of UI-tests

## Browsers

I tested the app on Chromium and Firefox, including smaller sizes in those browsers. I made an executive decision to exclude IE and edge (except chromium edge, as that very likely works just like chromium) from `.browserslistrc`, because I cannot test on those at the moment (would need some time to setup and figure out windows on a virtual machine). Also, developing for IE is a huge headache for everyone involved so if at all possible it shouldn't be supported. Same thing with Safari, although I did leave Safaris on the browserslist.

I also tested on my own phone which runs Android 10 on both a chrome browser and Firefox Focus (light, "private" version of firefox).

## App structure / Code

The files themselves are separated semantically into sensible directories (e.g. Product, ShoppingCart,...). Everything directly tied to a specific concept (like a Product) are in the same directory. Common files, including common components, constants and helper functions, are in their own directory. There is also a directory for theme related things.

I made some assumptions about realistic communication with the back-end and so made most operations, that might touch the backend, into Promise-returning functions with an artificial delay to simulate server communication. I also had to assume the shape of the data coming from the back-end, but that would be easily amended to fit reality. I assumed adding to cart would be a back-end request as well to either add it to a server-side cart or to check availability, or to "lock" an item in the cart.

## TODOs 
_essentially anything I thought about doing but decided not to include in the scope of this exercise or just didn't have the time. May not be fully exhaustive_

- Getting to the shopping cart view can only be done by clicking the top right button right now. Might be nice for a user to have a prompt of some kind to go there after adding an item to cart. Although a11y needs to be throroughly thought-out in this case.
- Add support for quantities of the same item in cart. This also requires UX-considerations and UI-design work. Related to this is availability of a given item. So being able to clearly display added-to-cart count as well as available count (or status) needs to be thought about from a UX-perspective.
- Loaders. Loading states are currently only displayed as text (e.g. Loading..., Adding to cart,...).
- Various micro-interactions to make the UI feel more organic. Example of this currently is clicking the shopping cart icon.
- Getting back to the frontpage may be slightly confusing for a user as only the logo is a link to the frontpage and it may not look like a link to unexperienced users.
- The logo is only simple text, but it would likely have to be changed to an image of some sort later.
- No way for a keyboard user to skip the nav, so a keyboard-only button at the nav for skipping it is needed.
- Some focus-outlines are kinda ugly so beautifying those could be nice.
- Code splitting with dynamic imports and Error boundaries to make it safe and pleasant for users

--------------------------------------------------------------------

Hopefully I covered the app sufficiently, but we'll hopefully have time to talk about anything I may have missed. I purposefully left out most reasoning from the decisions here as that will be discussed conversationally later as far as I understood.
