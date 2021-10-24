import React, { useState, useEffect } from "react";
import Header from "./conponent/parts/Header";
import "./App.css";
import Footer from "./conponent/parts/Footer";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Users from "./interface/Users";
import axios from "axios";

const url = "http://localhost:8090/api";

const App: React.FC = (props: any) => {
  const [users, setusers] = useState<Users[]>([]);

  //第一引数:関数、第二引数:コールバックを設定 ( [name] を設定したらnameの状態が変化する旅呼ばれる)
  //レンダリングの後、レンダリングされるたびに呼ばれる
  //第二引数にからの配列を入れることで最初のレンダリング時だけに呼ばれる
  useEffect(() => {
    console.log("effect");
    const func = async () => {
      await fetch(url + "/users", { method: "GET" })
        .then((res) => res.json())
        .then((data) => {
          setusers(data);
        });
    };
    func();
  }, []);

  return (
    <div className="App">
      <Header title="Menu" />
      <h1>Menu</h1>

      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Link to={"/TaskApp"}>
            <h1>Task App</h1>
          </Link>
        </Grid>
        <Grid item xs={3}>
          <Link to={"/Reducer"}>
            <h1>Reducer</h1>
          </Link>
        </Grid>
        <Grid item xs={3}>
          <h1>test</h1>
        </Grid>
        <Grid item xs={3}>
          <h1>test</h1>
        </Grid>
      </Grid>

      <p>app</p>
      <div>
        <ul>
          {users.map((user) => (
            <p>
              id:{user.userId} name:{user.userName} mail:{user.mail}
            </p>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default App;
