import React from "react";
import { Button } from "@material-ui/core";
import useSWR, { SWRConfig } from "swr";
//import { makeStyles } from "@material-ui/core/styles";

//const useStyles = makeStyles((theme) => ({}));

interface Props {
  listId: number;
}

interface TaskItem {
  taskId: number;
  listId: number;
  taskTitle: String;
  taskBody: String;
  deadline: Date;
  createDate: Date;
  complete: boolean;
  favorite: boolean;
}

const isTaskListApiResnpose = (respons: any): respons is TaskItem[] => {
  return respons !== undefined;
};

const fetcher = (url: String) =>
  fetch(`http://localhost:8090` + url).then((r) => r.json());

function useTaskList(listId: number) {
  const { data, error } = useSWR(`/api/tasklists/${listId}/items`, fetcher, {
    refreshInterval: 5000,
  });
  return {
    items: data,
    isLoading: !error && !data,
    isError: error,
  };
}

const TaskItems: React.FC<Props> = (props: Props) => {
  const { items, isLoading, isError } = useTaskList(props.listId);
  //const classes = useStyles();
  console.log(items);

  return (
    <>
      {isLoading ? (
        <></>
      ) : isTaskListApiResnpose(items) ? (
        items.map((item: TaskItem) => {
          return (
            <p>
              {item.taskTitle}deadline:{item.deadline}
            </p>
          );
        })
      ) : (
        <></>
      )}
    </>
  );
};

export default TaskItems;
