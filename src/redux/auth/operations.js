import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/signup", user);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    const { data } = await axios.post("/users/login", user);
    return data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk(
  "auth/logout",
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/logout");
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refreshUser",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/users/current");
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
