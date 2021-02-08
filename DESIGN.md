# Design of the application

## Goals and tools used

My goal here was to provide the ability for a user to enter their information in order to obtain an approval for a loan. The major libraries used in this application include React, Redux, Material UI and React Router.

### Hooks

Hooks were used from Material UI, React and Redux to either manage styling or state without having to hook up HOC's to the functional components.

### Error Boundary

An Error Boundaray was setup around all components that would render inside of the Router switch statement. In production environments this should catch errors from the child components and let the user know something went wrong. In my implementation, the error boundary was only used to display a message. In a fully built application the user would be able to reload the page from the error boundary UI.

### Testing

Basic testing was done with the validation functions that check if the textfields were able to detect an empty field in order for component state to show an error in the textfield. In a fully built application, we can go further and implement end to end testing as well as integration testing. For example, we could have a user enter values in the LandingPage component and then simulate a submission. From there we would expect to be on the disqualification or new account page.

### Top Down component design

The App component contains the ErrorBoundary and Switch Router that handles what the user sees. The first page seen would be the LandingPage.

### Landing Page

The landing page uses various hooks in order to handle the functionality of the textfields. The textfield state is stored in redux state, while the error state is stored locally. In a fully built application, all of this state would most likely be stored in the local useState hook. For this demonstration, I wanted to show how redux could be implemented which is why some of the state is stored there.

The handleChange function handles the dispatchs of the textfield inputs to redux by sharing action type variables to determine what field the input is coming from. It also contains a useCallback function in order to optimize rendering for child components by maintaing that the same function will be returned that was returned in the previous render.

### New Account Page

The NewAccount page follows similar patterns to the landing page but has a password field that must be matched before submission.

### Disqualification Page

It returns a default value by pulling from redux to obtain the result of the call from the mock api... which in my case is a bad request for a value of car over 1 million or a friendly message telling the user to call customer service.
