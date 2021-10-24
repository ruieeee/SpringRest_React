import React, { useState } from "react";
import { Button } from "@material-ui/core";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { TextField } from "@material-ui/core";

const url = "http://localhost:8090/api";

const TaskListDialog: React.FC = (props) => {
  // const queryClient = useQueryClient();
  const url = "http://localhost:8090/api";
  const [open, setOpen] = useState(false);

  const [listName, setListName] = useState<String>("");

  const unCreatabl: boolean = listName === "";
  const [isTestErr, setIsTestErr] = useState(false);

  const param = `?title=${listName}&userId=1`;
  const addList = async () => {
    console.log("test");
    return await fetch(url + "/tasklists" + param, { method: "POST" })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  // const mutataion = useMutation((listName) =>
  //   axios.post(url + "/tasklists", { title: listName, userId: 1 })
  // );

  const handleClose = () => {
    setOpen(false);
    setIsTestErr(false);
  };

  const listPost = () => {
    if (listName.length < 21) {
      addList();
      handleClose();
    } else {
      setListName("");
    }
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        リストを作成する
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">リストの作成</DialogTitle>
        <DialogContent>
          <DialogContentText>
            タスクをまとめるリストを作成してください
          </DialogContentText>
          {isTestErr ? (
            <TextField
              error
              label="Error"
              helperText="20文字以内にしてください"
              fullWidth
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setListName(e.target.value);
                if (listName.length < 21 && listName.length > 0)
                  setIsTestErr(false);
              }}
            />
          ) : (
            <TextField
              autoFocus
              margin="dense"
              label="タスクリスト"
              type="text"
              fullWidth
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setListName(e.target.value);
                if (listName.length > 21) setIsTestErr(true);
              }}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            キャンセル
          </Button>
          <Button
            onClick={listPost}
            disabled={unCreatabl || isTestErr}
            color="primary"
          >
            作成
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TaskListDialog;
