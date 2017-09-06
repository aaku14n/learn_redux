export const selectAction = user => {
  return {
    type: "User Selected",
    payload: user
  };
};

export const deleteAction = user => {
  return {
    type: "DELETE_USER",
    payload: user
  };
};
export const editAction = user => {
  return {
    type: "EDIT_USER",
    payload: user
  };
};
export const addAction = user => {
  return {
    type: "ADD_USER",
    payload: user
  };
};
