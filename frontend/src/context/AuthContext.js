import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    _id:"66c0c29ee9b7d998e7043abe",
    username: "indira",
    email: "indira@123",
    password: "$2b$10$RO5jBac7kk.lZovli.Tw/uHXTKo9D429DevG52qEZpr5WYdJFaAA6",
    profilePicture: "person/1.jpeg",
    coverPicture: "",
    followers: [],
    following: [],
    isAdmin: false,
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
