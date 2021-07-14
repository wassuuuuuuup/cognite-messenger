import {createSlice} from '@reduxjs/toolkit';

import {IUser} from './user.types';

interface IUserState {
	loading: boolean;
	user: IUser | null,
}

const initialState: IUserState = {
	loading: false,
	user: {id: '123', name: 'Per Larson'},
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
});

export default userSlice;