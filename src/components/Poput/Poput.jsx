import React, {useRef, useState} from "react";
import {data} from '../tinderActions/data.js';
import Tinder from "../tinderActions/Tinder";


const Poput = () => {
    const [activity,setActivity] = useState([])
    const [state, setState] = useState([])
    const inputPriceMin = useRef(null);
    const inputPriceMax = useRef(null);
    const inputDateStart = useRef(null);
    const inputDateEnd = useRef(null);
    const inputPlaceStart = useRef(null);
    const inputPlaceEnd =useRef(null);
    /**
     * ПОФИКСИТЬ С ДАТАМИ
     *   const filterDateStart = data.filter(el=> el.beginDate.toDate() >= inputDateStart.val(moment).toDate())
     *     const filterDateEnd = data.filter(el=> moment(el.beginDate).unix() <= moment(inputDateEnd).unix())
     */

    const setWomen = () => {
        if (!activity.includes('Женское')) {
            setActivity( 'Женское')
        } else {
            setActivity('')
        }
    }

    const setActiveSport = () => {
        if (!activity.includes('Активный')) {
        } else {
            setActivity('')
        }
    }

    const setChildren = () => {
        if (!activity.includes('С детьми')) {
            setActivity('С детьми')
        } else {
            setActivity('')
        }
    }

    const setDance = () => {
        if (!activity.includes('Тусовки')) {
            setActivity('Тусовки')
        } else {
            setActivity('')
        }
    }


    const handleFilter = () => {
        if(inputPriceMin.current.value) {
            setState(data.filter(el => el.price >= +(inputPriceMin.current.value)))
        }

            if(inputPriceMax.current.value) {
                setState(data.filter(el => el.price <= +(inputPriceMax.current.value)))
            }

                if(inputPlaceStart.current.value) {
                    setState(data.filter(el => el.placeStart === inputPlaceStart.current.value))
                }

                    if(inputPlaceEnd.current.value) {
                        setState(data.filter(el=>el.placeEnd === inputPlaceStart.current.value))
                    }

                    if(activity.length) {
                        setState(data.filter(el=>el.activity === activity))
                    }
             }


    return (
        <>
        {/*<div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>*/}
            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <input type='number' ref={inputPriceMin} placeholder='Минимальная стоимость в рублях' />
                <input type='number' ref={inputPriceMax} placeholder='Максимальная стоимость в рублях'/>
            </div>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <input type='date' ref={inputDateStart} placeholder='Дата начала ивента'/>
                <input type='date' ref={inputDateEnd} placeholder='Дата окончания ивента' />
            </div>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <input type='text' ref={inputPlaceStart} placeholder='Место отправления'/>
                <input type='text' ref={inputPlaceEnd} placeholder='Финиш' />
            </div>
                <fieldset style={{display:'flex', flexDirection:'column',justifyContent:'center'}}>
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
            <div style={{display:'flex', justifyContent:'center'}}>
                <button onClick={handleFilter}>Отфильтровать</button>
            </div>
            {state.length ? <Tinder data={state}/> : <div></div>}
        {/*</div>*/}
            </>
    )
}

export default Poput;
