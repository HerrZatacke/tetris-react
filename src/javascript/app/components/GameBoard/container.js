import { connect } from 'react-redux';

const mapStateToProps = state => ({
  gameBoard: state.gameBoard,
  currentPart: state.currentPart,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps);
