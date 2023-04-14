export const Button = (props) => {
    const {label, onClick} = props;
    return (
        <button onClick={onClick}>{label}</button>
    )
}