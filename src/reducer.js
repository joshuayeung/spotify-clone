export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //   REMOVE after finished developing
//   token:
//     "BQCQx_QqyUmgEuXyUDOF0y-Cu6gnfD4l_6RLNgDrHIkDbiUIxDzeiHJHngoEPaXwmsSEagc9T8vWjkXOUGXVqTfy_EjFHUhk-uTmgj7J0-ruuh4mVeioRjeOBMwt5YOoD6C1BnrXJ8W1rXxrtt4OfkG0hqLHjNcdGXJC72g94eIeY1B993Ux",
};

const reducer = (state, action) => {
  console.log(action);

  // Action -> type, [payload]

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
