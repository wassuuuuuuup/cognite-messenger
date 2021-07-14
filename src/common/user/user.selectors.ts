import {createSelector} from '@reduxjs/toolkit';

import {RootState} from '../../store';

const userStateSelector = (state: RootState) => state.user;

export const userSelector = createSelector(
	userStateSelector,
	({user}) => user,
);