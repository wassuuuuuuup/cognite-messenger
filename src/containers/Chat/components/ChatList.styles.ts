import {makeStyles} from '@material-ui/core/styles';

import {DRAWER_WIDTH} from '../../App/app.constants';

export const chatListStyles = makeStyles((theme) => ({
	paper: {
		width: DRAWER_WIDTH,
		flexShrink: 0,
		whiteSpace: 'nowrap',
	},
	list: {
		'& a': {
			textDecoration: 'none',
			color: 'inherit',
		},
		'& .active > *': {
			backgroundColor: theme.palette.grey[300]
		}
	},
	listItem: {
		paddingLeft: theme.spacing(3),
	},
	toolbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
	},
}));