# Twingate Demo

## Install

To install, run `npm install`

## Local Development

To run locally, run `npm run dev`

## Build for production

To build for production, run `npm run build`


# Notes and Caveats

* I wasn't sure what size screen to accommodate or where this should be placed on the page. Just a minor detail, but wanted to call it out here to know that in a real application, I would put more thought into how these components gets put onto the page and where. I used two flexboxes, but maybe this is a better use case for a CSS Grid? I think it would depend on feature requirements being asked about the potential layouts of all these components.

* Unfortunately I did not have the time to write any quality unit tests, however here are some of the scenarios I would look to cover:
  * Unit tests to cover the parsing of input data and to make sure we fail gracefully when appropriate, as well as rendering the correct components by "type". Would do this via a mock and make sure the right component is rendered.
  * Unit tests for each individual factory component to make sure each property available has the proper effect. For example, I would verify that "leftToRight" in the "image-text" component does the correct thing.

* Normally I would setup an import alias in tsconfig/vite so that the import paths were not unwieldy. This way an example import from anywhere in the repo could be something like `@/features/ComponentFactory`. Ran out of time for this and felt it was a minor detail, but in a long term codebase this is extremely useful to keep imports clean, and to allow for files to be moved around without the burden of major refactor trying to figure out how many `../../` to move or change

* If I was doing this for real, I would use zod/yup (or another comparative library) to create a schema that represents all possible components, and would validate the input at runtime with these. This would enable for extremely expressive and helpful error messaging, and would also allow for nice extensibility.

* When making API requests, my opinion (and lately the opinion of the core React team as well =) ), is that you should absolutely be using react-query. I did not want to step outside the bounds of the demo restrictions so I left it out of here, but in a real world scenario, it would absolutely be used.

* I put the input state in a React Context which works well enough for this example, but I would most likely reach for a state management library here such as Zustand, Jotai, or maybe Redux (this one might be too much for this need). 

  Zustand would make it easy to manage this global state while also limited re-renders around the page, since a React Context does not have those efficiencies baked in out of the box and will re-render all children when anything changes. Technically this can be worked around, but in this scenario, I think Zustand would be an ideal choice.
