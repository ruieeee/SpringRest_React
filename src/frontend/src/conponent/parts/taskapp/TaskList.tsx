import { Button } from "@material-ui/core";
import { useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";
import TaskItems from "./TaskItems";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import AddTaskItems from "./AddTaskItem";

const useStyles = makeStyles((theme) => ({
  list: {
    display: "inline-block",
    margin: "10px 30px",
    backgroundColor: "#e7efff",
    height: "300px",
    width: "180px",
  },
}));

interface TaskList {
  listId: number;
  userId: number;
  listTitle: String;
}

const url = "http://localhost:8090";

const TaskListComponent: React.FC<TaskList> = (props: TaskList) => {
  const classes = useStyles();
  const [isloading, setIsloading] = useState(false);

  const deleteFetch = async (id: number) => {
    setIsloading(true);
    await fetch(`${url}/api/tasklists/${id}`, {
      method: "DELETE",
    }).then((r) => {
      r.json();
      setIsloading(false);
    });
  };

  //const classes = useStyles();

  const deleteList = () => {
    if (window.confirm(`リスト:${props.listTitle}を削除します`)) {
      deleteFetch(props.listId);
    }
  };

  return (
    <div className={classes.list}>
      <span>{props.listTitle}</span>
      <Tooltip title="リストの削除">
        <IconButton aria-label="delete" onClick={deleteList}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>

      <TaskItems listId={props.listId} />

      {isloading ? <CircularProgress /> : <></>}
      <br />
      <AddTaskItems listId={props.listId} />
    </div>
  );
};

export default TaskListComponent;
