import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import {NavLink} from 'react-router-dom';

import {useRecipient} from '../chat.hooks';
import {chatListItemStyles} from './ChatListItem.styles';

interface IChatListItemProps {
	id: string;
}

function ChatListItem({id}: IChatListItemProps) {
	const classes = chatListItemStyles();
	const recipient = useRecipient(id);
	return (
		<NavLink to={`/${id}`}>
			<ListItem button className={classes.listItem}>
				<ListItemAvatar><Avatar /></ListItemAvatar>
				<ListItemText primary={recipient?.name} />
			</ListItem>
		</NavLink>
	);
}

export default React.memo(ChatListItem);