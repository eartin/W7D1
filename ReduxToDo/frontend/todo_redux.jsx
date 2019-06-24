import  React  from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';



document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('content');
  const store = configureStore();
  window.store= store;
  ReactDOM.render(
    <p>react is working!</p>,
    root
  );
}); 
