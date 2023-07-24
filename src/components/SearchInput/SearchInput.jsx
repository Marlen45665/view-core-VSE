import "./SearchInput.css";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useState, useRef, useEffect } from "react";


const SearchInput = (props) => {

    const inputRef = useRef(null)
    const [stateIcon, setStateIcon] = useState(true)
    const [inputState, setInputState] = useState('')

    const handleDefaultApi = () => {
        console.log("загрузка дефолтных данных")
    }

    const handleApi = () => {
        console.log("загрузка данных")
    }
    
    //при каждом вводе в инпут меняет состояние 
    const handleInputChange = (event) => {
        setInputState(event.target.value);
    }

    //нажатие на entr
    const handleKeyPress = (event) => {
        //если мы нажали на entr а инпут пустой и панель не поднята
        if(inputState === "" && event.key === 'Enter' && stateIcon){
            //открыть панель с изменением иконки
            changeState()
            //загрузка дефллтных данных 
            handleDefaultApi()
        } else if (inputState === "" && event.key === 'Enter'){
            changeState()
        } else if( event.key === 'Enter' ){
            handleApi()
            props.changeState(false);
            setStateIcon(false)
        }
    }

    //нажатие на кнопку поиск
    const handleSearch = () => {
        //проверяем если инпут пуст, то запускаем дефолтные данные
        if(inputState === ""){
            handleDefaultApi()
        } else {
            handleApi()
        }
        //меняем иконку и открываем нижнюю панель
        changeState()
        //ставим фокус на инпут
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }

    //нажатие на кнопку отчистить
    const handleClear = () => {
        //контент поиска вкл выкл
        changeState()
        //убираем текст в инпуте
        setInputState("")
    }

    //контент поиска вкл выкл
    const changeState = () => {
        const newStateIcon = !stateIcon; 
        setStateIcon(newStateIcon); 
        props.changeState(newStateIcon);
    }

    return(
        <div className="input-container">
            <div className="input-wrapper">
                {stateIcon ? <SearchSharpIcon className="icon" style={{fontSize: "25px", marginRight: "5px"}} onClick={handleSearch} /> : <ClearIcon className="icon" style={{fontSize: "25px", marginRight: "5px"}} onClick={handleClear}/> }
                <input className="input" placeholder="search" value={inputState} onChange={handleInputChange} onKeyDown={handleKeyPress} ref={inputRef}></input>
                {inputState ? <ArrowUpwardIcon style={{fontSize: "25px", marginRight: "5px", color: "gray"}} /> : null}
            </div>
        </div>
    )
}

export default SearchInput;
