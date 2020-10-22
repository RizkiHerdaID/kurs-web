import React, { Component } from "react";
import ErateService from "../services/ErateService";

class ListErateComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      erate: [],
    };
    this.addErate = this.addErate.bind(this);
    this.editErate = this.editErate.bind(this);
    this.deleteErate = this.deleteErate.bind(this);
  }

  deleteErate(id) {
    ErateService.deleteErate(id).then((res) => {
      this.setState({
        erate: this.state.erate.filter((k) => k.id !== id),
      });
    });
  }
  viewErate(id) {
    this.props.history.push(`/view-erate/${id}`);
  }
  editErate(id) {
    this.props.history.push(`/add-erate/${id}`);
  }

  componentDidMount() {
    ErateService.getErate().then((res) => {
      this.setState({ erate: res.data });
    });
  }

  addErate() {
    this.props.history.push("/add-erate/_add");
  }

  render() {
    return (
      <div className="mt-4">
        <h2 className="text-center">Erate List</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.addErate}>
            {" "}
            Add Erate
          </button>
        </div>
        <br></br>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th> Erate Jual</th>
                <th> Erate Beli</th>
                <th> Ttcounter Jual</th>
                <th> Ttcounter Beli</th>
                <th> Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.erate.map((er) => (
                <tr key={er.id}>
                  <td> {er.erate_jual}</td>
                  <td> {er.erate_beli}</td>
                  <td> {er.ttcounter_jual}</td>
                  <td> {er.ttcounter_beli}</td>
                  <td>
                    <button
                      onClick={() => this.viewErate(er.id_kurs)}
                      className="btn btn-info"
                    >
                      View{" "}
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.editErate(er.id_kurs)}
                      className="btn btn-warning"
                    >
                      Update{" "}
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.deleteErate(er.id_kurs)}
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

export default ListErateComponent;
