import React  from "react";
import { useNavigate } from "react-router-dom";
import './/registration.css'
import {InputField} from "../components/InputField";
import {Button} from "../components/Button";
import {login} from "../actions/user";
import {useForm} from "../hooks/useForm";

export const Login = () => {
    const {setItem, getItem} = useForm({})
    const navigate = useNavigate();
    const onLogin = async () => {
        const result = await login({
            email: getItem('email'),
            password: getItem('password')
        })
        if (result.error) {
            setItem('error', result.error.message)
        } else {
            localStorage.setItem('auth', window.btoa(`${getItem('email')}:${getItem('password')}`))
            navigate('/dashboard')
        }
    }

    const onErrorClear = (e) => {
        setItem('error', '')
    }
    const renderErrorMessage = () => {
        if (getItem('error', '')) {
            return (<div style={{color: 'red'}}>
                <span style={{marginLeft: '5px', cursor: 'pointer'}} onClick={onErrorClear}><b>{getItem('error')}</b></span>
            </div>)
        }
        return null
    }

    return (
        <div style={{display:"flex",flexDirection:'column', width: '30%',margin:'auto',paddingBottom: '20px'}}>
            {renderErrorMessage()}
            <div style={{margin: '20px', fontSize: '30px', fontWeight: 'bold',fontFamily: 'fantasy', color: '#06b'}}>Login</div>
            <InputField value={getItem('email')} label="Email" setValue={(value) => setItem('email', value)}/>
            <InputField value={getItem('password')} label="Password" setValue={(value) => setItem('password', value)} type="password"/>
            <Button label={"Login"} onClick={onLogin}/>
        </div>
    )
}