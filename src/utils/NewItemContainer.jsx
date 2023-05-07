import {connect} from "react-redux";
import NewGroceryItem from "../components/NewGroceryItem";
import {addItem} from "./slices";

function mapDispatchToProps(dispatch) {
    return {
        addItem: (title) => dispatch(addItem(title))
    };
}

export default connect(null,mapDispatchToProps)(NewGroceryItem);