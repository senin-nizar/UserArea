
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// CREATE USER
export const createUser = createAsyncThunk(
  "user/createUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://6aed6794fc3b911e6fd62597.mockapi.io/Crud",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create user");
      }

      const result = await response.json();
      return result;

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// SHOW USERS
export const showUser = createAsyncThunk(
  "user/showUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://6aed6794fc3b911e6fd62597.mockapi.io/Crud"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const result = await response.json();
      return result;

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// DeLETE USER
export const deleteUSer = createAsyncThunk(
  "user/deleteUSer",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://6aed6794fc3b911e6fd62597.mockapi.io/Crud/${id}`,{method:"DELETE"}
      );

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const result = await response.json();
      return result;

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// UPDATE USER
export const updateUser = createAsyncThunk(
  "updateUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://6aed6794fc3b911e6fd62597.mockapi.io/Crud/${data.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create user");
      }

      const result = await response.json();
      return result;

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// USER SLICE
export const userDetail = createSlice({
  name: "userDetail",

  initialState: {
    users: [],
    loading: false,
    error: null,
    searchData: []
  },

  reducers: {
    searchUser: (state, action) => {
      state.searchData = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder

      // CREATE USER
      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })

      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // SHOW USERS
      .addCase(showUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(showUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })

      .addCase(showUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(deleteUSer.pending, (state) => {
        state.loading = true;
      })

      .addCase(deleteUSer.fulfilled, (state, action) => {
        state.loading = false;
        const {id} = action.payload;
        if(id){
          state.users = state.users.filter((ele) => ele.id !== id);
        }
      })

      .addCase(deleteUSer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
       .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.map((ele) => (ele.id === action.payload.id ? action.payload : ele));
      })

      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export default userDetail.reducer;
export const {searchUser} = userDetail.actions;
