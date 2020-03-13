- [ ] Why would you use class component over function components (removing hooks from the question)?

Class components use ES6 class and extend the Component class in React.
React lifecycle methods are used inside class components (ex: componentDidMount).
You pass props down to class components and access them with this.props
Also if you are editing legacy code/

- [ ] Name three lifecycle methods and their purposes.

Render -  tells React to return some piece of DOM. - required for a class component
constructor-  creates components inciting state data for the initial render
componentDidMount -  do all the setup and start getting all the data,  Starting AJAX calls to load in data for your component.

- [ ] What is the purpose of a custom hook?

Custom Hooks are a mechanism to reuse stateful logic 


- [ ] Why is it important to test our apps?

Test apps so they work in all circumstances because you never know how a user will break it and then it does not work. You need to test to find out where it breaks so you can fix it!