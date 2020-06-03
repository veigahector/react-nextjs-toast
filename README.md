# A simple nextjs toast component
This toast component can be used on nextjs projects or any other react project which uses style-jsx.

## Installation

Using npm
```
npm install react-nextjs-toast
```

Using yarn 
```
yarn add react-nextjs-toast
```

## How to use

The component is very simple to use. Just follow the instructions.

### To show toast 
```jsx
toast.notify( msg, { options } )
```

*check option section to learn more* 
### To remove toast
```jsx
toast.remove()
```
Let's assume you have a react component where you want to use the toast component to notify a user about certain event.

```jsx
import React from 'react'

// import toast object and toast container from react-nextjs-toast
import { toast, ToastContainer } from 'react-nextjs-toast'

// Your react component
class Card extends React.Component {

  // something ...

  // call toast.notify() here
  onClickNotify = () => {
    toast.notify(`Hi, I am a toast!`)
  }

  render(){
    return (<div>
    
        {/** Add toast component **/}
        <ToastContainer />

        
        <button
          onClick={this.onClickNotify} {/** call on click handler **/}
        >Notify</button>
      </div>
    )
  }
}
```


# Options

The toast has 4 types of default events - default, info, success, danger, warning and custom-type. 
Supports custom duration.


| property | description | Data Type |
|----------|-------------|-------|
| duration  | Number of seconds to show toast on screen | *Integer* |
| type      | Type of toast - info, danger, success, warning and custom-type | *String*|
| className | You are able to provide a custom className, with this you will be able to utilize css | *String*|
| color     | Custom color for the theme, it will modify the border color, as well as the font color, you can provide a Hex code ('#ff0000') or a real CSS colour name (red)  | *String*|



For example, to show success toast that lasts for 5 seconds.
```
toast.notify("This is a success toast", {
  duration: 5,
  type: "success",
  color: "#ff0000",
  className: "my-custom-css-class"
})
```

```
will render the following toast:
<div id="toast-container" class="jsx-2954286552 toast-container type-success my-custom-css-class">
  <div class="jsx-1641492115 jsx-75005581 toast-message-container ">
    <div class="jsx-1641492115 jsx-75005581 side-bar"></div>
    <div id="toast-message" class="jsx-1641492115 jsx-75005581 toast-message">
      This is a success toast
    </div>
  </div>
</div>
```
----

# Todo
* Demo
* Custom desing

# Miscellaneous

