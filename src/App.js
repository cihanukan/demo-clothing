import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";

class App extends React.Component {
  unsubscribeFromAuth = null;

  //We use the didMount method to notify app that user has signed in.
  //App render edildikten sonra didMount methodu çağrılır.
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //if there is any updates from firebase side, firebase will let us konw that there is a update.
      if (userAuth) {
        // if user is authorizated
        const userRef = await createUserProfileDocument(userAuth); // get the user reference

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(), // to get data from firestore such us displayName, email, createdAt
          });
        });
      } else {
        setCurrentUser(userAuth); // if not authorized then currentUser will be null
      }
    });
  }

  //We should unmoount the open subscription after all login process done.
  //That is why we call this method and set unsubscribeFromAuth to null
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      //we passed current user state to the Header component via Redux reducer.
      //So we do not need to app component to pass it anymore
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
