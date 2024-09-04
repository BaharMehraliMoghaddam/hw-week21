import { Rating, Toolbar } from "@mui/material";
import { useParams } from "react-router-dom";
import useGetOneCourse from "../Hooks/getOneCourse";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { blue, red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {Helmet} from "react-helmet";
import { SvgSpinnersRingResize } from "../Components/common/spinner/spinnerLoadingShowCourse";

//-----Card----
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));
export default function ShowCourse() {
  const { id } = useParams();
  const { data , isLoading } = useGetOneCourse(id);

  //--------Card----
  const [expanded, setExpanded] = React.useState(false);
  let firstLetter = data?.teacher.split("")[0];

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  //----- Rating----
  const [value, setValue] = React.useState(2);
  if(isLoading){
    return <div>loading ...</div>
  }
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url('/bg-show-course.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Helmet>
                <meta charSet="utf-8" />
                <title>نمایش دوره {data.title ? data?.title : ""}</title>
                <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Toolbar />
      <Card elevation={20} sx={{ minWidth: 500,maxWidth: 500 ,borderRadius:"20px",padding:2}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
              {firstLetter}
            </Avatar>
          }
          //   action={
          //     <IconButton aria-label="settings">
          //       <MoreVertIcon />
          //     </IconButton>
          //   }
          title={data?.teacher}
          subheader={data?.created_datetime}
        />
        <CardMedia
          component="img"
          height="300"
          image={data?.images[0]?.image}
          alt={data?.teacher}
        />
        <CardContent>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", fontWeight: "bold" }}
          >
            sobject : {data?.title}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Typography component="legend" sx={{ fontWeight: "bold" }}>
            satisfaction :
          </Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography sx={{ marginBottom: 2, fontWeight: "bold" }}>
              {data?.category}
            </Typography>
            <Typography sx={{ marginBottom: 2, fontWeight: "bold" }}>
           price of coures : {data?.price}
            </Typography>
            <Typography sx={{ marginBottom: 2, fontWeight: "bold" }}>
            nimber of chapters : {data?.number_of_chapter}
            </Typography>
            <Typography sx={{ marginBottom: 2 }}>
              number of views: {data?.number_of_viewer}
            </Typography>
            <Typography>caption : {data?.description}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
