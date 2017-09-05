export const selectAction = user => {
  console.log(user.id);
  return {
    type: "User Selected",
    payload: user
  };
};
