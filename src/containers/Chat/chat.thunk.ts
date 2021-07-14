import {createAsyncThunk} from '@reduxjs/toolkit';

import {sleep} from '../../utils/httpUtils';
import {chatStub} from '../../stubs';
import {IChat} from './chat.types';

export const fetchChats = createAsyncThunk<IChat[]>(
	'chat/fetchList',
	async () => {
		// simulate heavy api call
		await sleep(1000);
		return chatStub;
	}
);

export const fetchChat = createAsyncThunk(
	'chat/fetchChat',
	async (id: string) => {
		// simulate heavy api call
		await sleep(1000);
		return id;
	}
);

export const sendMessage = createAsyncThunk(
	'chat/sendMessage',
	async (message: {text: string, author: string, chatId: string}) => {
		await sleep(200);
		return {
			id: Math.random().toFixed(5),
			...message
		};
	}
);
