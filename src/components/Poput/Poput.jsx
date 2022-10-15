import React, {useRef, useState} from "react";
import {data} from './data.js';
import Tinder from "../tinderActions/Tinder";


const Poput = () => {
    Array.prototype.intersect = function intersect(a, ...b) {
        const c = function (a, b) {
            b = new Set(b);
            return a.filter((a) => b.has(a));
        };
        return undefined === a ? this : intersect.call(c(this, a), ...b);
    };

    const [activity,setActivity] = useState([])
    const [state, setState] = useState([])
    const inputPriceMin = useRef(null);
    const inputPriceMax = useRef(null);
    const inputDateStart = useRef(null);
    const inputDateEnd = useRef(null);
    const inputPlaceStart = useRef(null);
    const inputPlaceEnd =useRef(null);
    const filterPriceMin = data.filter(el=>el.price >= inputPriceMin)
    const filterPriceMax = data.filter(el=>el.price <= inputPriceMax)
    /**
     * ПОФИКСИТЬ С ДАТАМИ
     *   const filterDateStart = data.filter(el=> el.beginDate.toDate() >= inputDateStart.val(moment).toDate())
     *     const filterDateEnd = data.filter(el=> moment(el.beginDate).unix() <= moment(inputDateEnd).unix())
     */
    const filterPlaceStart = data.filter(el=>el.placeStart === inputPlaceStart)
    const filterPlaceEnd = data.filter(el=>el.placeEnd === inputPlaceEnd)

    const setWomen = () => {
        setActivity([...activity,'Женское'])
    }

    const setActiveSport = () => {
        setActivity([...activity,'Активный'])
    }

    const setChildren = () => {
        setActivity([...activity,'С детьми'])
    }

    const setDance = () => {
        setActivity([...activity,'Тусовки'])
    }

    const filterActivity = activity.filter(el=> !data.activity.includes(el))

    const handleFilter = () => {
        setState(filterPriceMin.intersect(filterPriceMax,filterPlaceStart,filterPlaceEnd,filterActivity))
    }


    return (
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <input type='number' ref={inputPriceMin} placeholder='Минимальная стоимость в рублях' />
                <input type='number' ref={inputPriceMax} placeholder='Максимальная стоимость в рублях'/>
            </div>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <input type='date' ref={inputDateStart} placeholder='Дата начала ивента'/>
                <input type='date' ref={inputDateEnd} placeholder='Дата окончания ивента' />
            </div>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <input type='text' ref={inputPlaceStart} placeholder='Место отправления'/>
                <input type='text' ref={inputPlaceEnd} placeholder='Финиш' />
            </div>
                <fieldset>
                    <legend>Выберите особенности:</legend>
                    <div>
                        <input type="checkbox" name="Женское" onClick={setWomen}/>
                        <label htmlFor="scales">Женское</label>
                    </div>
                    <div>
                        <input type="checkbox" id="horns" name="Активный" onClick={setActiveSport}/>
                        <label htmlFor="horns">Активный</label>
                    </div>
                    <div>
                        <input type="checkbox" id="horns" name="С детьми" onClick={setChildren}/>
                        <label htmlFor="horns">С детьми</label>
                    </div>
                    <div>
                        <input type="checkbox" id="horns" name="Тусовки" onClick={setDance}/>
                        <label htmlFor="horns">Тусовки</label>
                    </div>
                </fieldset>
            <button onClick={handleFilter}>Отфильтровать</button>
            {/*{state && <Tinder data={state}/>}*/}
        </div>
    )
}

export default Poput;
