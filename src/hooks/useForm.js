import {useState} from "react";

export const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues)

    const setItem = (propName, value) => {
        setValues((previousValues) => {
            return  {...previousValues, [propName]: value}
        })
    }

    const setMultipleValues = (newValues) => {
        setValues({...values, ...newValues})
    }
    const getItem = (propName, defaultValue) => {
        return values[propName] ?? defaultValue
    }

    return {
        setItem,
        getItem,
        setMultipleValues,
        values
    }
}

/**

let values = {
    id: 1,
    name: 'jgjy'
}

let y = {
    ...values
}
y.id =3;

values.id


let a = 1
let b = a
b = 4
a


*/