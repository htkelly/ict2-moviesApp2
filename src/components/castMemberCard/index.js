import React, { useContext  } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";
import StarRateIcon from "@material-ui/icons/StarRate";
import Grid from "@material-ui/core/Grid";
import { MoviesContext } from "../../contexts/moviesContext";

const useStyles = makeStyles({
  card: { maxWidth: 173 },
  media: { height: 250 },
});

export default function CastMemberCard({ actor }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.header}
        title={
          <Typography variant="h5" component="p">
            {actor.name}{" "}
          </Typography>
        }
      />
      <CardMedia
        className={classes.media}
        image={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
            : `${process.env.PUBLIC_URL}/assets/actor.jpg`
        }
      />
      <CardContent>
        <Typography variant="h6" component="p">
          as {actor.character}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Link to={`/actors/${actor.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            Bio...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}