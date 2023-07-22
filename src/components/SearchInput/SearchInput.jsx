import "./SearchInput.css";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import ClearIcon from '@mui/icons-material/Clear';
import { useState } from "react";

const SearchInput = (props) => {

    const [stateIcon, setStateIcon] = useState(true)

    const handleState = () => {
        const newStateIcon = !stateIcon; 
        setStateIcon(newStateIcon); 
        props.changeState(newStateIcon);
    }

    return(
        <div className="input-container">
            <div className="input-wrapper">
                {stateIcon ? <SearchSharpIcon style={{fontSize: "25px", marginRight: "5px"}} onClick={handleState} /> : <ClearIcon style={{fontSize: "25px", marginRight: "5px"}} onClick={handleState}/> }
                <input className="input" placeholder="search"></input>
            </div>
        </div>
    )
}

export default SearchInput;
