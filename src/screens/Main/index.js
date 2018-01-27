import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/counter';
import LogoApp from "../../components/LogoApp";
import ButtonApp from "../../components/ButtonApp";

const Main = props => (
  <div className="app">
    <LogoApp />
    <div className="content">
      <p className="centered">
        <ButtonApp 
          classButton="btn lg" 
          titleButton="Ready to play"
          event={() => props.changePage('/game')}
          />
        <ButtonApp 
          classButton="btn lg" 
          titleButton="Settings"
          event={() => props.changePage('/settings')}
          />
        <ButtonApp 
          classButton="btn lg" 
          titleButton="Login"
          event={() => props.changePage('/login')}
          />
        <ButtonApp 
          classButton="btn lg" 
          titleButton="Register"
          event={() => props.changePage('/register')}
          />
      </p>
    </div>
  </div>
)

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: (page) => push(page)
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)