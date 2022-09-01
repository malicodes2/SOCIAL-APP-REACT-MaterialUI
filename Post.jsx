import React from 'react'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import { Favorite, Share, MoreVert, FavoriteBorder } from '@mui/icons-material'

const Post = (props) => {
    return (
        <Card sx={{ margin: 5 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: "lightblue" }} aria-label="recipe">
                        T
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                }
                title="Just Travel It!"
                subheader="Sponsored"
            />
            <CardMedia
                component="img"
                height="20%"
                image={props.url}
                alt=""
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas numquam animi inventore nulla, ducimus quasi facere ullam laudantium labore, consectetur, quaerat dicta aperiam.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />
                </IconButton>
                <IconButton aria-label="share">
                    <Share />
                </IconButton>
            </CardActions>

        </Card>
    )
}

export default Post