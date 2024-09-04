
import { Toolbar, Container, Grid, Typography } from "@mui/material";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { blue } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Helmet } from "react-helmet";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  ...(props => ({
    transform: props.expand ? "rotate(180deg)" : "rotate(0deg)",
  })),
}));

export default function HomePage() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Courses</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Toolbar />
      <Typography variant="h4" align="center" gutterBottom>
        Welcome to Our Course Site
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        Explore a variety of courses designed to enhance your skills and knowledge. Whether you're looking to advance your career or learn something new, we have something for everyone.
      </Typography>
    </Container>
  );
}
