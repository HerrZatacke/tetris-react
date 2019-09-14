import { connect } from 'react-redux';

const mapStateToProps = state => ({
  nextPart: state.nextPart,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps);
