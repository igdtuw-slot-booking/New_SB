import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";


// ReactDOM.render(
//   <BrowserRouter>
//   <Provider store={store}>
//     <App />
//   </Provider>
//   </BrowserRouter>,
//   document.getElementById("root")
// );



// createRoot(document.getElementById('root')).render(
// <BrowserRouter>
//   <Provider store={store}>
//     <App />
//   </Provider>
//   </BrowserRouter>
// );


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            fontSize: "14px",
          },
        }}
      />
      <App />
    </BrowserRouter>
);