//イベント作成

// interface EventAction {
//   type: String;
//   title: String | null;
//   body: String | null;
//   deleteId: number | null;
//   selectList: number[];
// }

interface Event {
  id: number;
  title: String;
  body: String;
}

const events = (state: Event[], action: any) => {
  switch (action.type) {
    case "CREATE_EVENT":
      const event = { title: action.title, body: action.body };
      const length = state.length;
      let id = length === 0 ? 1 : state[length - 1].id + 1;
      return [...state, { id: id, ...event }]; //最初から持っていたstateを格納してからactionの内容を格納する
    case "EDIT_EVENT":
      state.find((event) => {
        if (event.id === action.id) {
          event.title = action.title;
          event.body = action.body;
        }
      });
      return state;
    case "DELETE_EVENT":
      return state.filter((event) => event.id !== action.deleteId);
    case "DELETE_ALL_EVENT":
      return [];
    default:
      return state;
  }
};

export default events;
