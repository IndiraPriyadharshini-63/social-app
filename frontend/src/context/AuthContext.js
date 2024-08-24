import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  });
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

// {
//   _id: "66c0c29ee9b7d998e7043abe",
//   username: "indira",
//   email: "indira@123",
//   password: "$2b$10$RO5jBac7kk.lZovli.Tw/uHXTKo9D429DevG52qEZpr5WYdJFaAA6",
//   profilePicture: "person/1.jpeg",
//   coverPicture: "",
//   followers: [],
//   following: ["66c0b406e9b7d998e7043aaa", "66bdd575813227fb53c86046"],
//   isAdmin: false,
// },
