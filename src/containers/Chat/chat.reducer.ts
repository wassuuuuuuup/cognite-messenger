import {createSlice} from '@reduxjs/toolkit';

import {fetchChat, fetchChats, sendMessage} from './chat.thunk';
import {IChatsState} from './chat.types';

const initialState: IChatsState = {
	list: [],
	loading: false,
	selectedLoading: false,
};

const chatsSlice = createSlice({
	name: 'chats',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
		// Redux Toolkit's createSlice API uses Immer internally automatically.
		// So, it's already safe to "mutate" state inside of any case reducer function that is passed to createReducer
			.addCase(fetchChats.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchChats.rejected, (state) => {
				state.loading = false;
			})
			.addCase(fetchChats.fulfilled, (state, action): void => {
				state.loading = false;
				state.list = action.payload;
			})

			.addCase(fetchChat.pending, (state) => {
				state.selectedLoading = true;
			})
			.addCase(fetchChat.rejected, (state) => {
				state.selectedLoading = false;
			})
			.addCase(fetchChat.fulfilled, (state): void => {
				state.selectedLoading = false;
			})

			.addCase(sendMessage.rejected, () => {
				// TODO handle error
			})
			.addCase(sendMessage.fulfilled, (state, {payload}): void => {
				const chat = state.list.find(({id}) => id === payload.chatId);
				if (chat?.messages) {
					chat.messages = [...chat.messages, payload];
				}
			});
	}
});

export default chatsSlice;