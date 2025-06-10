import React from "react";
import ReactDOM from "react-dom/client";

import BookList from "./BookList";
import Form from "./Form";
import App from "./App";
import Fetch from "./Fetch";
import MultipleReturn from "./MultipleReturn";
import UseMemo from "./UseMemo";
import UseEffect from "./UseEffect";
import A from "./A";
import UseRefEx from "./UseRefEx";
import UseRef2 from "./UseRef2";
import UseRef3 from "./UseRef3";
import HOC from "./HOC";
import RouterExample from "./RouterExample";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <>
      <BookList />
      <Form />
      <App />
      <MultipleReturn />
      <Fetch />
      <UseMemo />
      <UseEffect />
      <A />
      <UseRefEx />
      <UseRef2 />
      <UseRef3 />
     <HOC/> 
     <RouterExample/>
    </>
  </React.StrictMode>
);
