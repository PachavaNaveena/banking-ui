import React from "react";
import {InputField} from "../components/InputField";
import {Button} from "../components/Button";
import {doTransfer} from "../actions/transfer";
import {useForm} from "../hooks/useForm";
export const Transfer = () =>{
    const {setItem, getItem, setMultipleValues} = useForm({})
    const transfer = async () =>{
        const result = await doTransfer({
            amount : parseInt(getItem('amount')),
            id : getItem('receiverId')
        })
        if(result.error){
            setItem('error', result.error.message)
        }else{
            setMultipleValues({
                error: '',
                amount: '',
                receiverId: ''
            })
            alert(result.message)
        }
    }

    return(<div style={{width: "50%", margin: "auto"}}>
        <h2>Transfer</h2>
        <div style={{marginTop: '20px'}}>

            <InputField
                id={'receiverId'}
                value={getItem('receiverId')}
                label="Receiver Account Number"
                setValue={(value) => setItem('receiverId', value)}
                type="select"
            />
            <InputField
                id={'amount'}
                value={getItem('amount')}
                label="Amount"
                setValue={(value) => setItem('amount', value)}
                type="number"
            />

        </div>
        <div>
            <Button label={"send"} onClick={transfer} /> <br/><br/>
        </div>
        <span style={{marginLeft: '5px', cursor: 'pointer', color:"red",marginBottom:'50px'}} ><b>{getItem('error')}</b></span>
    </div>)
}