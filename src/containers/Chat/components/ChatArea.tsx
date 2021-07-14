import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {useRouteMatch} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {
	Avatar,
	Grid, IconButton,
	InputAdornment,
	LinearProgress,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	TextField
} from '@material-ui/core';
import {Send} from '@material-ui/icons';
import clsx from 'clsx';

import {chatAreaStyles} from './ChatArea.styles';
import {fetchChat, sendMessage} from '../chat.thunk';
import {MatchParams} from '../../../common/types';
import {ROUTES} from '../../../common/constants';
import {selectedChatLoadingSelector} from '../chat.selectors';
import {IMessage} from '../chat.types';
import {IUser} from '../../../common/user/user.types';
import {userSelector} from '../../../common/user/user.selectors';
import {useSelectedChat} from '../chat.hooks';


function ChatArea(): JSX.Element {
	const scrollRef = useRef<HTMLDivElement>(null);
	const classes = chatAreaStyles();
	const match = useRouteMatch<MatchParams>(ROUTES.CHAT);
	const user = useSelector(userSelector);
	const isLoading = useSelector(selectedChatLoadingSelector);
	const chat = useSelectedChat(match?.params.id);
	const dispatch = useDispatch();
	const [message, setMessage] = useState('');

	const getAuthor = useCallback(({author}: IMessage): IUser | undefined => {
		if (!chat) return;
		return chat.participants.find((participant: IUser) => participant.id === author);
	}, [chat?.participants]);

	const onChange = useCallback(({target: {value}}) => setMessage(value), []);

	const onSend = useCallback(() => {
		if (user && chat) {
			setMessage('');
			dispatch(sendMessage({
				text: message,
				author: user.id,
				chatId: chat.id,
			}));
		}
	}, [user?.id, chat?.id, message, dispatch, sendMessage]);

	const onKeyDown = useCallback((e) => {
		if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
			onSend();
		}
	}, [onSend]);

	const endAdornment = useMemo(() => (
		<IconButton disabled={!message} onClick={onSend}>
			<InputAdornment position="end">
				<Send />
			</InputAdornment>
		</IconButton>
	), [onSend, message]);

	const scrollBottom = useCallback((smooth: boolean) => {
		if (!scrollRef.current) return;
		scrollRef.current.scrollTo({
			top: scrollRef.current.scrollHeight,
			left: 0,
			behavior: smooth ? 'smooth' : 'auto'
		});
	}, []);

	useEffect(() => {
		// smooth scroll on new message
		scrollBottom(true);
	}, [chat?.messages.length]);

	useEffect(() => {
		// immediate scroll after the loading completed
		scrollBottom(false);
	}, [isLoading]);

	useEffect(() => {
		if (match && match.isExact && match.params.id) {
			dispatch(fetchChat(match.params.id));
		}
	}, [dispatch, match?.params.id]);

	return (
		<Grid container className={classes.chatArea} direction="column" wrap="nowrap">
			<Grid item className={classes.messageContainer} ref={scrollRef}>
				{
					isLoading ?
						(
							<LinearProgress
								color="secondary"
								variant="indeterminate"
								className={classes.loading}
							/>
						) :
						(
							<List>
								{
									chat?.messages.map((msg) => {
										const author = getAuthor(msg);
										const isMyMessage = msg.author === user?.id;
										const name = author ?
											`${author.name}${isMyMessage ? ' (You)' : ''}` :
											'No name';
										return (
											<ListItem
												key={msg.id}
												className={clsx(classes.message, {
													[classes.myMessage]: isMyMessage,
												})}
											>
												<ListItemAvatar><Avatar /></ListItemAvatar>
												<ListItemText
													primary={name}
													secondary={msg.text}
												/>
											</ListItem>
										);
									})
								}
							</List>
						)
				}
			</Grid>
			<Grid item className={classes.textareaContainer}>
				<TextField
					rows={3}
					value={message}
					label="Type and press Cmd + Enter to send message"
					variant="outlined"
					onChange={onChange}
					onKeyDown={onKeyDown}
					multiline
					fullWidth
					InputProps={{endAdornment}}
				/>
			</Grid>
		</Grid>
	);
}

export default ChatArea;