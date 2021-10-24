import React, { useState, useEffect } from "react";
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import { Link } from "react-router-dom";
import TaskListDialog from "../parts/taskapp/TaskListDialog";
import TaskListComponent from "../parts/taskapp/TaskList";
import { makeStyles } from "@material-ui/core/styles";
import useSWR, { SWRConfig } from "swr";
// import FormControl from "@material-ui/core/FormControl";
// import { TextField, List } from "@material-ui/core";
// import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";
// import styles from "../../css/App.module.css";
// import TaskItems from "../parts/TaskItems";
// import { Button } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

interface TaskList {
  listId: number;
  userId: number;
  listTitle: String;
}
//返ってきたデータの型ガード
const isTaskListApiResnpose = (respons: any): respons is TaskList[] => {
  return respons !== undefined;
};

const useStyles = makeStyles((theme) => ({
  lists: {
    width: "80%",
    margin: "auto",
  },
}));

const fetcher = () =>
  fetch("http://localhost:8090/api/tasklists").then((r) => r.json());

function useTaskList() {
  const { data, error } = useSWR(`/api/tasklists`, fetcher, {
    refreshInterval: 1000,
  });
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}

const TaskApp: React.FC = (props) => {
  const classes = useStyles();
  const { data, isLoading, isError } = useTaskList();
  if (isError) return <p>error</p>;
  //if (isLoading) return <p>loading</p>;

  return (
    <div className="App">
      <Header title="TaskApp" />
      <Link to="/">メニュー</Link>
      <p>TaskApp</p>
      <div>
        <TaskListDialog />
        {isLoading ? <CircularProgress /> : <></>}
      </div>
      <br />
      <br />
      <div className={classes.lists}>
        {isTaskListApiResnpose(data) ? (
          data.map((listItem: TaskList) => (
            <TaskListComponent
              userId={listItem.userId}
              listId={listItem.listId}
              listTitle={listItem.listTitle}
            />
          ))
        ) : (
          <></>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default TaskApp;
