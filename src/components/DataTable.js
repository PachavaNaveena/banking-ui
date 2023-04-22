export const DataTable = ({tableConfig, data}) => {

    const renderRow = (row) => {
        return tableConfig.map( (key, index) => <td key={index}>{row[key.id]}</td>)
    }
    const renderRows = () => {
        return data.map((row, index) => {
            return <tr key={index}>
                {renderRow(row)}
            </tr>
        })
    }

    const renderHeaders = () => {
        return tableConfig.map((header, index) =><th key={index}>{header.name}</th>)
    }

    return (
        <table className="table">
            <thead >
                <tr>{renderHeaders()}</tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}