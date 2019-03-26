import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const Course = props => {
  const { course } = props.course;
  return (
    <div>
      {course ? (
        <Card>
          <CardMedia
            style={{ height: 0, padding: "56.25%" }}
            image={course.fields.courseImage.fields.file.url}
            title={course.fields.title}
          />
          <CardContent>
            <Typography gutterBottom variant="headling" component="h2">
              {course.fields.title}
            </Typography>
            <Typography component="p">{course.fields.description}</Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color="primary"
              href={course.fields.url}
              target="_blank"
            >
              Go To Course
            </Button>
          </CardActions>
        </Card>
      ) : null}
    </div>
  );
};

export default Course;
