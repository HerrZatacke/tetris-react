import { connect } from 'react-redux';

const mapStateToProps = state => ({
  isRunning: !!state.tick,
  clearedLines: state.clearedLines,
});

const mapDispatchToProps = dispatch => ({
  startGame: () => {
    dispatch({
      type: 'START_GAME',
    });

    dispatch({
      type: 'GAME_TICK',
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps);
