import React from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import { Provider } from "react-redux";
import store from "./myredux/Store";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify'
function App() {
  return (
    <>
    <ToastContainer/>
    <Provider store={store}>
      <LandingPage/>

    </Provider>
    
    </>
  );
}

export default App;
