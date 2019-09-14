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

import together from '../../assets/img/together.png'

import test_data from '../../assets/testdata.json'

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.platform = Platform;
    this.dialogs = Dialogs;
    this.onChange = this.onChange.bind(this)
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

  onChange(e){
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <Page>
          <div style={{marginTop: "80px"}}>
            <center>
                <img src={together} style={{width: "50%"}} />
                <h1>Введите данные</h1>
                <p>Они необходимы</p>
            </center>
          </div>

          <List inset>
            <ListInput
              type="text"
              placeholder="Гос номер"
              clearButton
              name="gos"
              onChange={this.onChange}
            />
          </List>
          <List inset>
            <ListInput
              type="text"
              placeholder="Номер маршрута"
              clearButton
              name="track"
              onChange={this.onChange}
            />
          </List>
          <center>
            <Button href="/start_screen/" style={{width: "90%"}} large color="green" fill>Начать смену</Button>
          </center>
      </Page>
    );
  }
}
