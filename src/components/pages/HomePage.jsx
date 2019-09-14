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
  Link
} from "framework7-react";
import { Dialogs } from "@ionic-native/dialogs";

import Platform from "../../services/Platform";
import * as config from "../../config";

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
        <Navbar>
          <NavTitle>{config.name}</NavTitle>
        </Navbar>
        <List mediaList>
          {
            test_data && test_data.map((item) => 
              <ListItem
                key={item.id}
                link={`/item/${item.id}`}
                title="Ближайшее"
                after={`${item.time_start} to ${item.time_end}`}
                subtitle={`1. ${item.address}`}
                text={item.text}
              >
                <div style={{
                  lineHeight: 0.2
                }}>
                  <p>Address: <b>{item.address_num}</b></p>
                  <p>Pay: <b>{item.pay}₽</b></p>
                </div>
              </ListItem>
            )
          }
        </List>
      </Page>
    );
  }
}
