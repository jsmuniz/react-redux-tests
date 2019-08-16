import jsonPlaceHolder from "../apis/jsonPlaceHolder";

export const fetchPosts = async () => async dispatch => {
  const response = await jsonPlaceHolder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response });
};
