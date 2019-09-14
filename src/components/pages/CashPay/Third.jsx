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
  Stepper,
  Col,
  Row,
  ListInput,
  Button
} from "framework7-react";
import { Dialogs } from "@ionic-native/dialogs";

import Platform from "../../../services/Platform";
import * as config from "../../../config";

import user_bg from '../../../assets/img/user_bg.png'
import chevronLeft from '../../../assets/img/chevron-left-green.png'
import user from '../../../assets/img/user.png'
import users from '../../../assets/img/users.png'

import creditCard from '../../../assets/img/credit-card.png'

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        value: 1,
        sum: 21
    }
    this.platform = Platform;
    this.dialogs = Dialogs;
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount() {
    setTimeout(() => {
        this.$f7.views.current.router.navigate("/main1/")
    }, 2000);
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

  }

  moreTicket(value){
    this.setState({ value: value, sum: value*21 });
  }

  render() {
    return (
      <Page>
          <a href="/first_cash/"><img style={{marginTop: "23px", marginLeft: "25px"}} src={chevronLeft} /></a>
          <Block>
              <center>
                <h1>Приложите карточку</h1>
                <img style={{marginTop: "200px"}} src={creditCard} />
              </center>
          </Block>
      </Page>
    );
  }
}
