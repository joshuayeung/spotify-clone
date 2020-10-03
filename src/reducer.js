export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //   REMOVE after finished developing
  // token:
  //   "BQCqX1UaidxRbzw1raaoYLAMMQwBuRDWq8WDuWZXDuSQ3a1oCrW1HYNWX4zOZha3x_Ctgtik2QGR31LwtiAmnaNLs-OHi30dbSsxh1JuvkrW3s95utC_C7N7tLf7XaSvGglh1UL2TQIPTHgWUScj9ntBlpi4Q3eXOKd0z3bVWNte-yBymR4J",
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

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
