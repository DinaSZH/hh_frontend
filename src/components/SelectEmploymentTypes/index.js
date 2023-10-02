import { useState, useEffect } from "react"

export default function SelectEmploymentTypes({employmentTypes, label, size, onChange}) {
    const [eTypes, setETypes] = useState([])

    const onSelect = (e) => {
        // console.log(e.target.value, e.target.name, e.target.checked)

        const tps = [...eTypes]
        if(e.target.checked && !tps.includes(e.target.value*1)){
            setETypes([...tps, e.target.value*1])
        } else if(!e.target.checked && tps.includes(e.target.value*1)){
            const index = tps.indexOf(e.target.value*1);
            tps.splice(index, 1);
            setETypes(tps)
        }
    }

    useEffect(() => {
        onChange(eTypes)
    }, [eTypes])

    console.log(eTypes)
    return(
        <fieldset className={"fieldset " + size} >
            <label>{label}</label>
            <div>
                {employmentTypes.map((type, index) => <div key={index} className="checkbox">
                    <input type="checkbox" name="employmentTypes" value={type.id} id={type.id + "-type"} onChange={onSelect}/> 
                    <label for={type.id + "-type"}>{type.name}</label>
            </div>
                    )}
            </div>
        </fieldset>
    )
}