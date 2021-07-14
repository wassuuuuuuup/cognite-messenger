import {makeStyles} from '@material-ui/core/styles';
import {DRAWER_WIDTH} from '../../App/app.constants';

export const chatAreaStyles = makeStyles((theme) => ({
	chatArea: {
		paddingLeft: DRAWER_WIDTH,
		height: '100%',
		overflow: 'hidden',
	},
	loading: {
		margin: theme.spacing(-1, -3, 0, -3)
	},
	message: {
		backgroundColor: theme.palette.background.paper,
		borderRadius: theme.shape.borderRadius,
		boxShadow: theme.shadows[2],
		marginBottom: theme.spacing(1),
	},
	myMessage: {
		flexDirection: 'row-reverse',
		textAlign: 'right',
		'& .MuiListItemAvatar-root': {
			minWidth: 'auto',
			marginLeft: theme.spacing(2),
		}
	},
	messageContainer: {
		flexGrow: 1,
		overflow: 'auto',
		padding: theme.spacing(1, 1),
	},
	textareaContainer: {
		padding: theme.spacing(1, 1),
	}
}));