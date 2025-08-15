# For modern redux
npm i @reduxjs/toolkit react-redux


# For redux before toolkit:
npm i redux react-redux redux-thunk @redux-devtools/extension

# To use the dev tools use the following code in react whilst creating the store (replace thunk with whatever you may need):

#import { composeWithDevTools } from '@redux-devtools/extension';
# const store = createStore(
  # reducer,
  # composeWithDevTools(
    # applyMiddleware(thunk)
  # )
# );
