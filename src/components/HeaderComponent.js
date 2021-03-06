import React, { Component } from "react";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div>
              <a href="/kurs" className="navbar-brand">
                KursApp
              </a>
            </div>
            <div>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/kurs">KURS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/erate">ERATE</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/usd">USD JUAL</a>
                    </li>
                </ul>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default HeaderComponent;
