import {IUser} from '../../common/user/user.types';

export interface IMessage {
    id: string;
    text: string;
    author: string;
    chatId: string;
}

export interface IChat {
    id: string;
    messages: IMessage[];
    participants: IUser[];
}

export interface IChatsState {
    list: IChat[],
    loading: boolean;
    selectedLoading: boolean;
}