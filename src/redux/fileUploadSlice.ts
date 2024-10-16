import axiosInstance from "@/api/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type FileUploadState = {
    loading:boolean;
    error:string | null;
    success:boolean;
    file:File | null;
}

const initialState:FileUploadState = {
    loading:false,
    error:null,
    success:false,
    file:null
}


export const uploadFile = createAsyncThunk('career/uploadFile', async (file: File) => {
    console.log(file, 'File to be uploaded');
    try {
        const formData = new FormData();
        formData.append('file', file);

        const response = await axiosInstance.post('/upload/file', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to upload file');
    }
});


export const fileUploadSlice = createSlice({
    name:'fileUpload',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(uploadFile.pending,(state)=>{
            state.loading = true;
            state.error = null;
            state.success = false;
        })
        builder.addCase(uploadFile.fulfilled,(state,action)=>{
            state.loading = false;
            state.success = true;
            console.log(action.payload?.data?.imageUrl,'action.payload')
            state.file = action.payload?.data?.imageUrl;
        })
        builder.addCase(uploadFile.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message || "Something went wrong!";
        })
    },  
})

export default fileUploadSlice.reducer;
