interface Open {
  open: boolean;
}
const init: Open = { open: false };

const DialogOpen = (state: Open = init, action: any) => {
  switch (action.type) {
    case "open":
      return true;
    case "close":
      return false;
    default:
      return state;
  }
};

export default DialogOpen;
