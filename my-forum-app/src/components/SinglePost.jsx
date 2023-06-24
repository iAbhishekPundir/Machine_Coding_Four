import { BookmarkBorderOutlined, BookmarkOutlined, ChatBubbleOutline, Comment, Favorite, FavoriteBorder, MoreVert, Share, ShareLocation, ShareOutlined } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";

const SinglePost = ({ posts }) => {
    console.log(posts);
    const [handleBookmark, setHandleBookmark] = useState(false);
  const {
    postId,
    username,
    name,
    picUrl,
    post,
    postDescription,
    upvotes,
    downvotes,
    tags,
    createdAt,
    comments,
    isBookmarked,
  } = posts;
  const toggleBookmark = () => {
        setHandleBookmark(!handleBookmark);
  }
  return (
    <Card sx={{ margin: 5 }}>
      <CardContent sx={{border:"1px solid gray"}}>
        <div>
          <div>
            <div>
              <Button>
                <ArrowDropUpIcon />
              </Button>
            </div>
            <div>
              <Typography sx={{ marginLeft: "16px" }}>
                {upvotes - downvotes}
              </Typography>
            </div>
            <div>
              <Button>
                <ArrowDropDownIcon />
              </Button>
            </div>
          </div>
          <div>
            <Typography><b>{post}</b></Typography>
          </div>
          <div>
            {tags.map((tag)=>(
                <span style={{marginRight:"10px"}}><button>{tag}</button></span>
            ))}
          </div>
          <div>
          <Typography variant="body2" color="text.secondary" sx={{margin:"10px"}}>
            {postDescription}
          </Typography>
          </div>
          <Divider/>
          <div style={{display:"flex", justifyContent:"space-between", margin:"10px"}}>
            <div><ChatBubbleOutline/></div>
            <div><ShareOutlined/></div>
            {handleBookmark ? <div onClick={toggleBookmark}><BookmarkBorderOutlined/></div> : <div onClick={toggleBookmark}><BookmarkOutlined/></div>}

          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SinglePost;
