import React, { Component } from "react";
import { SelectList } from "react-widgets";
import fetchPostAPI from "./commons/fetchPostAPI";
import fetchGetAPI from "./commons/fetchGetAPI";
import config from "./config.json";
import fetchDeleteAPI from "./commons/fetchDeleteAPI";
class Exercise extends Component {
  state = {
    exercise: "run",
    calorie: 10,
    value: "running",
    time: "minutes",
    duration: 0,
    todayTotal: 0,
    records: [],
    dailyGoal: 300,
    show: "collapse",
    newDailyGoal: 0
  };
  async componentDidMount() {
    this.setState({
      todayTotal: await fetchGetAPI(
        config.apiEndPoint + "/calories/2019-7-10/total"
      )
    });
    fetchGetAPI(config.apiEndPoint + "/profiles/Weiwei").then(data =>
      this.setState({ dailyGoal: data.dailyGoal })
    );
    this.setState({
      records: await fetchGetAPI(config.apiEndPoint + "/calories/2019-7-10")
    });
  }
  fetchCalorie = async query => {
    await fetch("https://trackapi.nutritionix.com/v2/natural/exercise", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        "x-app-key": "d1f7ab9e52b72ffdcace031cd9fb3e75",
        "x-app-id": "04ca317f"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrer: "no-referrer", // no-referrer, *client
      body: JSON.stringify({
        query: query,
        gender: "female",
        weight_kg: 50,
        height_cm: 160,
        age: 33
      }) // body data type must match "Content-Type" header
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ calorie: Math.round(data.exercises[0].nf_calories) });
      }); // parses JSON response into native Javascript objects
  };
  handleSelectExercise(value) {
    this.setState({ value: value });
    if (this.state.duration > 0) {
      let duration = this.state.duration;
      if (this.state.time === "hours") {
        duration = 60 * duration;
      }
      let query = value + " " + duration + " " + "minutes";
      this.fetchCalorie(query);
    }
    //call back function to get the updated value for console
  }
  handleSelectTime = event => {
    this.setState({ time: event.target.name });
    if (this.state.duration > 0) {
      let duration = this.state.duration;
      if (event.target.name === "hours") {
        duration = 60 * duration;
      }

      let query = this.state.value + " " + duration + " " + "minutes";
      this.fetchCalorie(query);
    }
  };

  handleTimeChange = async event => {
    this.setState({ duration: event.target.value });
    let duration = event.target.value;
    if (this.state.time === "hours") {
      duration = 60 * event.target.value;
    }
    let query = this.state.value + " " + duration + " " + "minutes";
    this.fetchCalorie(query);
  };

  handleSubmit = async () => {
    //submit new exercise
    let time = new Date();
    //date in format "2019-7-9"
    let date =
      time.getFullYear() + "-" + (time.getMonth() + 1) + "-" + time.getDate();
    let workout = this.state.value;
    let calorieBurned = this.state.calorie;
    let duration = this.state.duration;
    if (this.state.time === "hours") duration = duration * 60;
    let body = JSON.stringify({
      time: time.toLocaleString(),
      calorieBurned: calorieBurned,
      workout: workout,
      date: "2019-7-10",
      duration: duration
    });
    await fetchPostAPI(config.apiEndPoint + "/calorie/", "POST", body);
    this.setState({
      todayTotal: await fetchGetAPI(
        config.apiEndPoint + "/calories/2019-7-10/total"
      ),
      records: await fetchGetAPI(config.apiEndPoint + "/calories/2019-7-10/")
    });
  };

  handleCancel = () => {
    this.setState({ show: "collapse" });
  };

  handleEdit = () => {
    this.setState({
      show: this.state.show === "collapse" ? "collapse show" : "collapse"
    });
  };

  handleChangeDailyGoal = event => {
    this.setState({ newDailyGoal: event.target.value });
  };
  handleSave = async () => {
    //save new daily goal
    let newDailyGoal = this.state.newDailyGoal;
    await fetchPostAPI(
      config.apiEndPoint + "/profiles/Weiwei/" + newDailyGoal,
      "POST",
      {}
    );
    this.setState({ dailyGoal: this.state.newDailyGoal });
  };

  handleDelete = async event => {
    await fetchDeleteAPI(
      config.apiEndPoint +
        "/profiles/Weiwei/calories/" +
        event.currentTarget.name
    );
    this.setState({
      records: await fetchGetAPI(config.apiEndPoint + "/calories/2019-7-10")
    });
  };
  render() {
    const colors = [
      "running",
      "walking",
      "hiit",
      "cardio",
      "yoga",
      "elliptial"
    ];
    return (
      <React.Fragment>
        <div
          className="card  mb-3 ml-5 mt-5"
          style={{
            borderColor: "#9cd1f8",
            display: "inline-block",
            width: "40%"
          }}
        >
          <div
            className="card-header bg-transparent"
            style={{ borderColor: "#9cd1f8" }}
          >
            <h5>Today's Workout</h5>
          </div>
          <div className="card-body ">
            {" "}
            <span>{this.state.todayTotal} Caloreis Burned</span>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped bg-success"
                role="progressbar"
                style={{
                  width:
                    this.state.todayTotal / this.state.dailyGoal >= 1
                      ? "100%"
                      : Math.round(
                          (this.state.todayTotal / this.state.dailyGoal) * 100
                        ) + "%"
                }}
                aria-valuenow={this.state.todayTotal}
                aria-valuemin="0"
                aria-valuemax={this.state.dailyGoal}
              >
                {this.state.todayTotal / this.state.dailyGoal >= 1
                  ? "100%"
                  : Math.round(
                      (this.state.todayTotal / this.state.dailyGoal) * 100
                    ) + " %"}
              </div>
            </div>
          </div>
          <div
            className="card-footer bg-transparent"
            style={{ borderColor: "#9cd1f8" }}
          >
            <div style={{ display: "inline-block" }}>
              Your goal to burn daliy is {this.state.dailyGoal} Calories
              <i //button to edit the daily dailyGoal
                className="fa fa-pencil-square-o ml-2"
                aria-hidden="true"
                style={{ cursor: "pointer" }}
                onClick={this.handleEdit}
              />
              <div //div to show the form of editing dailyGoal
                className={this.state.show}
                id="collapseExample"
              >
                <div className="card card-body">
                  <div className="row">
                    <div className="col-8">
                      <input
                        type="number"
                        min="0"
                        placeholder="Enter your daily goal"
                        step="2.5"
                        className="mb-2"
                        onChange={this.handleChangeDailyGoal}
                      />
                    </div>
                    <div className="col-4">Calories </div>
                  </div>
                  <div className="row ">
                    <button
                      className="btn btn-sm ml-3 btn-outline-secondary"
                      onClick={this.handleSave}
                    >
                      Save
                    </button>
                    <button
                      onClick={this.handleCancel}
                      className="btn btn-sm ml-3 btn-outline-secondary"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="card  mb-3 ml-5 mt-5"
          style={{
            borderColor: "#9cd1f8",
            width: "40%"
          }}
        >
          <div
            className="card-header bg-transparent"
            style={{ borderColor: "#9cd1f8" }}
          >
            <h5>Add new exercise</h5>
          </div>
          <div className="card-body ">
            <div>
              <label>
                <span>Exercise</span>
                <SelectList
                  data={colors}
                  defaultValue={"running"}
                  onChange={value => this.handleSelectExercise(value)}
                />
              </label>
            </div>
            <div className="input-group">
              <input
                type="number"
                className="form-control"
                placeholder="Time"
                aria-label="Time"
                aria-describedby="button-addon4"
                onChange={this.handleTimeChange}
              />

              <div className="btn-group btn-group-toggle" data-toggle="button">
                <label
                  className={
                    this.state.time === "minutes"
                      ? "btn btn-outline-secondary active"
                      : "btn btn-outline-secondary"
                  }
                >
                  <input
                    type="radio"
                    name="minutes"
                    checked={this.state.time === "minutes"}
                    onChange={this.handleSelectTime}
                  />
                  minutes
                </label>
                <label
                  className={
                    this.state.time === "hours"
                      ? "btn btn-outline-secondary active"
                      : "btn btn-outline-secondary"
                  }
                >
                  <input
                    type="radio"
                    name="hours"
                    checked={this.state.time === "hours"}
                    onChange={this.handleSelectTime}
                  />
                  hours
                </label>
              </div>
            </div>

            <div className="mt-2">
              {this.state.duration > 0 && (
                <span>
                  I did {this.state.duration} {this.state.time}{" "}
                  {this.state.value}. <br />
                  Total calories estimated: {Math.round(
                    this.state.calorie
                  )}{" "}
                  Calories.
                </span>
              )}
            </div>
          </div>
          <div
            className="card-footer bg-transparent"
            style={{ borderColor: "#9cd1f8" }}
          >
            <div style={{ display: "inline-block" }}>
              <button
                type="button"
                className="btn btn-sm ml-2"
                style={{ backgroundColor: "#9cd1f8", color: "white" }}
                onClick={this.handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>

        <div
          name="show records"
          id="left"
          style={{
            borderColor: "#9cd1f8"
          }}
        >
          <table className="table  table-hover">
            <thead>
              <tr>
                <th scope="col">Time</th>
                <th scope="col">Workout</th>
                <th scope="col">Duration/minutes</th>
                <th scope="col">Calories</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.records.map(record => (
                <tr key={record.id}>
                  <td>{record.time}</td>
                  <td>{record.workout}</td>
                  <td>{record.duration}</td>
                  <td>{record.calorieBurned}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      name={record.id}
                      onClick={this.handleDelete}
                    >
                      <i className="fa fa-trash-o" aria-hidden="true" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}
export default Exercise;
