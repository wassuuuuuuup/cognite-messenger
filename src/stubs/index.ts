import {IChat} from '../containers/Chat/chat.types';

export const chatStub: IChat[] = [
	{
		id: '1',
		participants: [
			{id: '123', name: 'Per Larson'},
			{id: '124', name: 'Ania Malmberg'}
		],
		messages: [
			{id: '12345', author: '124', text: 'Hello', chatId: '1'}
		]
	},
	{
		id: '2',
		participants: [
			{id: '123', name: 'Per Larson'},
			{id: '125', name: 'Hans Peter Malsom'}
		],
		messages: [
			{id: '12345', author: '123', text: 'Hello', chatId: '2'}
		]
	}
];