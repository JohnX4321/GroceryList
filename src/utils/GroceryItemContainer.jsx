import {connect} from "react-redux";
import GroceryItem from "../components/GroceryItem";
import {completeItem,deleteItem} from "./slices";

function mapDispatchToProps(dispatch) {
    return  {
        completeItem: (id) => dispatch(completeItem(id)),
        deleteItem: (id) => dispatch(deleteItem(id))
    };
}

export default connect(null,mapDispatchToProps)(GroceryItem);