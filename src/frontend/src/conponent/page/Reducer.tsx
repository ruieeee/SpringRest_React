import React, { useState, useReducer } from "react";
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import { Link } from "react-router-dom";
import { TextField } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import {
  DataGrid,
  GridColDef,
  GridToolbarContainer,
  GridToolbarExport,
  GridCellParams,
  GridRowData,
  GridSelectionModel,
} from "@material-ui/data-grid";
import reducer from "../../reducers/index";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "../../css/App.module.css";

const Reduer: React.FC = (props: any) => {
  const eventCustomToolbar = () => {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
        <Button
          variant="contained"
          onClick={selectDelete}
          disabled={eventCheck.length === 0}
        >
          選択を削除する
        </Button>
        <Button
          variant="contained"
          onClick={allDelete}
          disabled={state.length === 0}
        >
          全削除
        </Button>
      </GridToolbarContainer>
    );
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 110 },
    {
      field: "title",
      headerName: "Title",
      width: 170,
      editable: true,
    },
    {
      field: "body",
      headerName: "Body",
      width: 250,
      editable: true,
    },
    {
      field: "delete",
      headerName: "",
      sortable: false,
      width: 130,
      renderCell: (params: GridCellParams) => {
        const paramsId = params.getValue(params.id, "id");
        return (
          <Button
            variant="contained"
            color="secondary"
            startIcon={<DeleteIcon />}
            onClick={(event: any) => cellDelete(paramsId, false)}
          >
            delete
          </Button>
        );
      },
    },
    {
      field: "edit",
      headerName: "",
      sortable: false,
      renderCell: (cellValues) => {
        //const paramsId = cellValues.id;
        const paramsRow: GridRowData = cellValues.row;
        return (
          <Button
            variant="contained"
            color="primary"
            startIcon={<EditIcon />}
            onClick={(event: any) => cellEdit(paramsRow)}
          >
            Edit
          </Button>
        );
      },
    },
  ];

  const events = [
    { id: 1, title: "test", body: "testBody" },
    { id: 2, title: "テスト", body: "テストボディ" },
  ];

  const [state, dispatch] = useReducer(reducer, events);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [eventCheck, setEventCheck] = useState<number[]>([]);
  const unCreatabl: boolean = title === "" || body === "";

  //stateとdisptchが返ってくる
  //第一引数:作成したReducer 第二引数:デフォルトの状態としてどうしたいか 第三引数:初期化時のコールバック
  //const [state, dispatch] = useReducer(reducer, initialArg, init);

  const addEvent = () => {
    dispatch({ type: "CREATE_EVENT", title, body });
    setTitle("");
    setBody("");
    console.log("CREATE_EVENT");
  };

  const allDelete = () => {
    if (window.confirm("全て削除しても良いですか?")) {
      dispatch({ type: "DELETE_ALL_EVENT" });
      console.log("DELETE_ALL_EVENT");
    }
  };

  const cellDelete = (Id: any, select: boolean) => {
    if (select !== true) {
      if (window.confirm("id:" + Id + " を削除しても良いですか?")) {
        dispatch({ type: "DELETE_EVENT", deleteId: Id });
        console.log("DELETE_EVENT");
      }
    } else {
      dispatch({ type: "DELETE_EVENT", deleteId: Id });
      console.log("DELETE_EVENT");
    }
  };
  const selectDelete = () => {
    if (window.confirm("選択を削除しても良いですか?")) {
      eventCheck.map((res) => cellDelete(res, true));
    }
  };

  const cellEdit = (params: GridRowData) => {
    dispatch({
      type: "EDIT_EVENT",
      id: params.id,
      title: params.title,
      body: params.body,
    });
  };

  return (
    <div>
      <Header title="Reducer" />

      <div className={styles.reducerDivCommon}>
        <Link to="/">メニュー</Link>
        <br />
        <h1>イベント作成フォーム</h1>

        <FormControl fullWidth>
          <Grid>
            <Grid item xs>
              <TextField
                label="Title"
                value={title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setTitle(e.target.value)
                }
              />
            </Grid>
            <Grid>
              <TextField
                label="Body"
                value={body}
                fullWidth
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setBody(e.target.value)
                }
              />
            </Grid>
          </Grid>
          <br />
          <Grid container spacing={4}>
            <Grid item xs>
              <Button
                variant="contained"
                onClick={addEvent}
                disabled={unCreatabl}
              >
                イベントを作成する
              </Button>
            </Grid>
          </Grid>
        </FormControl>
      </div>
      <br />
      <div className={styles.reducerTableCommon}>
        <h3>イベント一覧</h3>
        <DataGrid
          rows={state}
          columns={columns}
          checkboxSelection
          disableSelectionOnClick
          onSelectionModelChange={(model: any) => setEventCheck(model)}
          components={{
            Toolbar: eventCustomToolbar,
          }}
        />
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default Reduer;
