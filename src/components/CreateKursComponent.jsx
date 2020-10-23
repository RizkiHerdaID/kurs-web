import React, { Component } from "react";
import KursService from "../services/KursService";

class CreateKursComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // step 2
      id: this.props.match.params.id,
      bank: "",
      kurs_jual: "",
      kurs_beli: "",
    };
    this.changeBankHandler = this.changeBankHandler.bind(this);
    this.changeKursJualHandler = this.changeKursJualHandler.bind(this);
    this.changeKursBeliHandler = this.changeKursBeliHandler.bind(this);
    this.saveOrUpdateKurs = this.saveOrUpdateKurs.bind(this);
  }

  // step 3
  componentDidMount() {
    // step 4
    if (this.state.id === "_add") {
      return;
    } else {
      KursService.getKursById(this.state.id).then((res) => {
        let kurs = res.data;
        this.setState({
          bank: kurs.bank,
          kurs_jual: kurs.kurs_jual,
          kurs_beli: kurs.kurs_beli,
        });
      });
    }
  }
  saveOrUpdateKurs = (e) => {
    e.preventDefault();
    let kurs = {
      bank: this.state.bank,
      kurs_jual: this.state.kurs_jual,
      kurs_beli: this.state.kurs_beli,
    };
    console.log("kurs => " + JSON.stringify(kurs));

    // step 5
    if (this.state.id === "_add") {
      KursService.createKurs(kurs).then((res) => {
        this.props.history.push("/kurs");
      });
    } else {
      KursService.updateKurs(kurs, this.state.id).then((res) => {
        this.props.history.push("/kurs");
      });
    }
  };

  changeBankHandler = (event) => {
    this.setState({ bank: event.target.value });
  };

  changeKursJualHandler = (event) => {
    this.setState({ kurs_jual: event.target.value });
  };

  changeKursBeliHandler = (event) => {
    this.setState({ kurs_beli: event.target.value });
  };

  cancel() {
    this.props.history.push("/kurs");
  }

  getTitle() {
    if (this.state.id === "_add") {
      return <h3 className="text-center">Add Kurs</h3>;
    } else {
      return <h3 className="text-center">Update Kurs</h3>;
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
                    <label> Bank: </label>
                    <input
                      placeholder="Bank"
                      name="bank"
                      className="form-control"
                      value={this.state.bank}
                      onChange={this.changeBankHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Kurs Jual: </label>
                    <input
                      placeholder="Kurs Jual"
                      name="kurs_jual"
                      className="form-control"
                      value={this.state.kurs_jual}
                      onChange={this.changeKursJualHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Kurs Beli: </label>
                    <input
                      placeholder="Kurs Beli"
                      name="kurs_beli"
                      className="form-control"
                      value={this.state.kurs_beli}
                      onChange={this.changeKursBeliHandler}
                    />
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={this.saveOrUpdateKurs}
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

export default CreateKursComponent;
