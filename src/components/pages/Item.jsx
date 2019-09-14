import React, { Component } from "react";
import { Page, Navbar, BlockTitle, Block } from "framework7-react";

import RegisterBackButtonAction from "../../services/RegisterBackButtonAction";

import Map from './Map'

export default class Item extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // handle back button
    RegisterBackButtonAction(this.$f7router);
    var self = this;
    if (window.navigator.geolocation) {
      var failure, success;
      success = function(position) {
        console.log(position);
        self.$f7.dialog.preloader("Построение маршрута...")
        setTimeout(() => {
          self.$f7.dialog.close()      
        }, 2000);
      };
      failure = function(message) {
        self.$f7.dialog.alert('Cannot retrieve location!');
      };
      navigator.geolocation.getCurrentPosition(success, failure, {
        maximumAge: Infinity,
        timeout: 5000
      });
    }
  }

  render() {
    return (
      <Page>
        <Navbar title="Заказ" />
        <Map />
      </Page>
    );
  }
}
