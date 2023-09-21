'use client'
import { useState } from "react"
import Input from "../input"

export default function AutoCompleteTags({label, placeholder, type, size, items, onSelect}) {
    const [value, setValue] = useState({name: ""})

    const [filteredItems, setFilteredItems] = useState([])
    const onClick = (item) => {
        onSelect(item)
        setValue(item)
        setFilteredItems([])
    }

    const reset = () => {
        setValue({name: ""})
        onSelect(null)
    }

    const onChange = (e) => {
        if(e.target.value === ""){
            setFilteredItems([])
        } else{
            setFilteredItems([...items.filter(item => item.name.includes(e.target.value))])
        }
        
    }
    
    return(
        <div className={"autocomplete " + size} >
             <Input placeholder={placeholder} type={type} onChange={onChange} label={label} size={size} /> 

            {value.name !=="" && <div className="tag">
                <span>{value.name}</span> <i onClick={reset}>X</i>
            </div> }
            {filteredItems.length >0 &&  <div className="dropdown dropdown-tags">
                {filteredItems.map(item => (<a onClick={() => onClick(item)}>{item.name}</a>))}
             </div> }
        </div>
    )
}  