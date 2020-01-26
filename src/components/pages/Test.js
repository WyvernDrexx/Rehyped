import React from 'react';

const Test = props => {

  const onButtonClick = _ => {
    document.getElementById("notification-main").classList.add("animate-show");
    document.getElementById("notification-message").classList.add("animate-text");
    setTimeout(_ => {
      document.getElementById("notification-main").classList.remove("animate-show");
      document.getElementById("notification-main").classList.add("animate-hide");
      document.getElementById("notification-message").classList.add("animate-text-end");
    }, 3500);
  }

  return (
    <div className="mt-6 mb-6">
      <button onClick={onButtonClick}>CLICK ME!</button>
    </div>
  );
}

export default Test;