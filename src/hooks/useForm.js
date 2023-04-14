import {useState} from "react";

export const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues)
    console.log(values)
    const setItem = (propName, value) => {
        //console.log(value)
        console.log(values)
        setValues({...values, [propName]: value})
        //console.log(value)
    }
    const getItem = (propName, defaultValue) => {
        return values[propName] ?? defaultValue
    }

    return {
        setItem,
        getItem,
        values
    }
}