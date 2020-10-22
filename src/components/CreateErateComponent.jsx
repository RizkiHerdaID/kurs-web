import React, { Component } from "react";
import ErateService from "../services/ErateService";

class CreateErateComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // step 2
      id: this.props.match.params.id,
      erate_jual: "",
      erate_beli: "",
      ttcounter_jual: "",
      ttcounter_beli: "",
    };
    this.changeErateJualHandler = this.changeErateJualHandler.bind(this);
    this.changeErateBeliHandler = this.changeErateBeliHandler.bind(this);
    this.changeTtcounterJualHandler = this.changeTtcounterJualHandler.bind(this);
    this.changeTtcounterBeliHandler = this.changeTtcounterBeliHandler.bind(this);
    this.saveOrUpdateErate = this.saveOrUpdateErate.bind(this);
  }

  // step 3
  componentDidMount() {
    // step 4
    if (this.state.id === "_add") {
      return;
    } else {
      ErateService.getErateById(this.state.id).then((res) => {
        let erate = res.data;
        this.setState({
          erate_jual: erate.erate_jual,
          erate_beli: erate.erate_beli,
          ttcounter_jual: erate.ttcounter_jual,
          ttcounter_beli: erate.ttcounter_beli,
        });
      });
    }
  }
  saveOrUpdateErate = (e) => {
    e.preventDefault();
    let erate = {
      erate_jual: this.state.erate_jual,
      erate_beli: this.state.erate_beli,
      ttcounter_jual: this.state.ttcounter_jual,
      ttcounter_beli: this.state.ttcounter_beli,
    };
    console.log("erate => " + JSON.stringify(erate));

    // step 5
    if (this.state.id === "_add") {
      ErateService.createErate(erate).then((res) => {
        this.props.history.push("/erate");
      });
    } else {
      ErateService.updateErate(erate, this.state.id).then((res) => {
        this.props.history.push("/erate");
      });
    }
  };

  changeErateJualHandler = (event) => {
    this.setState({ erate_jual: event.target.value });
  };

  changeErateBeliHandler = (event) => {
    this.setState({ erate_beli: event.target.value });
  };
  changeTtcounterJualHandler = (event) => {
    this.setState({ ttcounter_jual: event.target.value });
  };

  changeTtcounterBeliHandler = (event) => {
    this.setState({ ttcounter_beli: event.target.value });
  };

  cancel() {
    this.props.history.push("/erate");
  }

  getTitle() {
    if (this.state.id === "_add") {
      return <h3 className="text-center">Add Erate</h3>;
    } else {
      return <h3 className="text-center">Update Erate</h3>;
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
                    <label> Erate Jual: </label>
                    <input
                      placeholder="Erate Jual"
                      name="erate_jual"
                      className="form-control"
                      value={this.state.erate_jual}
                      onChange={this.changeErateJualHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Erate Beli: </label>
                    <input
                      placeholder="ErateBeli"
                      name="erate_beli"
                      className="form-control"
                      value={this.state.erate_beli}
                      onChange={this.changeErateBeliHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Ttcounter Jual: </label>
                    <input
                      placeholder="Ttcounter Jual"
                      name="ttcounter_jual"
                      className="form-control"
                      value={this.state.ttcounter_jual}
                      onChange={this.changeTtcounterJualHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Ttcounter Beli: </label>
                    <input
                      placeholder="TtcounterBeli"
                      name="ttcounter_beli"
                      className="form-control"
                      value={this.state.ttcounter_beli}
                      onChange={this.changeTtcounterBeliHandler}
                    />
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={this.saveOrUpdateErate}
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

export default CreateErateComponent;
