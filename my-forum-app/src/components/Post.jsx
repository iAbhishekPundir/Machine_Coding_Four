import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useContext } from "react";
import { ForumContext } from "../context/ForumContext";
import SinglePost from "./SinglePost";
const Post = () => {
  const { forumData } = useContext(ForumContext);
  const { accountId, username, name, picUrl, posts } = forumData;
  console.log(forumData);
  return (
    <>
      <Typography sx={{marginLeft:"40px"}}><h2>Latest Posts</h2></Typography>
      
      {posts.map((posts) => (
        <SinglePost posts={posts} />
      ))}
      </>
  );
};

export default Post;
