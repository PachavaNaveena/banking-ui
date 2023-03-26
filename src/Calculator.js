import React, {useState} from 'react'
import {calcualte} from "./operations";
import {createNumbers} from "./createnumbers";

export const Calculator = (props) => {
    const [inputVal, setInputValue] = useState(0);
    const [operation, setOperation] = useState('');
    const [output, setOutput] = useState(0);

//create numbers,calculate,onbuttonclick,return

    const onButtonClick = (e) => {
        const val = e.target.id
        if(val == 'clr') {
            console.log(val,inputVal,output,operation)
            setInputValue(0)
        } else if (isNaN(val)) {
            console.log(val,inputVal,output,operation)
            if (inputVal && output && operation) {
                const result = calcualte(inputVal, output, operation)
                setInputValue(result)
                setOutput(0)
                console.log(val,inputVal,output,operation)
            }
            setOperation(val)
            console.log(val,inputVal,output,operation)
        } else {
            if (inputVal) {
                setOutput(inputVal)
            }
            setInputValue(parseInt(e.target.id))
            console.log(val,inputVal,output,operation)
        }
    }

    return (
        <div>
            <input value={inputVal} readOnly={true}/>
            {
                createNumbers().map((row, rIndex) => {
                    return (<div key={rIndex}>
                        {
                            row.map((number, cIndex) => {
                                return <button id={number} key={cIndex} onClick={onButtonClick}>{number}</button>
                            })
                        }
                    </div>)
                })
            }
            {
                [[0, "+", "-"], ["/", "*", "="],['clr']].map((row, rIndex) => {
                    return (<div key={rIndex}>
                        {
                            row.map((number, cIndex) => {
                                return <button id={number} key={cIndex} onClick={onButtonClick}>{number}</button>
                            })
                        }
                    </div>)
                })
            }
        </div>
    )
}

