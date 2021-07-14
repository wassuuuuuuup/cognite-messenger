import {configureStore} from '@reduxjs/toolkit';

import chatsSlice from './containers/Chat/chat.reducer';
import userSlice from './common/user/user.reducer';

const store = configureStore({
	reducer: {
		user: userSlice.reducer,
		chats: chatsSlice.reducer,
	},
});
export type RootState = ReturnType<typeof store.getState>

export default store;