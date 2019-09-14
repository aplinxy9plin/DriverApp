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

import user_bg from '../../assets/img/user_bg.png'
import chevronLeft from '../../assets/img/chevron-left.png'
import signOut from '../../assets/img/sign-out.png'

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

  }

  render() {
    return (
      <Page>
          <div style={{position: "absolute", top: 0, width: "100%", height: "140px", backgroundSize: "cover", backgroundImage: `url(${user_bg})`}}> 
            <a href="/vod_data/"><img style={{marginTop: "23px", marginLeft: "25px"}} src={chevronLeft} /></a>
            <a style={{position: "absolute", right: "25px", top: "23px"}}><img src={signOut} /></a>
            <div style={{display: "flex", color: "white", marginLeft: "30px"}}>
                <div style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50px",
                    background: "#374FCC"
                }}> 
                    <center style={{paddingTop: "10px"}}><h1 style={{lineHeight: 0.5}}>П</h1></center>
                </div>
                <div style={{height: "70px", fontSize: "20px", paddingLeft: "20px"}}>
                    <h4 style={{lineHeight: 0}}>Петр</h4>
                    <h5 style={{lineHeight: 0}}>Николаев Николаевич</h5>
                </div>
            </div>
          </div>
          <div style={{marginTop: "170px"}}>
              <p style={{
                  marginLeft: "10px",
                  fontSize: "25px"
              }}>Общая информация</p>
              <List>
                  <ListItem title="Стаж работы:" after="3 г. 2 м."></ListItem>
                  <ListItem title="Всего смен" after="456"></ListItem>
                  <ListItem title="Рейтинг водителя" after="4.6"></ListItem>
              </List>
          </div>
          <div style={{position: "fixed", bottom: 20, width: "100%"}}>
              <center>
              <Button href="/main/" style={{width: "70%"}} large color="green" fill>Начать смену</Button>
              </center> 
          </div>
      </Page>
    );
  }
}
