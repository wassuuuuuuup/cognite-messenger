import {createSelector} from '@reduxjs/toolkit';

import {RootState} from '../../store';

const chatsSelector = (state: RootState) => state.chats;

export const chatListSelector = createSelector(
	chatsSelector,
	({list}) => list,
);

export const chatListLoadingSelector = createSelector(
	chatsSelector,
	({loading}) => loading,
);

export const selectedChatLoadingSelector = createSelector(
	chatsSelector,
	({selectedLoading}) => selectedLoading,
);