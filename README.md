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

I tested the app on Chromium and Firefox, including smaller sizes in those browsers. I made an executive decision to exclude IE and edge (except chromium edge, as that very likely works just like chromium) from `.browserslistrc`, because I cannot test on those at the moment (would need some time to setup and figure out windows on a virtual machine). Same thing with Safari, although I did leave Safaris on the browserslist.

## App structure / Code

The files themselves are separated semantically into sensible directories (e.g. Product, ShoppingCart,...). Everything directly tied to a specific concept (like a Product) are in the same directory. Common files, including common components, constants and helper functions, are in their own directory. There is also a directory for theme related things.

I made some assumptions about realistic communication with the back-end and so made most operations, that might touch the backend, into Promise-returning functions with an artificial delay to simulate server communication. I also had to assume the shape of the data coming from the back-end, but that would be easily amended to fit reality. I assumed adding to cart would be a back-end request as well to either add it to a server-side cart or to check availability, or to "lock" an item in the cart.

## TODOs

- Getting to the shopping cart view can only be done by clicking the top right button right now. Might be nice for a user to have a prompt of some kind to go there after adding an item to cart. Although a11y needs to be throroughly thought-out in this case.
- Add support for quantities of the same item in cart. This also requires UX-considerations and UI-design work. Related to this is availability of a given item. So being able to clearly display added-to-cart count as well as available count (or status) needs to be thought about from a UX-perspective.
- Loaders. Loading states are currently only displayed as text (e.g. Loading..., Adding to cart,...).
- Various micro-interactions to make the UI feel more organic. Example of this currently is clicking the shopping cart icon.
