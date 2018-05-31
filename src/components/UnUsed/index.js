import { connect } from "react-redux";
// import UI component
import UI_UnUsed from "./UnUsed";

// mapStateToProps goes here
function mapStateToProps(state){
	return{
    example: state.unUsed.example,
	}
}

// mapDispatchToProps goes here
function mapDispatchToProps(dispatch){
	return{
	}
}

// build container-component
const UnUsed = connect(
	mapStateToProps,
	mapDispatchToProps,
)(UI_UnUsed);

export default UnUsed;