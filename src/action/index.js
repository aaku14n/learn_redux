export const selectAction = user => {
  console.log(user.id);
  return {
    type: "User Selecteed",
    payload: user
  };
};
