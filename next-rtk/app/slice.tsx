import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: string;
  name: string;
}

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<string>) => {
      console.log(action);
      const newUser: User = {
        id: nanoid(),
        name: action.payload,
      };
      state.users.push(newUser);
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
