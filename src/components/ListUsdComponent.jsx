import React, { Component } from "react";
import UsdService from "../services/UsdService";

class ListUsdComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usd: [],
    };
    this.addUsd = this.addUsd.bind(this);
    this.editUsd = this.editUsd.bind(this);
    this.deleteUsd = this.deleteUsd.bind(this);
  }

  deleteUsd(id) {
    UsdService.deleteUsd(id).then((res) => {
      this.setState({
        usd: this.state.usd.filter((k) => k.id !== id),
      });
    });
  }
  viewUsd(id) {
    this.props.history.push(`/view-usd/${id}`);
  }
  editUsd(id) {
    this.props.history.push(`/add-usd/${id}`);
  }

  componentDidMount() {
    UsdService.getUsd().then((res) => {
      this.setState({ usd: res.data });
    });
  }

  addUsd() {
    this.props.history.push("/add-usd/_add");
  }

  render() {
    return (
      <div className="mt-4">
        <h2 className="text-center">USD Jual List</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.addUsd}>
            {" "}
            Add USD Jual
          </button>
        </div>
        <br></br>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th> Mata Uang</th>
                <th> Jual Week</th>
                <th> Jual Month</th>
                <th> Jual Three Month</th>
                <th> Jual Six Month</th>
                <th> Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.usd.map((u) => (
                <tr key={u.id}>
                  <td> {u.mata_uang}</td>
                  <td> {u.jual_week}</td>
                  <td> {u.jual_month}</td>
                  <td> {u.jual_threemonth}</td>
                  <td> {u.jual_sixmonth}</td>
                  <td>
                    <button
                      onClick={() => this.viewUsd(u.id_usd)}
                      className="btn btn-info"
                    >
                      View{" "}
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.editUsd(u.id_usd)}
                      className="btn btn-warning"
                    >
                      Update{" "}
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.deleteUsd(u.id_usd)}
                      className="btn btn-danger"
                    >
                      Delete{" "}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListUsdComponent;
