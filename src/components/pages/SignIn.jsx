import React, { Component } from "react";
import {
  Page,
  Navbar,
  BlockTitle,
  Block,
  List,
  ListItem,
  Icon,
  NavLeft,
  NavRight,
  NavTitle,
  Link,
  ListInput,
  Button
} from "framework7-react";
import { Dialogs } from "@ionic-native/dialogs";

import Platform from "../../services/Platform";
import * as config from "../../config";

import logo from '../../assets/img/logo.png'

import test_data from '../../assets/testdata.json'

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.platform = Platform;
    this.dialogs = Dialogs;
  }

  componentDidMount() {
    this.platform.registerBackButtonAction(event => {
      event.preventDefault();

      this.dialogs
        .confirm("Do you want to close the application ?", config.name, [
          "Close",
          "No"
        ])
        .then(index => {
          if (index === 1) {
            this.platform.exitApp();
          }
        });

      return false;
    }, 101);
  }

  render() {
    return (
      <Page>
          <div style={{marginTop: "80px"}}>
            <center>
                <img src={logo} style={{width: "50%"}} />
                <h1 style={{marginTop: "61px"}}>Добро пожаловать</h1>
            </center>
          </div>

          <List inset>
            <ListInput
              type="text"
              placeholder="Введите ID водителя"
              clearButton
            />
          </List>
          <center>
          <Button href="/vod_data" style={{width: "90%"}} large color="green" fill>Войти</Button>
          </center>
      </Page>
    );
  }
}
