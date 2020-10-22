import React, { Component } from "react";
import ErateService from "../services/ErateService";

class ViewErateComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      erate: {},
    };
  }

  componentDidMount() {
    ErateService.getErateById(this.state.id).then((res) => {
      this.setState({ erate: res.data });
    });
  }

  back() {
    this.props.history.push("/erate");
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center"> View Erate Details</h3>
          <div className="card-body">
            <div className="row">
              <label> Bank: </label>
              <div> {this.state.erate.bank}</div>
            </div>
            <div className="row">
              <label> Erate Jual: </label>
              <div> {this.state.erate.erate_jual}</div>
            </div>
            <div className="row">
              <label> Erate Beli: </label>
              <div> {this.state.erate.erate_beli}</div>
            </div>
            <div className="row">
              <label> Ttcounter Jual: </label>
              <div> {this.state.erate.ttcounter_jual}</div>
            </div>
            <div className="row">
              <label> Ttcounter Beli: </label>
              <div> {this.state.erate.ttcounter_beli}</div>
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

export default ViewErateComponent;
