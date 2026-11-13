import {configureStore} from '@reduxjs/toolkit';
import  userDetail  from '../Features/UserdetailSlice';

export const store = configureStore({
    reducer: {
        app: userDetail,
    },
})