import React from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';

import {appStyles} from './app.styles';
import store from '../../store';
import {ROUTES} from '../../common/constants';
import Chat from '../Chat';

function App(): JSX.Element {
	const classes = appStyles();

	return (
		<Router>
			<Provider store={store}>
				<div className={classes.root}>
					<CssBaseline />
					<AppBar
						position="fixed"
						className={clsx(classes.appBar, {
							[classes.appBarShift]: open,
						})}
					>
						<Toolbar>
							<Typography variant="h6" noWrap>Cognito Messenger</Typography>
						</Toolbar>
					</AppBar>
					<main className={classes.content}>
						<div className={classes.toolbar} />
						<Switch>
							<Route path={ROUTES.ROOT}><Chat /></Route>
							<Redirect from="*" to="/" />
						</Switch>
					</main>
				</div>
			</Provider>
		</Router>
	);
}

export default App;