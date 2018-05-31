import { connect } from "react-redux";
// import UI component
import UI_ExportHtml from "./ExportHtml";

// mapStateToProps goes here
function mapStateToProps(state){
	return{
    example: state.cassandra.example + state.app.example + state.images.example + state.ucc.example + state.openfire.example + state.redis.example + state.mongo.example + state.qa.example + state.unUsed.example + state.other.example,
	}
}

// mapDispatchToProps goes here
function mapDispatchToProps(dispatch){
	return{
	}
}

// build container-component
const ExportHtml = connect(
	mapStateToProps,
	mapDispatchToProps,
)(UI_ExportHtml);

export default ExportHtml;