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
  Col,
  Row,
  ListInput,
  Button
} from "framework7-react";
import { Dialogs } from "@ionic-native/dialogs";

import Platform from "../../services/Platform";
import * as config from "../../config";

import user_bg from '../../assets/img/user_bg.png'
import chevronLeft from '../../assets/img/chevron-left.png'
import user from '../../assets/img/user.png'
import users from '../../assets/img/users.png'

import test_data from '../../assets/testdata.json'

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [
            {
                "type": "Наличные",
                "number": "7940",
                "count": 2,
                "price": 42,
                "time": "08:56:23"
            }
        ]
    }
    this.platform = Platform;
    this.dialogs = Dialogs;
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount() {
    setTimeout(() => {
        this.setState({
            data: [
                {
                    "type": "Наличные",
                    "number": "723",
                    "count": 2,
                    "price": 42,
                    "time": "12:56:23"
                },
                {
                    "type": "Т. карта",
                    "number": "184",
                    "count": 1,
                    "price": 21,
                    "time": "12:59:23"
                }
            ]
        })
    }, 3000);
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

  render() {
    return (
      <Page>
          <div style={{position: "absolute", top: 0, width: "100%", height: "60px", backgroundSize: "cover", background: "#3CC172"}}> 
            <a style={{position: "absolute", left: 25, top: 15}}>
                <img src={user}/>
            </a>
            <a style={{position: "absolute", right: 60, top: 15}}>
                <img src={users}/>
            </a>
            <p style={{position: "absolute", right: 25, top: -13, fontSize: "25px", color: "white"}}>17</p>
            <center>
                {/* <p style={{marginTop: "8px", fontSize: "30px", color: "white"}}>
                    1:55:51
                </p> */}
            </center>
          </div>
          <Block style={{marginTop: "74px"}}>
              <Row>
                <Col>
                  <Button href="/first_cash/" color="green" large fill style={{height: "110px", paddingTop: "30px"}}>Наличные</Button>
                </Col>
                <Col>
                  <Button large fill style={{height: "110px", paddingTop: "30px", background: "#333333", color: "white"}}>Банк. карта</Button>
                </Col>
              </Row>
              <Row style={{marginTop: "10px"}}>
                  <Col>
                    <Button style={{height: "60px", paddingTop: "8px"}} large outline color="black">Транспортной картой</Button>
                  </Col>
              </Row>
              <Row style={{marginTop: "10px"}}>
                  <Col>
                    <Button style={{height: "60px", paddingTop: "8px"}} large outline color="black">По номеру телефона</Button>
                  </Col>
              </Row>
              <Row style={{marginTop: "10px"}}>
                  <Col>
                    <Button style={{height: "60px", paddingTop: "8px"}} large fill color="orange">Проверить оплату</Button>
                  </Col>
              </Row>
            </Block>
            <p style={{
                  marginLeft: "10px",
                  fontSize: "25px"
              }}>Оплата за проезд</p>
            <div class="data-table" style={{background: "white"}}>
              <table>
                <tbody>
                    {
                        this.state.data.map((item) => 
                        <tr>
                            <td>#{item.number}</td>
                            <td>{item.count}</td>
                            <td>{item.type}</td>
                            <td>{item.time}</td>
                        </tr>
                        )
                    }
                </tbody>
              </table>
            </div>
      </Page>
    );
  }
}
