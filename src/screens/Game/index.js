import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/counter'
import HeaderGame from "../../common/components/HeaderGame";
import GameBar from "../../common/components/GameBar";
import ButtonGame from "../../common/components/ButtonGame";

const Game = props => (
  <div>
    <HeaderGame />
    <GameBar />
    <div className="content">
      <h2>infinitiveVerb</h2>
      <ButtonGame
        classButton="btn matchCard"
        titleButton="matchCard"
        event={() => props.changePage()}
      />
      <ButtonGame
        classButton="btn newCard"
        titleButton="Add New Card"
        event={() => props.changePage()}
      />
      <ButtonGame
        classButton="btn leaveGame"
        titleButton="Leave the game"
        event={() => props.changePage()}
      />
    </div>
  </div>
);

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
  changePage: () => push('/')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)