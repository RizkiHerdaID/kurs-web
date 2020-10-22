import React, { Component } from "react";
import KursService from "../services/KursService";

class ListKursComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kurs: [],
    };
    this.addKurs = this.addKurs.bind(this);
    this.editKurs = this.editKurs.bind(this);
    this.deleteKurs = this.deleteKurs.bind(this);
  }

  deleteKurs(id) {
    KursService.deleteKurs(id).then((res) => {
      this.setState({
        kurs: this.state.kurs.filter((k) => k.id !== id),
      });
    });
  }
  viewKurs(id) {
    this.props.history.push(`/view-kurs/${id}`);
  }
  editKurs(id) {
    this.props.history.push(`/add-kurs/${id}`);
  }

  componentDidMount() {
    KursService.getKurs().then((res) => {
      this.setState({ kurs: res.data });
    });
  }

  addKurs() {
    this.props.history.push("/add-kurs/_add");
  }

  render() {
    return (
      <div className="mt-4">
        <h2 className="text-center">Kurs List</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.addKurs}>
            {" "}
            Add Kurs
          </button>
        </div>
        <br></br>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th> Bank </th>
                <th> Kurs Jual</th>
                <th> Kurs Beli</th>
                <th> Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.kurs.map((k) => (
                <tr key={k.id}>
                  <td> {k.bank} </td>
                  <td> {k.kurs_jual}</td>
                  <td> {k.kurs_beli}</td>
                  <td>
                    <button
                      onClick={() => this.viewKurs(k.id_kurs)}
                      className="btn btn-info"
                    >
                      View{" "}
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.editKurs(k.id_kurs)}
                      className="btn btn-warning"
                    >
                      Update{" "}
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.deleteKurs(k.id_kurs)}
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

export default ListKursComponent;
