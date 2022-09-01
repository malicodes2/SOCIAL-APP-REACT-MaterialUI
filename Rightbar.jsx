import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography, Divider, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import React from 'react'

const Rightbar = () => {
    return (
        <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
            <Box position="fixed" width={300}>
                <Typography variant="h6" fontWeight={100} mt={2} mb={2}>Online Friends</Typography>
                <AvatarGroup max={7}>
                    <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/3.jpg" />
                    <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/4.jpg" />
                    <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/5.jpg" />
                    <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/6.jpg" />
                    <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/7.jpg" />
                    <Avatar alt="George" src="https://material-ui.com/static/images/avatar/1.jpg" />
                    <Avatar alt="Dakota" src="https://material-ui.com/static/images/avatar/2.jpg" />
                    <Avatar alt="Dakota" src="https://material-ui.com/static/images/avatar/2.jpg" />
                    <Avatar alt="Dakota" src="https://material-ui.com/static/images/avatar/2.jpg" />
                </AvatarGroup>
                <Typography variant="h6" fontWeight={100}>Latest</Typography>
                <ImageList cols={3} rowHeight={100} gap={5}>
                    <ImageListItem>
                        <img src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e' alt='' />
                    </ImageListItem>
                    <ImageListItem>
                        <img src='https://images.unsplash.com/photo-1522770179533-24471fcdba45' alt='' />
                    </ImageListItem>
                    <ImageListItem>
                        <img src='https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c' alt='' />
                    </ImageListItem>
                    {/* <ImageListItem>
                        <img src='https://images.unsplash.com/photo-1533827432537-70133748f5c8' alt=''/>
                    </ImageListItem>
                    <ImageListItem>
                        <img src='https://images.unsplash.com/photo-1558642452-9d2a7deb7f62' alt=''/>
                    </ImageListItem>
                    <ImageListItem>
                        <img src='https://images.unsplash.com/photo-1516802273409-68526ee1bdd6' alt=''/>
                    </ImageListItem>
                    <ImageListItem>
                        <img src='https://images.unsplash.com/photo-1518756131217-31eb79b20e8f' alt=''/>
                    </ImageListItem>
                    <ImageListItem>
                        <img src='https://images.unsplash.com/photo-1597645587822-e99fa5d45d25' alt=''/>
                    </ImageListItem>
                    <ImageListItem>
                        <img src='https://images.unsplash.com/photo-1567306301408-9b74779a11af' alt=''/>
                    </ImageListItem>
                    <ImageListItem>
                        <img src='https://images.unsplash.com/photo-1471357674240-e1a485acb3e1' alt=''/>
                    </ImageListItem>
                    <ImageListItem>
                        <img src='https://images.unsplash.com/photo-1589118949245-7d38baf380d6' alt=''/>
                    </ImageListItem> */}
                </ImageList>
                <Typography variant="h6" fontWeight={100} mt={2}>Latest Conversations</Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {" — I'll be in your neighborhood doing errands this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Summer BBQ"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        to Scott, Alex, Jennifer
                                    </Typography>
                                    {" — Wish I could come, but I'm out of town this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Oui Oui"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Sandra Adams
                                    </Typography>
                                    {' — Do you have Paris recommendations? Have you ever…'}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
};

export default Rightbar;