import HomePage from "./components/pages/HomePage";
import Item from "./components/pages/Item";
import NotFoundPage from "./components/pages/NotFoundPage";
import SignIn from './components/pages/SignIn'
import VodData from './components/pages/VodData'
import StartScreen from './components/pages/StartScreen'
import Main from './components/pages/Main'
import Main1 from './components/pages/Main1'

import FirstCash from './components/pages/CashPay/First'
import SecondCash from './components/pages/CashPay/Second'
import ThirdCash from './components/pages/CashPay/Third'

export default [
  {
    path: "/",
    component: HomePage
  },
  {
    path: "/item/:id",
    component: Item
  },
  {
    path: "/signin/",
    component: SignIn
  },
  {
    path: "/start_screen/",
    component: StartScreen
  },
  {
    path: "/main/",
    component: Main
  },
  {
    path: "/main1/",
    component: Main1
  },
  {
    path: "/first_cash/",
    component: FirstCash
  },
  {
    path: "/second_cash/",
    component: SecondCash
  },
  {
    path: "/third",
    component: ThirdCash
  },
  {
    path: "/vod_data",
    component: VodData
  },
  {
    path: "(.*)",
    component: NotFoundPage
  }
];
