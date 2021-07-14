import React from 'react';
import ChatList from './components/ChatList';
import ChatArea from './components/ChatArea';

function ChatContainer(): JSX.Element {
	return (
		<>
			<ChatList />
			<ChatArea />
		</>
	);
}

export default ChatContainer;