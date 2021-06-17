
import React,{useState,useEffect} from 'react'
import {Form,Col,Row,Image} from 'react-bootstrap'
import clsx from 'clsx';
import { v4 as uuidv4 } from 'uuid'
import { Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Alert from '@material-ui/lab/Alert';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './listitems';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import LinearProgress from '@material-ui/core/LinearProgress';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

import firebase from 'firebase'
import 'firebase/storage'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
        marginTop: theme.spacing(2),
      },
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));


const firebaseConfig = {
  apiKey: "AIzaSyCoxsQrrNSc54FPwv11Nxel8R2FWKzR8QI",
  authDomain: "cwtch-org.firebaseapp.com",
  databaseURL: "https://cwtch-org-default-rtdb.firebaseio.com",
  projectId: "cwtch-org",
  storageBucket: "cwtch-org.appspot.com",
  messagingSenderId: "241154349997",
  appId: "1:241154349997:web:bef958c65fda10a0efdf24",
  measurementId: "G-26ZP20RQYH"
};

  // Initialize Firebase

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }







export default function AddPostTags() {

    
    

    

    const [coretheme, setcoretheme] = useState('');
    const [suggtheme, setsuggtheme] = useState('');


    // const getCoreTheme = () => {
    //     firebase.database().ref('/theme').on( 'value' , snapshot => {
    //         const snap = snapshot.val();
    //         console.log(snap);
    //         setcoretheme(Object.values(snap))
    //     })
    // }
    
    // const getSuggestedTopic = () => {
    //     firebase.database().ref('/suggested').on( 'value' , snapshot => {
    //         const sugg = snapshot.val();    
    //         console.log(sugg);
    //         setsuggtheme(Object.values(sugg))
    //     })
    // }
    const [thmeTitle, setthmeTitle] = useState('');
    const [thmeTitle1, setthmeTitle1] = useState('');

    const [progress, setProgress] = useState(false);
    const [showFile, setshowFile] = useState(true)

    const [logourl, setlogourl] = useState('');


    const [logo, setlogo] = useState(null);


    const [newsTitle, setnewsTitle] = useState('');
    const [newsContent, setnewsContent] = useState('');

    // Add Tags State and handler

    const [tags, settags] = useState('');


    const handleThemeLogo = (e) => {
        setlogo(e.target.files[0])
    }

    const uploadPic = (e) => {
        e.preventDefault();
        setProgress(true)
        setshowFile(false)
        let file = logo;
        var storage = firebase.storage();
        var storageRef = storage.ref();
        var uploadTask = storageRef.child(`news/pic/${file.name}`).put(file);

        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
            (snapshot) =>{
              var progress = Math.round((snapshot.bytesTransferred/snapshot.totalBytes))*100

            },(error) =>{
              throw error
            },() =>{
              // uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) =>{
        
              uploadTask.snapshot.ref.getDownloadURL().then((url) =>{
                setlogourl(url)
                setProgress(false)
              })
        
           }
         ) 
    }

    const onSubmitTheme = (e) => {
        e.preventDefault();
        const id = uuidv4();
        firebase.database().ref(`/post/tags/`).set({
            tag:tags
        }).then(() => {
            settags('')
            console.log("Done")

            return <Alert severity="warning">Uploaded</Alert>
        }).catch(err => {
            console.log(err)
        })
    }


    

    const handleThemeTitle = (event) => {
      settags(event.target.value);
    }

    const handleThemeTitle1 = (event) => {
        setthmeTitle1(event.target.value);
    }



    const [opene, setopene] = useState(false)
    const [openee, setopenee] = useState(false)
    const [openeee, setopeneee] = useState(false)
    const [age, setAge] = useState('');
    const [agee, setAgee] = useState('');
    const [ageee, setAgeee] = useState('');

    const [url, seturl] = useState('');
    const handleChange1 = (event) => {
        setAge(event.target.value);
      };
    
      const handleClose1 = () => {
        setopene(false);
      };

      const handleURL = (e) => {
        seturl(e.target.value)
      }
    
      const handleOpen1 = () => {
        setopene(true);
      };
      const handleChange2 = (event) => {
        setAgee(event.target.value);
      };
    
      const handleClose2 = () => {
        setopenee(false);
      };
    
      const handleOpen2 = () => {
        setopenee(true);
      };
      const handleChange3 = (event) => {
        setAgeee(event.target.value);
      };
    
      const handleClose3 = () => {
        setopeneee(false);
      };
    
      const handleOpen3 = () => {
        setopeneee(true);
      };

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);





  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Post Section
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
      style={{height:'100%',width:200}}
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
        <Link to="/">
        <ListItem button >
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    </Link>
        </List>
        <List>
<Link to="/addt">
<ListItem button>
<ListItemIcon>
<DashboardIcon />
</ListItemIcon>
<ListItemText primary="Add Post Banners" />

</ListItem>
</Link>
</List>
<Link to="/addpost">
<List>

<ListItem button>
<ListItemIcon>
<DashboardIcon />
</ListItemIcon>
<ListItemText primary="Add Post" />
</ListItem>
</List>
</Link>
<Link>
<List>

<ListItem button>
<ListItemIcon>
<DashboardIcon />
</ListItemIcon>
<ListItemText primary="Add Featured Post Story" />
</ListItem>
</List>
</Link>
<List>

<ListItem button>
<ListItemIcon>
<DashboardIcon />
</ListItemIcon>
<ListItemText primary="Dashboard" />
</ListItem>
</List>


        <Divider />
       
      </Drawer>

        <div className={classes.appBarSpacer} />

            {/* <div className={classes.root} style={{marginTop:100}}>

                
                <div>
                <div style={{margin: 8,marginRight:500,marginLeft:200,marginTop:50}}>
                <FormControl className={classes.formControl}>
                    <div className={classes.root} component="h2">
                    Add Core Theme to the News
                    </div> 
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={opene}
          onClose={handleClose1}
          onOpen={handleOpen1}
          value={age}
          onChange={handleChange1}
        >
            {coretheme && coretheme.map((item,index) => {
                    return(
                        <MenuItem value={item.title}>
                        <em>{item.title}</em>
                      </MenuItem>
                    )
            })

            }
    
        </Select>

      </FormControl>
                </div>
                <div style={{margin: 8,marginRight:500,marginLeft:200,marginTop:50}}>
                <FormControl className={classes.formControl}>
                    <div className={classes.root} component="h2">
                    Add Category
                    </div> 
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={openee}
          onClose={handleClose2}
          onOpen={handleOpen2}
          value={agee}
          onChange={handleChange2}
        >
             <MenuItem value="">
            My Feed
          </MenuItem>
          <MenuItem value="All News">All News</MenuItem>
          <MenuItem value="Top Stories">Top Stories</MenuItem>
          <MenuItem value="Trending">Trending</MenuItem>
          <MenuItem value="Bookmarks">Bookmarks</MenuItem>
          <MenuItem value="Unreal">Unreal</MenuItem>


         
        </Select>
      </FormControl>
                </div>
                <div style={{margin: 8,marginRight:500,marginLeft:200,marginTop:50}}>
                <FormControl className={classes.formControl}>
                    <div className={classes.root} component="h2">
                    Add Suggested Topics
                    </div> 
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={openeee}
          onClose={handleClose3}
          onOpen={handleOpen3}
          value={ageee}
          onChange={handleChange3}
        >
           {suggtheme && suggtheme.map((item,index) => {
                    return(
                        <MenuItem value={item.title}>
                        <em>{item.title}</em>
                      </MenuItem>
                    )
            })

            }
        </Select>
      </FormControl>
      <div style={{marginLeft:200,marginTop:50}}>

{showFile ? (
<div>
<Form>
<Form.Group>
<Form.File type="file" id="file" label="Upload the logo for Topic" onChange={handleThemeLogo}/>
</Form.Group>
</Form>
<Button variant="contained" color="secondary" onClick={uploadPic}>
Upload
</Button>
</div>
) : (
   (progress && !showFile) ? (
    <LinearProgress />

   ) : (
        <div>
            <Alert severity="success">Logo upload done</Alert>
            </div>
   )

   
)

}

</div>
                </div> */}
               <div style={{marginTop:150}}>
        <TextField
          id="outlined-full-width"
          label="Enter the Theme Title"
          style={{ margin: 8,marginRight:500,marginLeft:200,marginTop:50 }}
          placeholder="Tags with topics"
          helperText="Add Post Tags Here"
          fullWidth
          margin="normal"
          onChange={handleThemeTitle}
          value={tags}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        </div>
            {/* <div>

            <TextField
          id="outlined-full-width"
          label="Enter the Theme Title"
          style={{ margin: 8,marginRight:500,marginLeft:200,marginTop:50 }}
          placeholder="Topic"
          helperText="Enter the Headlines Details"
          fullWidth
          margin="normal"
          multiline
          onChange={handleThemeTitle1}
          value={thmeTitle1}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
            </div>
            <div>
            <TextField
          id="outlined-full-width"
          label="Enter the Theme Title"
          style={{ margin: 8,marginRight:500,marginLeft:200,marginTop:50 }}
          placeholder="URL of the news"
          helperText="Enter the URL"
          fullWidth
          margin="normal"
          onChange={handleURL}
          value={url}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
            </div> */}


        <div style={{marginLeft:500,marginTop:15}}>
        <Button variant="contained" color="primary"  onClick={onSubmitTheme}>
  Upload
</Button>
        </div>
                    </div>
          

  );
}