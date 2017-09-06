export const selectUserAction = user => {
  return {
    type: "User Selected",
    payload: user
  };
};

export const deleteUserAction = user => {
  return {
    type: "DELETE_USER",
    payload: user
  };
};
export const editUserAction = user => {
  return {
    type: "EDIT_USER",
    payload: user
  };
};
export const addUserAction = user => {
  return {
    type: "ADD_USER",
    payload: user
  };
};
