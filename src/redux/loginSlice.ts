import axiosInstance from '@/api/axios';
import { Endpoints } from '@/api/endpoints';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface SignupResponse {
  success: boolean;
  message?: string;
}

interface OTPVerificationResponse {
  success: boolean;
  message?: string;
}

interface AuthError {
  message: string;
}

export interface AuthState {
  loading: boolean;
  error: string | null;
  success: boolean;
}

const initialState: AuthState = {
  loading: false,
  error: null,
  success: false,
};

// Define a type for the signup payload
interface SignupPayload {
  mobileNumber: string;
  countryCode: string;
}

// Thunk for signup
export const signup = createAsyncThunk<
  SignupResponse, 
  SignupPayload, 
  { rejectValue: AuthError }
>(
  'auth/signup',
  async ({ mobileNumber, countryCode }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post<SignupResponse>(Endpoints.SIGNUP, {
        mobileNumber,
        countryCode
      });

      if (response.data.success) {
        return response.data;
      } else {
        return rejectWithValue({ message: response.data.message || 'Signup failed!' });
      }
    } catch (error: any) {
      console.error("Error in signup:", error);
      if (error.response && error.response.data.message) {
        return rejectWithValue({ message: error.response.data.message });
      }
      return rejectWithValue({ message: 'Something went wrong!' });
    }
  }
);

// Thunk for OTP verification
export const verifyOTP = createAsyncThunk<
  OTPVerificationResponse, 
  string, 
  { rejectValue: AuthError }
>(
  'auth/verifyOTP',
  async (otp: string, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post<OTPVerificationResponse>(Endpoints.VERIFY_OTP, { otp:"693737" });

      if (response.data.success) {
        return response.data;
      } else {
        return rejectWithValue({ message: response.data.message || 'OTP verification failed!' });
      }
    } catch (error: any) {
      console.error("Error in verifyOTP:", error);
      if (error.response && error.response.data.message) {
        return rejectWithValue({ message: error.response.data.message });
      }
      return rejectWithValue({ message: 'Something went wrong!' });
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetAuthState: (state) => {
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Something went wrong!';
      })
      .addCase(verifyOTP.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyOTP.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(verifyOTP.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Something went wrong!';
      });
  },
});

export const { resetAuthState } = authSlice.actions;
export default authSlice.reducer;
