export default function(state = null, action) {
  switch (action.type) {
    case "User Selected":
      return action.payload;
    default:
      return state;
  }
  return state;
}
