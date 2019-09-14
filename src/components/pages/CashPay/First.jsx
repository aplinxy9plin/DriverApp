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
          <a href="/vod_data/"><img style={{marginTop: "23px", marginLeft: "25px"}} src={chevronLeft} /></a>
          <Block style={{marginTop: "50px"}}>
            <center>
                <h1 style={{color: "black", fontSize: "30px"}}>Оплата наличкой</h1>
                <p style={{fontSize: "20px"}}>Введите количество билетов</p>
            </center>    
            <Row>
                <Col>
                    <List inset>
                    <p style={{fontSize: "20px"}}>Стоимость</p>
                        <ListInput style={{textAlign: "center"}} value="21" />
                    </List>
                </Col>
                <Col style={{marginTop: "15px"}}>
                        <p style={{fontSize: "20px"}}>Билетов</p>
                        <Stepper min={1} value={this.state.value} large raised onStepperChange={this.moreTicket.bind(this)}></Stepper>
                </Col>
            </Row>
            <Row>
                <Col>
                    <List inset>
                        <p style={{fontSize: "20px"}}>Итого</p>
                        <ListInput style={{textAlign: "center"}} value={this.state.sum} />
                    </List>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button href={`/second_cash/`} fill color="green" large>Подтвердить</Button>
                </Col>
            </Row>
          </Block>
      </Page>
    );
  }
}
