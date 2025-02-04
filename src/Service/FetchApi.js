import axios from "axios";

export const getAllUsers =
  (url = "", type) =>
  async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/${url}`);
      dispatch({
        type,
        payload: data,
      });
    } catch (error) {
      return error;
    }
  };
