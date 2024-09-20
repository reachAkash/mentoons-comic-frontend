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

interface SignupPayload {
  phoneNumber: string;
}

export const signup = createAsyncThunk<
  SignupResponse, 
  SignupPayload, 
  { rejectValue: AuthError }
>(
  'auth/signup',
  async ({ phoneNumber }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post<SignupResponse>(Endpoints.SIGNUP, {
        phoneNumber,
      });

      if (response.data.success) {
        return response.data;
      } else {
        return rejectWithValue({ message: response.data.message || 'Signup failed!' });
      }
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue({ message: error.response.data.message });
      }
      return rejectWithValue({ message: 'Something went wrong!' });
    }
  }
);

interface OTPVerificationPayload {
  otp: string;
  phoneNumber: string;
}

export const verifyOTP = createAsyncThunk<
  OTPVerificationResponse, 
  OTPVerificationPayload, 
  { rejectValue: AuthError }
>(
  'auth/verifyOTP',
  async ({ otp, phoneNumber }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post<OTPVerificationResponse>(Endpoints.VERIFY_OTP, { 
        otp,
        phoneNumber
      });

      if (response.data.success) {
        return response.data;
      } else {
        return rejectWithValue({ message: response.data.message || 'OTP verification failed!' });
      }
    } catch (error: any) {
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
