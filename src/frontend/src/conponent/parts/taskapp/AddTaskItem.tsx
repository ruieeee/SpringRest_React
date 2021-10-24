import React, { useState } from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddIcon from "@material-ui/icons/Add";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import {
  FormControlLabel,
  Collapse,
  TextField,
  Tooltip,
  Fab,
  Switch,
  Button,
} from "@material-ui/core";

const url = "http://localhost:8090/api";

interface Props {
  listId: number;
}

const AddTaskItems: React.FC<Props> = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [taskTitle, setTaskTitle] = useState<String>("");
  const [isTitleErr, setIsTitleErr] = useState(false);
  const [taskBody, setTaskBody] = useState<String>("");
  const untitle: boolean = taskTitle === "";

  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [isDeadLine, setIsDeadLine] = useState(false);
  console.log("test" + selectedDate);

  const param = `?title=${taskTitle}&body=${taskBody}&deadline=${selectedDate}&listId=${props.listId}`;
  const addTask = async () => {
    return await fetch(url + `/tasklists/additem${param}`, { method: "POST" })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setIsDeadLine(false);
  };

  const taskPost = () => {
    if (isDeadLine === false) setSelectedDate(null);
    addTask();
    handleClose();
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleDeadLineChange = () => {
    setIsDeadLine((prev) => !prev);
  };

  return (
    <div>
      <Tooltip title="タスクの追加" aria-label="add">
        <Fab color="primary" onClick={handleClickOpen}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">新しいタスク</DialogTitle>
        <DialogContent>
          <DialogContentText>
            タスクのタイトル,詳細,時間を入力してください
          </DialogContentText>

          {
            //タイトル入力
            isTitleErr ? (
              <TextField
                error
                id="standard-error-helper-text"
                label="Error"
                value={taskTitle}
                helperText="50文字以内にしてください"
                fullWidth
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setTaskTitle(e.target.value);
                  if (taskTitle.length < 51 && taskTitle.length > 0)
                    setIsTitleErr(false);
                }}
              />
            ) : (
              <TextField
                autoFocus
                margin="dense"
                label="タイトル"
                type="text"
                fullWidth
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setTaskTitle(e.target.value);
                  if (taskTitle.length > 51) setIsTitleErr(true);
                }}
              />
            )
          }

          {
            //詳細入力
            <TextField
              margin="dense"
              label="詳細"
              type="text"
              fullWidth
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setTaskBody(e.target.value);
              }}
            />
          }
          <FormControlLabel
            control={
              <Switch checked={isDeadLine} onChange={handleDeadLineChange} />
            }
            label="期限"
          />
          <br />
          <Collapse in={isDeadLine}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                margin="normal"
                label="期限(日)"
                format="yyyy/MM/dd"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
              <br />
              <KeyboardTimePicker
                margin="normal"
                label="期限(時間)"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change time",
                }}
              />
            </MuiPickersUtilsProvider>
          </Collapse>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            キャンセル
          </Button>
          <Button
            onClick={taskPost}
            disabled={untitle || isTitleErr}
            color="primary"
          >
            作成
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddTaskItems;
