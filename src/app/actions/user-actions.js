import $ from "jquery";

export const UPDATE_USER = "users:updateUser";
export const SHOW_ERROR = "users:showError";

export const updateUser = newUser => {
  return {
    type: UPDATE_USER,
    payload: {
      user: newUser
    }
  };
};

export const showError = () => {
  return {
    type: SHOW_ERROR,
    payload: {
      user: "ERROR"
    }
  };
};

export const apiRequest = () => {
  return dispatch => {
    $.ajax({
      url: "htpp://google.com",
      success(response) {
        console.log("SUCCESS");
        dispatch(updateUser(response.newUser));
      },
      error() {
        console.log("ERROR");
        dispatch(showError());
      }
    });
  };
};
