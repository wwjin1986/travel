import React, { Component } from "react";
import fetchPostAPI from "./commons/fetchPostAPI";
import fetchGetAPI from "./commons/fetchGetAPI";
import config from "./config.json";
import fetchDeleteAPI from "./commons/fetchDeleteAPI";
import todayDate from "./commons/Time";
class Today extends Component {
  state = {
    todayTotal: 0,
    records: [],
    dailyGoal: 300,
    showGoalForm: "collapse",
    showWeightForm: "collapse",
    newDailyGoal: 0,
    unit: "kg"
  };
  date = todayDate("yyyy-mm-dd");

  async componentDidMount() {
    this.setState({
      todayTotal: await fetchGetAPI(
        config.apiEndPoint + "/calories/" + this.date + "/total"
      )
    });
    fetchGetAPI(config.apiEndPoint + "/profiles/Weiwei").then(data =>
      this.setState({ dailyGoal: data.dailyGoal })
    );
    this.setState({
      records: await fetchGetAPI(config.apiEndPoint + "/calories/" + this.date)
    });
    fetchGetAPI(config.apiEndPoint + "/profiles/Weiwei").then(data =>
      this.setState({ weight: data.weight })
    );
    fetchGetAPI(config.apiEndPoint + "/profiles/Weiwei").then(data =>
      this.setState({ height: data.height, heightincm: data.height })
    );
    fetchGetAPI(config.apiEndPoint + "/profiles/Weiwei").then(data =>
      this.setState({ age: data.age })
    );
    fetchGetAPI(config.apiEndPoint + "/profiles/weiwei/weights").then(data =>
      this.setState({ weights: data })
    );
  }
  handleCancel = () => {
    this.setState({ showGoalForm: "collapse", showWeightForm: "collapse" });
  };

  handleEditWeight = () => {
    this.setState({
      showWeightForm:
        this.state.showWeightForm === "collapse" ? "collapse show" : "collapse"
    });
  };
  handleEditGoal = () => {
    this.setState({
      showGoalForm:
        this.state.showGoalForm === "collapse" ? "collapse show" : "collapse"
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
      records: await fetchGetAPI(config.apiEndPoint + "/calories/" + this.date),
      todayTotal: await fetchGetAPI(
        config.apiEndPoint + "/calories/" + this.date + "/total"
      )
    });
  };

  handleSelectMeter = event => {
    this.setState({ unit: event.target.name });

    //lb/ft -> kg/cm
    if (event.target.name === "kg")
      this.setState({
        weight: Math.round(this.state.weight * 0.45359237),
        height: Math.round(this.state.height * 30.48 * 10) / 10
      });
    else
      this.setState({
        weight: Math.round(this.state.weight * 2.20462262185),
        height: Math.round(this.state.height * 0.0328084 * 100) / 100
      });
  };
  render() {
    return (
      <React.Fragment>
        <div
          id="centered"
          className="card  mb-3 mt-5"
          style={{
            borderColor: "#9cd1f8",
            width: "40%"
          }}
        >
          <div
            className="card-header bg-transparent"
            style={{ borderColor: "#9cd1f8" }}
          >
            <div style={{ display: "inline-block" }}>
              <h5>Weiwei's Personal Profile</h5>
            </div>
            <div
              className="btn-group btn-group-toggle btn-sm"
              data-toggle="button"
              style={{ display: "inline-block" }}
            >
              <label
                className={
                  this.state.unit === "kg"
                    ? "btn btn-sm btn-outline-secondary active"
                    : "btn btn-sm btn-outline-secondary"
                }
              >
                <input
                  type="radio"
                  name="kg"
                  checked={this.state.unit === "kg"}
                  onChange={this.handleSelectMeter}
                />
                cm/kg
              </label>
              <label
                className={
                  this.state.unit === "lb"
                    ? "btn btn-sm btn-outline-secondary active"
                    : "btn btn-sm btn-outline-secondary"
                }
              >
                <input
                  type="radio"
                  name="lb"
                  checked={this.state.unit === "lb"}
                  onChange={this.handleSelectMeter}
                />
                ft/lb
              </label>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-3 ml-5">Weight</div>
              <div className="col-7">
                {this.state.weight}
                {this.state.unit === "kg" ? " kg" : " lb"}

                <i
                  className="fa fa-pencil-square-o ml-2"
                  aria-hidden="true"
                  style={{ cursor: "pointer" }}
                  onClick={this.handleEditWeight}
                />

                <div className={this.state.showWeightForm} id="collapseExample">
                  <div className="card card-body">
                    <div className="row">
                      <div className="col-9">
                        <input
                          type="number"
                          min="0"
                          placeholder="Enter new weight here"
                          step="2.5"
                          className="mb-2"
                          onChange={this.handleNewWeightInput}
                        />
                      </div>
                      <div className="col-3">
                        {this.state.unit === "kg" ? " kg" : " lb"}
                      </div>
                    </div>
                    <div className="row ">
                      <button
                        className="btn btn-sm ml-3 btn-outline-secondary"
                        onClick={this.handleAddWeight}
                      >
                        Add new weight
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
            <div className="row">
              <div className="col-3 ml-5">Height</div>
              <div className="col-7">
                {this.state.height}
                {this.state.unit === "kg" ? "cm" : "ft"}
              </div>
            </div>
            <div className="row">
              <div className="col-3 ml-5">Age</div>
              <div className="col-7">{this.state.age} y</div>
            </div>
          </div>

          <div
            className="card-footer bg-transparent"
            style={{ borderColor: "#9cd1f8" }}
          >
            <div> Your Weight Goal is 50 kg, you need to lose 30 kg</div>
          </div>
        </div>
        <div
          id="centered"
          className="card  mb-3  mt-5"
          style={{
            borderColor: "#9cd1f8",
            width: "40%"
          }}
        >
          <div
            className="card-header bg-transparent"
            style={{ borderColor: "#9cd1f8" }}
          >
            <h5>Today's Workout</h5>
            {this.date}
          </div>
          <div className="card-body ">
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
                onClick={this.handleEditGoal}
              />
              <div //div to show the form of editing dailyGoal
                className={this.state.showGoalForm}
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
          id="centered"
          name="show records"
          className="mb-3  mt-5"
          style={{
            borderColor: "#9cd1f8",
            width: "40%"
          }}
        >
          <table className="table  table-hover">
            <thead>
              <tr>
                <th colSpan="5">Today's exercise records</th>
              </tr>
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

export default Today;
