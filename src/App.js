import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./components/Payment";

//TODO Stripe
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG");

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //Only Run
    auth.onAuthStateChanged((authUser) => {
      console.log("sdas", authUser);
      if (authUser) {
        console.log("Login");
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        console.log("Logout");
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/signup" exact>
            <Signup />
          </Route>
          <Route path="/checkout" exact>
            <Checkout />
          </Route>
          <Route path="/payment" exact>
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          </Route>
        </Switch>

        {/* Header */}
        {/* Hone */}
      </div>
    </Router>
  );
}

export default App;

//6h:00min
