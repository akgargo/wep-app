import React, { useMemo } from 'react';
import ReactWebChat, { Components, createDirectLine } from 'botframework-webchat';
import PropTypes from 'prop-types'
import { Paper, makeStyles } from '@material-ui/core'
import clsx from 'clsx'

const useStyles = makeStyles({
	root: {
		position: 'fixed',
		width: '100vw',
		height: '100vh',
		background:'red',
	},

	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
});

function ChatBot(props) {
	const classes = useStyles()
	const directLine = 'sad'//useMemo(() => createDirectLine({ token: 'nNpEi-qn3z0.N6LZYgHtcb0L2M_2Sb4T4grQGmDRkPO4V_TUHOJI-28' }), []);

	return (
		<Paper className={clsx(classes.root)}>
			{ Boolean(directLine) && <Components.Composer>
				<div style={{ width: '400px', height: '600px' }}>
					<ReactWebChat directLine={directLine} userID="YOUR_USER_ID" />
				</div>
			</Components.Composer> }
		</Paper>
	)
}

ChatBot.propTypes = {

}

export default ChatBot

