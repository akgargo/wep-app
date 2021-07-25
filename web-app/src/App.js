import logo from './logo.svg';
import './App.css';
import ChatBot from './components/chatbot';
import { Paper, makeStyles, Box } from '@material-ui/core'
import SideBar from './components/sidebar';
import clsx from 'clsx';
import { useState } from 'react';
import LoginView from './views/login';


const useStyles = makeStyles((theme) => ({
	'@global': {
		html: {
			height: '100%',
		},
		body: {
			height: '100%',
		}
	},
	hidden: {
		display: 'none'
	},
	root: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'nowrap',
		justifyContent: 'flex-start',
		alignContent: 'stretch',
		alignItems: 'flex-start',
		height: '100%',
		width: '100%',
		overflow: 'hidden'
	},
	sidebar: {
		order: '0',
		flex: '0 1 auto',
		alignSelf: 'stretch'
	},
	main: {
		order: '1',
		flex: '1 1 auto',
		alignSelf: 'stretch',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'nowrap',
		justifyContent: 'flex-start',
		alignContent: 'stretch',
		alignItems: 'flex-start',
		// padding: theme.spacing(3),
		height: '100%',
		width: '100%',
	},

	navbar: {
		order: '0',
		flex: '0 1 auto',
		alignSelf: 'stretch',
		height: '4rem',
		width: '100%'
	},
	content: {
		order: '1',
		flex: '1 1 auto',
		alignSelf: 'stretch',
		height: 'calc(100% - 4rem)',
		width: '100%',
		overflowY: 'auto',
		overflowX: 'hidden',
	},
  logo: {
    width: '6vw',
    height: '6vh'
  }
}));

function App() {
	const classes = useStyles();

  const [displaySidebar, setDisplaySidebar] = useState(true)
  const [open, setOpen] = useState(true)
  const [token, setToken] = useState('')
  const handleDrawerClose = () => {}
  const handleDrawerOpen = () => {}
  return (
    Boolean(token) ?
    <Box height="100vh" display="flex" flexDirection="column">
      <Box component="header" className={classes.navbar} >
        <img src={logo} className={classes.logo} alt="logo" />
      </Box>
      <Box component="section" className={classes.content} >
					<Box
						overflow="auto"
						className={clsx(classes.sidebar, {
							[classes.hidden]: !displaySidebar
						})}
					>
						<SideBar
							open={open}
							handleDrawerClose={handleDrawerClose}
							handleDrawerOpen={handleDrawerOpen}
						/>
					</Box>
        <Box flex={1} overflow="auto">
          <section>
            <ChatBot
              style={{ width: '400px', height: '600px' }}
            />
          </section>
        </Box>
      </Box>
    </Box>
    : <LoginView/>
  );
}

export default App;
