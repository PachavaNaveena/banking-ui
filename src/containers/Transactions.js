import {DataTable} from "../components/DataTable";
import {useEffect, useState} from "react";
import {getUserTransactions} from "../actions/user";
import {InputField} from "../components/InputField";

const tableConfig = [
    {
        id: "sender",
        name: "Sender"
    },
    {
        id: "receiver",
        name: "Receiver"
    },
    {
        id: "amount",
        name: "Amount"
    },
    {
        id: "type",
        name: "Type"
    },
    {
        id: "date",
        name: "Date"
    }
]
export const Transactions = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        const newData = data.filter(item => {
            const sender = item.sender.toUpperCase()
            const receiver = item.receiver.toUpperCase()
            const type = item.type.toUpperCase()
            const formattedSearchText = searchText.toUpperCase()
            return sender.includes(formattedSearchText) ||
                receiver.includes(formattedSearchText) ||
                type.includes(formattedSearchText)
        })
        setFilteredData(newData)
    }, [searchText, data])

    useEffect(() => {
        getTransactions()
    }, [])
    const getTransactions = async () => {
        const result = await getUserTransactions()
        if (!result.error) {
            setData(result)
            setFilteredData(filteredData)
        }

    }

    return (
        <div>
            <h3>Recent transactions</h3>
            <div style={{width: "40%", margin: "auto"}}>
                <InputField type="text" id="search" value={searchText} setValue={setSearchText} placeholder={"Search"}/>
            </div>
            <DataTable data={filteredData} tableConfig={tableConfig}/>
        </div>
    )
}