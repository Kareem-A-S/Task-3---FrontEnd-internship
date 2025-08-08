import * as React from "react";
import Avatar from "@mui/joy/Avatar";
import AvatarGroup from "@mui/joy/AvatarGroup";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardActions from "@mui/joy/CardActions";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import ratingPhoto from "./assets/rating.png";
export default function BottomActionsCard(params) {
  return (
    <Card
      variant="outlined"
      sx={{
        width: 320,
        // to make the card resizable
        overflow: "auto",
        resize: "horizontal",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Avatar src="/static/images/avatar/1.jpg" size="lg" />
        <AvatarGroup size="sm" sx={{ "--Avatar-size": "28px" }}>
          <img className="review-photo" src={ratingPhoto} />
        </AvatarGroup>
      </Box>
      <CardContent>
        <Typography level="title-lg">Reviewer</Typography>
        <Typography level="body-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </CardContent>
    </Card>
  );
}
