import {makeStyles} from '@material-ui/core/styles';

import {DRAWER_WIDTH} from './app.constants';

export const appStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		height: '100%'
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
	},
	appBarShift: {
		marginLeft: DRAWER_WIDTH,
	},
	menuButton: {
		marginRight: 36,
	},
	hide: {
		display: 'none',
	},
	toolbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
	},
	content: {
		flexGrow: 1,
		display: 'flex',
		flexDirection: 'column'
	},
}));