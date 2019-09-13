1. What problem does the context API help solve?

Helps reduce the need for prop drilling since data can be imported directly to the component.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are triggered once the user has triggered an event in the view/UI. Actions are a list of functions that correspond to pieces of logic inside the reducer file. Reducers help manage state by storing the initalstate and state logic inside of the store. The store holds all the moving parts for managing, manipulating, and storing state.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is data that affects the app as a whole, like an API call or a large storgage of data. Componenet state is good for holding smaller pieces of data for specific usages and functionality within individual componenets.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk will look for different actions to be called, and wait to forward the action to the reducer accordingly. If it's passed a function, it will invoke it and pass dispatch as an argument.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I like redux because it cleans up the code in your componenets, making it easier to format and display your data in those componenets while state is being managed elsewhere. I can tell by the format that it's propbably overkill for the small apps we've been making but will come in handy for larger apps.