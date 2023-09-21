export default function SelectDate({size, label}) {
    const onChangeDay = () => {

    }

    const onChangeMonth = () => {

    }

    const onChangeYear = () => {

    }
    return(
        <fieldset className={"fieldset " + size} >
            <label>{label}</label>
            <div className="selectdate">
            <input className="input" placeholder="День" type="text" onChange={onChangeDay}/>
            <select onChange={onChangeMonth} placeholder="Месяц" className="input">
                <option>январь</option>
                <option>февраль</option>
                <option>март</option>
                <option>апрель</option>
                <option>май</option>
                <option>июнь</option>
                <option>июль</option>
                <option>август</option>
                <option>сентябрь</option>
                <option>октябрь</option>
                <option>ноябрь</option>
                <option>декабрь</option>
            </select>
            <input className="input" placeholder="Год" type="text" onChange={onChangeYear}/>
            </div>
            
        </fieldset>
    )
}