import React from "react";
import {InputField} from "../components/InputField";
import {Button} from "../components/Button";
import {doWithdraw} from "../actions/transfer";
import {useForm} from "../hooks/useForm";
export const Withdraw = () =>{
    const {setItem, getItem, setMultipleValues} = useForm({})
    const withdraw = async () =>{
        const result = await doWithdraw({
            amount : parseInt(getItem('amount'))
        })
        if(result.error){
            setItem('error', result.error.message)
        }else{
            setMultipleValues({
                error: '',
                amount: ''
            })
            alert(result.message)
        }
    }

    return(<div style={{width: "50%", margin: "auto"}}>
        <h2>Withdraw</h2>
        <div style={{marginTop: '20px'}}>
            <InputField
                id={'amount'}
                value={getItem('amount')}
                label="Amount"
                setValue={(value) => setItem('amount', value)}
                type="number"
            />
        </div>
        <div>
            <Button label={"send"} onClick={withdraw} /> <br/><br/>
        </div>
        <span style={{marginLeft: '5px', cursor: 'pointer', color:"red",marginBottom:'50px'}} ><b>{getItem('error')}</b></span>
    </div>)
}