import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducer/reducer';

const store = createStore(
   rootReducer,
   composeWithDevTools(applyMiddleware(thunk))
);

export default store;


/*
------> How Redux works <------

   The way Redux works is simple. There is a central store that holds the entire state of the application.
   Each component can access the stored state without having to send down props from one component to another.

   There are three core components in Redux — actions, store, and reducers. 

      'state' --> refers to the object that holds the application data that is shared between components.


------> What are Redux actions? <-------

   Simply put, Redux actions are events.

   They are the only way you can send data from your application to your Redux store.
   The data can be from user interactions, API calls, or even form submissions.

   Actions are plain JavaScript objects that must have:
      * a 'type' --> property to indicate the type of action to be carried out, and
      * a 'payload' --> object that contains the information that should be used to change the state.

   Actions are created via an action creator, which in simple terms is a function that returns an action.
   And actions are executed using the store.dispatch() method which sends the action to the store.

   Here’s an example of an action:

      { 
         type: "LOGIN",
         payload: {
            username: "foo",
            password: "bar"
         }
      }

   Here is an example of an action creator:
      
   //using class functions
      const setLoginStatus = (username, password) => {
         return {
            type: "LOGIN",
            payload: {
               username, // "foo"
               password // "bar" 
            }
         }
      }

   //using normal functions
   // Action creator (a function) that return an action (objetc with these properties: { type, payload})
      export function setLoginStatus(username, password) {
         return ({
            type: "LOGIN",
            payload: {
               username, // "foo"
               password // "bar" 
            }
         })
      }

-------> What are Redux reducers? <-------

   Reducers are pure functions that take the current state of an application, perform an action,
   and return a new state. The reducer handles how the state (application data) will change in response to an action.

      A pure function is a function that will always return the same value if given the same parameters.
      i.e. the function depends on only the parameters and no external data.

   Reducers take the previous state of the app and return a new state based on the action passed to it.

   Here, the global state (object) is defined:
   
   Example of global state:
                              const initialState = {
                                 myFavorites: [],
                              }

   Example of a Reducer:

   //using class functions
      // Here 'action' is an object of this type: {type, payload}
      const LoginComponent = (state = initialState, action) => {
         switch (action.type) {
            case "LOGIN":
               return state.map(user => {
                  if (user.username !== action.username) {
                        return user;
                  }

                  if (user.password == action.password) {
                        return {
                           ...user,
                           login_status: "LOGGED IN"
                        }
                  }
               });

            default:
               return state;
         } 
      };

      //using normal functions
         export default function rootReducer(state = initialState, { type, payload }) {
            switch(type){
               case ADD_CARD:
                     return{
                        ...state,
                        myFavorites: [...state.myFavorites, payload],   //payload -> sera el valor de 'personaje' que es la informacion que viene de la Card.
                     }

               case DELETE_CARD:
                     const filtered = state.myFavorites.filter(char => char.id !== payload )  //payload -> sera el 'id' que viene de la action en el archivo 'actions.js'
                     return{
                        ...state,
                        myFavorites: filtered,
                     }
                     
               default:
                     return state
            }
         }


--------> What is Redux Store? <---------

   The store is a “container” (really a JavaScript object) that holds the application state, and the only
   way the state can change is through actions dispatched to the store.
   
   Redux allows individual components connect to the store and apply changes to it by dispatching actions.

   It is highly recommended to keep only one store in any Redux application. You can access the state stored,
   update the state, and register or unregister listeners via helper methods.

   Example:
            const store = createStore(LoginComponent);

   Note: Actions performed on the state always return a new state.

   With Redux, there’s one general state in the store, and each component has access to the state.

   This eliminates the need to continuously pass state from one component to another. You can also select the slice
   from the store for a particular component; this makes your app more optimized.



*/