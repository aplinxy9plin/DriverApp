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

import test_data from '../../../assets/testdata.json'

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
          <Block style={{marginTop: "50px"}}>
            <center>
                <h1 style={{color: "black", fontSize: "30px"}}>Оплата наличкой</h1>
                <p style={{fontSize: "20px"}}>Укажите сумму, которую вы получили</p>
            </center>    
            <Row>
                <Col>
                    <List inset>
                        <p style={{fontSize: "20px"}}>Полученная сумма</p>
                        <ListInput onChange={(e) => this.setState({money: e.target.value})} value={this.state.money} style={{textAlign: "center"}} />
                    </List>
                </Col>
            </Row>
            <List>
                <ListItem
                    link
                    onClick={() => this.setState({money: 21})}
                    title="21"
                />
                <ListItem
                    link
                    onClick={() => this.setState({money: 50})}
                    title="50"
                />
                <ListItem
                    link
                    onClick={() => this.setState({money: 100})}
                    title="100"
                />
                <ListItem
                    link
                    onClick={() => this.setState({money: 200})}
                    title="200"
                />
            </List>
            <Row>
                <Col>
                    <Button fill color="green" href="/third" large>Оплатить</Button>
                </Col>
            </Row>
          </Block>
      </Page>
    );
  }
}
