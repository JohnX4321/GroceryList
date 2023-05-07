import {connect} from "react-redux";
import Home from "../pages/Home";
import {switchTheme} from "./slices";

function mapStateToProps(state) {
    return {
        items: state.app.items,
        darkMode: state.app.darkMode
    };
}


function mapDispatchToProps(dispatch) {
    return  {
        switchTheme: () => dispatch(switchTheme())
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
