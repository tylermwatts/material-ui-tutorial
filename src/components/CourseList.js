import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Course from "../components/Course";
import * as contentful from "contentful";

const SPACE_ID = "e8drzbikyrej";
const ACCESS_TOKEN =
  "4e816bc09519ff8d67b0c20d95a0b2c6825d6b91d7e689c10254d0ed34423e9c";

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
});

class CourseList extends Component {
  state = {
    courses: [],
    searchString: ""
  };

  constructor() {
    super();
    this.getCourses();
  }

  getCourses = () => {
    client
      .getEntries({
        content_type: "course",
        query: this.state.searchString
      })
      .then(response => {
        this.setState({ course: response.items });
      })
      .catch(err => {
        console.log("Error occurred while fetching courses");
        console.log(err);
      });
  };

  onSearchInputChange = e => {
    if (e.target.value) {
      this.setState({ searchString: e.target.value });
    } else {
      this.setState({ searchString: "" });
    }
    this.getCourses();
  };

  render() {
    const { courses } = this.state;
    return (
      <div>
        {courses ? (
          <div>
            <TextField
              style={{ padding: "24px" }}
              id="searchInput"
              placeholder="Search for Courses"
              margin="normal"
              onChange={this.onSearchInputChange}
            />
            <Grid containter spacing={24} style={{ padding: "24px" }}>
              {courses.map(c => (
                <Grid item xs={12} sm={6} lg={4} xl={3}>
                  <Course course={c} />
                </Grid>
              ))}
            </Grid>
          </div>
        ) : (
          "No courses found"
        )}
      </div>
    );
  }
}

export default CourseList;
