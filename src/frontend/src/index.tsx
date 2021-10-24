import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Route, BrowserRouter } from "react-router-dom";
import Login from "./conponent/page/Login";
import TaskApp from "./conponent/page/TaskApp";
import Reducer from "./conponent/page/Reducer";

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={App} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/taskApp" component={TaskApp} />
    <Route exact path="/Reducer" component={Reducer} />
  </BrowserRouter>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
