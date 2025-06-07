 import React from "react";
import ReactDom from 'react-dom/client';
import BookList from "./BookList";
import Form from "./Form";
import App from "./App";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BookList/>
        <Form/>
        <App/>
    </React.StrictMode>
 );