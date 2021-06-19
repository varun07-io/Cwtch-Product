
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
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';



import firebase from 'firebase'
import 'firebase/storage'



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







export default function AddEpisode() {

    // POST SECTOIN STATES

    const [postTitle, setpostTitle] = useState('');
    const [postDetails, setpostDetails] = useState('');
    const [companyDetails, setcompanyDetails] = useState('');
    const [highlights, sethighlights] = useState('');
    const [fullStory, setfullStory] = useState('');
    const [subStory, setsubStory] = useState('');

    const [productImage, setproductImage] = useState('');
    const [importantLink, setimportantLink] = useState('');

    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    const [linkVideo, setlinkVideo] = useState('');

    const handlePostSection = name => event => {
          switch(name){
            case 'postTitle':
              setpostTitle(event.target.value);
              break;
            case 'postDetails':
              setpostDetails(event.target.value);
              break;
            case 'companyDetails':
              setcompanyDetails(event.target.value);
              break;
            case 'highlights':
              sethighlights(event.target.value);
              break;
            case 'fullStory':
              setfullStory(event.target.value);
              break;
            case 'subStory':
              setsubStory(event.target.value);
              break;
            case 'importantLink':
              setimportantLink(event.target.value);
              break;
            case 'linkVideo':
                setlinkVideo(event.target.value);
            break;

          }
    }



    // function generate(element) {
    //     return [0, 1, 2].map((value) =>
    //       React.cloneElement(element, {
    //         key: value,
    //       }),
    //     );
    //   }
      

      const [videoLinks, setvideoLinks] = useState([]);

    const generate = (element) => {
        return videoLinks.map((ok,value) =>
        React.cloneElement(element, {
          key: value,
          val:ok
        }),
      );
    }

    const addoutubeLinks = () => {
        const newList = videoLinks.slice();
        newList.push(linkVideo);
        setvideoLinks(newList);
        setlinkVideo('')
    }








    useEffect(() => {
      firebase.database().ref('/episode/tags/').on( 'value' , snapshot => {
        const snap = snapshot.val();
        console.log(Object.values(snap));
        setcoretheme(Object.values(snap));
      })

    }, [])
    
    const getAllPostTags = () => {

    }
    

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
    const [progress1, setProgress1] = useState(false);
    const [progress2, setProgress2] = useState(false);


    const [showFile, setshowFile] = useState(true)
    const [showFile1, setshowFile1] = useState(true)
    const [showFile2, setshowFile2] = useState(true)


    const [logourl, setlogourl] = useState('');
    const [logourl1, setlogourl1] = useState('');
    const [logourl2, setlogourl2] = useState('');




    const [logo, setlogo] = useState(null);
    const [logo1, setlogo1] = useState(null);
    const [logo2, setlogo2] = useState(null);




    const [newsTitle, setnewsTitle] = useState('');
    const [newsContent, setnewsContent] = useState('');

    // Add Tags State and handler

    const [tags, settags] = useState('');


    const handleThemeLogo = (e) => {
        setlogo(e.target.files[0])
    }

    const handleThemeLogo1 = (e) => {
      setlogo1(e.target.files[0])
  }

  const handleThemeLogo2 = (e) => {
    setlogo2(e.target.files[0])
}
    const uploadPic = (e) => {
        e.preventDefault();
        setProgress(true)
        const ID = uuidv4();
        setshowFile(false)
        let file = logo;
        var storage = firebase.storage();
        var storageRef = storage.ref();
        var uploadTask = storageRef.child(`episode/thumbnail/${file.name}${ID}`).put(file);

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
    const uploadPic1 = (e) => {
      e.preventDefault();
      setProgress1(true)
      const ID = uuidv4();
      setshowFile1(false)
      let file = logo;
      var storage = firebase.storage();
      var storageRef = storage.ref();
      var uploadTask = storageRef.child(`episode/videos/${file.name}${ID}`).put(file);

      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
          (snapshot) =>{
            var progress = Math.round((snapshot.bytesTransferred/snapshot.totalBytes))*100

          },(error) =>{
            throw error
          },() =>{
            // uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) =>{
      
            uploadTask.snapshot.ref.getDownloadURL().then((url) =>{
              setlogourl1(url)
              setProgress1(false)
            })
      
         }
       ) 
  }

  const uploadPic2 = (e) => {
    e.preventDefault();
    const ID = uuidv4();
    setProgress2(true)
    setshowFile2(false)
    let file = logo;
    var storage = firebase.storage();
    var storageRef = storage.ref();
    var uploadTask = storageRef.child(`eposode/posts/product/${file.name}+${ID}`).put(file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) =>{
          var progress = Math.round((snapshot.bytesTransferred/snapshot.totalBytes))*100

        },(error) =>{
          throw error
        },() =>{
          // uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) =>{
    
          uploadTask.snapshot.ref.getDownloadURL().then((url) =>{
            setlogourl2(url)
            setProgress2(false)
          })
    
       }
     ) 
}

    const onSubmitTheme = (e) => {
        e.preventDefault();
        const id = uuidv4();
        firebase.database().ref(`/episode/posts/${id}`).set({
            tag:age,
            eposodeTitle:postTitle,
            episodeDetails:postDetails,
            companyDetails,
            highlights,
            fullStory,
            subStory,
            importantLink,
            videoLinks,
            mainPostImage:logourl,
            subPostImage:logourl1,
            productImage:logourl2

        }).then(() => {
            setAge('')
            setpostTitle('')
            setpostDetails('')
            setcompanyDetails('')
            sethighlights('')
            setfullStory('')
            setsubStory('')
            setimportantLink('')
            setvideoLinks('')
            setlinkVideo('')
            setlogourl('')
            setlogourl1('')
            setlogourl2('')

            setshowFile(true)
            setshowFile1(true)
            setshowFile2(true)


            
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
            Episode Section
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
<Link to="/addepisodetags">
<ListItem button>
<ListItemIcon>
<DashboardIcon />
</ListItemIcon>
<ListItemText primary="Add Episode Banners" />

</ListItem>
</Link>
</List>
<Link>
<List>

<ListItem button>
<ListItemIcon>
<DashboardIcon />
</ListItemIcon>
<ListItemText primary="Add Episode" />
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

            <div className={classes.root} style={{marginTop:100}}>

                
                <div>
                <div style={{margin: 8,marginRight:500,marginLeft:200,marginTop:50}}>
                <FormControl className={classes.formControl}>
                    <div className={classes.root} component="h2">
                    Add Tags to Episode
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
                        <MenuItem value={item.tag}>
                        <em>{item.tag}</em>
                      </MenuItem>
                    )
            })

            }
    
        </Select>

      </FormControl>
                </div>
             
                <div style={{margin: 8,marginRight:500,marginLeft:200,marginTop:50}}>
               
      <div style={{marginLeft:200,marginTop:50}}>

{showFile ? (
<div>
<h3>Add Thumbnail</h3>

<Form>
<Form.Group>
<Form.File type="file" id="file" label="Upload Post Image Here" onChange={handleThemeLogo}/>
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
            <Alert severity="success">Uploaded Episode Main Image Here</Alert>
            </div>
   )

   
)

}

</div>
<div style={{marginLeft:200,marginTop:50}}>

{showFile1 ? (
<div>
<h3>Add Video</h3>

<Form>
<Form.Group>
<Form.File type="file" id="file" label="Upload Sub Image Here" onChange={handleThemeLogo1}/>
</Form.Group>
</Form>
<Button variant="contained" color="secondary" onClick={uploadPic1}>
Upload
</Button>
</div>
) : (
   (progress1 && !showFile1) ? (
    <LinearProgress />

   ) : (
        <div>
            <Alert severity="success">Uploaded Post Main Image Here</Alert>
            </div>
   )

   
)

}

</div>
                </div>
               <div style={{marginTop:50}}>
        <h3>Add Episode Title</h3>
        <TextField
          id="outlined-full-width"
          label="Enter the Theme Title"
          style={{ margin: 8,marginRight:500,marginLeft:200,marginTop:50 }}
          placeholder="Add Post Title"
          helperText="Add Post Title Here"
          fullWidth
          margin="normal"
          onChange={handlePostSection("postTitle")}
          value={postTitle}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        </div>
        <div>
        <h3>Add Video Linkes</h3>
        <TextField
          id="outlined-full-width"
          label="Enter the Theme Title"
          style={{ margin: 8,marginRight:500,marginLeft:200,marginTop:50 }}
          placeholder="Add Post Title"
          helperText="Add Post Title Here"
          fullWidth
          margin="normal"
          onChange={handlePostSection("linkVideo")}
          value={linkVideo}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <div className={classes.demo}>
            <List dense={dense}>
            
                 {videoLinks.map((val) => {
                     return(
                        <ListItem>
                        <ListItemText
                          primary={val}
                          secondary={secondary ? 'Secondary text' : null}
      
                        />
                          </ListItem>
                     )
                 })

                 } 
               

              
            
            </List>
          </div>
          <Button variant="contained" color="secondary" onClick={addoutubeLinks}>
  Secondary
</Button>
        </div>
        <div>
        <h3>Add Video Details</h3>

        <TextField
          id="outlined-full-width"
          label="Enter Post Details Here"
          style={{ margin: 8,marginRight:500,marginLeft:200,marginTop:50 }}
          placeholder="Add Post Details"
          helperText="Add Post Details Here"
          fullWidth
          multiline
          margin="normal"
          onChange={handlePostSection("postDetails")}
          value={postDetails}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        </div>
     
        <div>
        <h3>Add Video Stories</h3>

        <TextField
          id="outlined-full-width"
          label="Enter Post Details Here"
          style={{ margin: 8,marginRight:500,marginLeft:200,marginTop:50 }}
          placeholder="Add Post Details"
          helperText="Add Post Details Here"
          fullWidth
          multiline
          margin="normal"
          onChange={handlePostSection("highlights")}
          value={highlights}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        </div>
        <div>
        <h3>Add Full Story</h3>

        <TextField
          id="outlined-full-width"
          label="Enter Post Details Here"
          style={{ margin: 8,marginRight:500,marginLeft:200,marginTop:50 }}
          placeholder="Add Post Details"
          helperText="Add Post Details Here"
          fullWidth
          multiline
          margin="normal"
          onChange={handlePostSection("fullStory")}
          value={fullStory}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        </div>
       
        {/* <div>

        <div style={{marginLeft:200,marginTop:50}}>

{showFile2 ? (
<div>
<Form>
<Form.Group>
<Form.File type="file" id="file" label="Upload Post Image Here" onChange={handleThemeLogo2}/>
</Form.Group>
</Form>
<Button variant="contained" color="secondary" onClick={uploadPic2}>
Upload
</Button>
</div>
) : (
   (progress2 && !showFile2) ? (
    <LinearProgress />

   ) : (
        <div>
            <Alert severity="success">Uploaded Post Main Image Here</Alert>
            </div>
   )

   
)

}

</div>
<h3>Add Link</h3>

        <TextField
          id="outlined-full-width"
          label="Enter Post Details Here"
          style={{ margin: 8,marginRight:500,marginLeft:200,marginTop:50 }}
          placeholder="Add Post Details"
          helperText="Add Post Details Here"
          fullWidth
          multiline
          margin="normal"
          onChange={handlePostSection("importantLink")}
          value={importantLink}
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
        </div>

                    </div>
          

  );
}