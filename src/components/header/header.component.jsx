import React from "react";
import "./header.styles.scss";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
// import { createStructuredSelector } from "reselect";
import CartIcon from "../cart-icon/cart-icon.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { ReactComponent as Logo } from "../../assets/demo.svg";
//Styled components
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from "./header.styles";

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">
          SHOP
        </OptionLink>
        <OptionLink to="/contact">
          CONTACT
        </OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
          
        ) : (
          <OptionLink to="/signin">
            SIGN IN
          </OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

//****Same as below code*****
// const mapStateToProps = createStructuredSelector({
//   currentUser: selectCurrentUser,
//   hidden: selectCartHidden,
// });

const mapStateToProps = (state) => ({
  // state is top level rootReducer
  currentUser: selectCurrentUser(state),
  hidden: selectCartHidden(state),
  //we want to current user inside of root reducer and we access to user reducer inside root reducer
  //After accessing user reducer we are able to use currentUser value
});

export default connect(mapStateToProps)(Header);
// connect is a HOC
// we got the current user with MapStateToProps function
// And we pass it Header component as a state
