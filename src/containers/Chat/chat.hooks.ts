import {useSelector} from 'react-redux';

import {IUser} from '../../common/user/user.types';
import {userSelector} from '../../common/user/user.selectors';
import {chatListSelector} from './chat.selectors';
import {IChat} from './chat.types';

export function useRecipient(id: string): IUser | undefined {
	const user = useSelector(userSelector);
	const chats = useSelector(chatListSelector);
	const chat = chats.find((chat) => chat.id === id);

	if (!chat) return;
	return chat.participants.filter((participant: IUser) => participant.id !== user?.id)[0];
}

export function useSelectedChat(chatId: string | undefined): IChat | undefined {
	const chats = useSelector(chatListSelector);
	return chats.find(({id}) => id === chatId);
}