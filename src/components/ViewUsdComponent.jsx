import React, { Component } from "react";
import UsdService from "../services/UsdService";

class ViewUsdComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      usd: {},
    };
  }

  componentDidMount() {
    UsdService.getUsdById(this.state.id).then((res) => {
      this.setState({ usd: res.data });
    });
  }

  back() {
    this.props.history.push("/usd");
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center"> View Usd Details</h3>
          <div className="card-body">
            <div className="row">
              <label> Mata Uang: </label>
              <div> {this.state.usd.mata_uang}</div>
            </div>
            <div className="row">
              <label> Jual Week: </label>
              <div> {this.state.usd.jual_week}</div>
            </div>
            <div className="row">
              <label> Jual Month: </label>
              <div> {this.state.usd.jual_month}</div>
            </div>
            <div className="row">
              <label> Jual Three Month: </label>
              <div> {this.state.usd.jual_threemonth}</div>
            </div>
            <div className="row">
              <label> Jual Six Month: </label>
              <div> {this.state.usd.jual_sixmonth}</div>
            </div>
            <button
              className="btn btn-danger"
              onClick={this.back.bind(this)}
              style={{ marginLeft: "10px" }}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewUsdComponent;
