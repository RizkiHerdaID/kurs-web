import React, { Component } from "react";
import UsdService from "../services/UsdService";

class CreateUsdComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // step 2
      id: this.props.match.params.id,
      mata_uang: "",
      jual_week: "",
      jual_month: "",
      jual_threemonth: "",
      jual_sixmonth: "",
    };
    this.changeMataUangHandler = this.changeMataUangHandler.bind(this);
    this.changeJualWeekHandler = this.changeJualWeekHandler.bind(this);
    this.changeJualMonthHandler = this.changeJualMonthHandler.bind(this);
    this.changeThreeMonthHandler = this.changeThreeMonthHandler.bind(this);
    this.changeSixMonthHandler = this.changeSixMonthHandler.bind(this);
    this.saveOrUpdateUsd = this.saveOrUpdateUsd.bind(this);
  }

  // step 3
  componentDidMount() {
    // step 4
    if (this.state.id === "_add") {
      return;
    } else {
      UsdService.getUsdById(this.state.id).then((res) => {
        let usd = res.data;
        this.setState({
          mata_uang: usd.mata_uang,
          jual_week: usd.jual_week,
          jual_month: usd.jual_month,
          jual_threemonth: usd.jual_threemonth,
          jual_sixmonth: usd.jual_sixmonth,
        });
      });
    }
  }
  saveOrUpdateUsd = (e) => {
    e.preventDefault();
    let usd = {
      mata_uang: this.state.mata_uang,
      jual_week: this.state.jual_week,
      jual_month: this.state.jual_month,
      jual_threemonth: this.state.jual_threemonth,
      jual_sixmonth: this.state.jual_sixmonth,
    };
    console.log("usd => " + JSON.stringify(usd));

    // step 5
    if (this.state.id === "_add") {
      UsdService.createUsd(usd).then((res) => {
        this.props.history.push("/usd");
      });
    } else {
      UsdService.updateUsd(usd, this.state.id).then((res) => {
        this.props.history.push("/usd");
      });
    }
  };

  changeMataUangHandler = (event) => {
    this.setState({ mata_uang: event.target.value });
  };

  changeJualWeekHandler = (event) => {
    this.setState({ jual_week: event.target.value });
  };

  changeJualMonthHandler = (event) => {
    this.setState({ jual_month: event.target.value });
  };
  changeThreeMonthHandler = (event) => {
    this.setState({ jual_threemonth: event.target.value });
  };

  changeSixMonthHandler = (event) => {
    this.setState({ jual_sixmonth: event.target.value });
  };

  cancel() {
    this.props.history.push("/usd");
  }

  getTitle() {
    if (this.state.id === "_add") {
      return <h3 className="text-center">Add Usd</h3>;
    } else {
      return <h3 className="text-center">Update Usd</h3>;
    }
  }
  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {this.getTitle()}
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Mata Uang: </label>
                    <input
                      placeholder="Mata Uang"
                      name="mata_uang"
                      className="form-control"
                      value={this.state.mata_uang}
                      onChange={this.changeMataUangHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Jual Week: </label>
                    <input
                      placeholder="Jual Week"
                      name="jual_week"
                      className="form-control"
                      value={this.state.jual_week}
                      onChange={this.changeJualWeekHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Jual Month: </label>
                    <input
                      placeholder="Jual Month"
                      name="jual_month"
                      className="form-control"
                      value={this.state.jual_month}
                      onChange={this.changeJualMonthHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Jual Three Month: </label>
                    <input
                      placeholder="Jual Three Month"
                      name="jual_threemonth"
                      className="form-control"
                      value={this.state.jual_threemonth}
                      onChange={this.changeThreeMonthHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Jual Six Month: </label>
                    <input
                      placeholder="Jual Six Month"
                      name="jual_sixmonth"
                      className="form-control"
                      value={this.state.jual_sixmonth}
                      onChange={this.changeSixMonthHandler}
                    />
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={this.saveOrUpdateUsd}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateUsdComponent;
