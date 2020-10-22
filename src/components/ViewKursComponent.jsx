import React, { Component } from "react";
import KursService from "../services/KursService";

class ViewKursComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      kurs: {},
    };
  }

  componentDidMount() {
    KursService.getKursById(this.state.id).then((res) => {
      this.setState({ kurs: res.data });
    });
  }

  back() {
    this.props.history.push("/kurs");
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center"> View Kurs Details</h3>
          <div className="card-body">
            <div className="row">
              <label> Bank: </label>
              <div> {this.state.kurs.bank}</div>
            </div>
            <div className="row">
              <label> Kurs Jual: </label>
              <div> {this.state.kurs.kurs_jual}</div>
            </div>
            <div className="row">
              <label> Kurs Beli: </label>
              <div> {this.state.kurs.kurs_beli}</div>
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

export default ViewKursComponent;
