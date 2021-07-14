import React, {useEffect} from 'react';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import {useDispatch, useSelector} from 'react-redux';

import {chatListStyles} from './ChatList.styles';
import {fetchChats} from '../chat.thunk';
import {chatListLoadingSelector, chatListSelector} from '../chat.selectors';
import ChatListItem from './ChatListItem';

function ChatList(): JSX.Element {
	const classes = chatListStyles();
	const dispatch = useDispatch();
	const chatList = useSelector(chatListSelector);
	const isLoading = useSelector(chatListLoadingSelector);

	useEffect(() => {
		dispatch(fetchChats());
	}, []);

	return (
		<Drawer variant="permanent" classes={{paper: classes.paper}}>
			<div className={classes.toolbar} />
			{isLoading && (
				<LinearProgress
					color="secondary"
					variant="indeterminate"
				/>
			)}
			<List className={classes.list}>
				{
					chatList.map((chat) => (
						<ChatListItem key={chat.id} id={chat.id} />
					))
				}
			</List>
		</Drawer>
	);
}

export default ChatList;