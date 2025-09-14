import React from "react";

const SearchInput = ({searchText, changeSearch, onFocus, onBlur}) => {

    const inputRef = React.useRef(null);

    const changeSearchInputHandler = (e) => {
        changeSearch(e.target.value)
    };

    const handleClearInput = () => {
        changeSearch("");
        if(inputRef && inputRef.current) {
            inputRef.current.focus();
        }
    }


    return (
        <div className="search-input-wrapper">
            <input ref={inputRef} className="search-input" type='text' placeholder='Searching is easier' value={searchText} onChange={(e) => changeSearchInputHandler(e)} onFocus={onFocus} onBlur={onBlur}/>
            {
                (searchText.trim() !== '') ? <span className='clear' onClick={() => handleClearInput()}>Clear</span> : null
            }
        </div>

    )
}

export default SearchInput;