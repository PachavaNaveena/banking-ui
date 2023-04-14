export const DataTable = ({headers, data}) => {

    const renderRow = (row) => {
        return Object.keys(row).map( key => <td>{row[key]}</td>)
    }
    const renderRows = () => {
        return data.map(row => {
            return <tr>
                {renderRow(row)}
            </tr>
        })
    }

    const renderHeaders = () => {
        return headers.map(header =><th>{header}</th>)
    }

    return (
        <table>
            <thead>
                {renderHeaders()}
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}