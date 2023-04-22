export const InputField = (props) => {
    const {label, value = '', id, type, setValue, style, placeholder} = props
    const onChange = (e) => {
        setValue(e.target.value)
    }
    return (
        <div>
            <label>{label}</label>
            <input id={id} value={value} onChange={onChange} type={type} style={{marginTop: '5px'}} placeholder={placeholder}/>
        </div>
    )
}