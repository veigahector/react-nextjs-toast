import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'

/**
 * Author: Ashwani Arya 
 */

// Hey, I am toast component 
const Toast = ( props ) => {
  return (
    <div className={`toast-message-container type-${props.type} ${props.className}`}>
      <div className="side-bar"></div>
      <div id="toast-message" className="toast-message">
        {/* Message to be added here */}
        { props.message }
      </div>
      {/* Static Styling */}
      <style jsx>{`
        .toast-message {
          flex:1;
          background-color: #fff;
          padding: 15px 10px;
          border-radius: 4px;
          font-family: 'Open Sans', sans-serif;
        }
        .side-bar{
          padding: 10px;
          border-radius: 4px 0px 0px 4px;
          background: green;
          background: ${ props.color || 'grey' };
        }
    `}</style>
      {/* Dynamic Styling */}
      <style jsx>{`
        @keyframes SlideInOut {
          0%{
            transform: translateY(0);
            opacity:0;
          }
          ${ props.transitionPercentage }% {
            transform: translateY(-40px);
            opacity:1;
          }
          ${ (100-props.transitionPercentage)}% {
            transform: translateY(-40px);
            opacity:1;
          }
          100% {
            transform: translateY(0px);
            opacity:0;
          }
        }
        .toast-message-container {
          color: ${ props.color || 'grey' };
          max-width: 400px;
          box-shadow: 1px 1px 10px #888888;
          margin: 0px auto;
          border-radius: 0 4px 4px 0;
          display: flex;
          animation: SlideInOut ${props.duration}s ease-in-out;
        }
      `}</style>
    </div>
  )
}
// toast object 
export const toast = {
  remove: () => {
    unmountComponentAtNode(document.getElementById('toast-container'))
    toast.currentToast = false
    if(toast.timeout){
      clearTimeout(toast.timeout)
      toast.timeout = null
    }
  },
  currentToast: false,
  timeout: null,
  notify: ( message , options = null) =>{
    
    let duration = 5
    let type = 'default'
    let color = '#007bff'
    let className = ''

    if( options ){
      if(options.duration)
        duration = options.duration
      if (options.className && options.className.trim())
        className = options.className
      if (options.type && options.type.trim())
        type = options.type
      if(type === "info")
        color = '#17a2b8'
      if(type === "success") 
        color = '#28a745'
      if(type === "danger") 
        color = '#dc3545'
      if(type === "warning")
        color = '#ffc107'
      if(options.color)
        color = options.color
    } 

    if(toast.currentToast) { 
      toast.remove()
    }

    let trasitionPercentage = 0.3*(100/duration)
    render(<Toast 
      message={message} 
      slideIn={true} 
      color={ color }
      transitionPercentage={trasitionPercentage} 
      duration={duration} 
      type={type}
      className={className}
    />, document.getElementById('toast-container'));
    toast.currentToast = true
    toast.timeout = setTimeout( toast.remove, duration*1000)
  }
}

// Toast container
export const ToastContainer = ( props ) => {
  return (
    <div id="toast-container" className="toast-container">
      <style jsx>{`
        .toast-container {
          position: fixed;
          width: 100%;
          bottom: 20px;
          left: 0px;
        }
      `}</style>
    </div>
  )
}
  

