import {useEffect, useState} from "react";
import {getUserInfo} from "../actions/user";
import {DataTable} from "../components/DataTable";

export const Dashboard = () => {
    const [user, setUser] = useState({})

    const getUser = async () => {
        const user = await getUserInfo()
        setUser(user)
    }

    useEffect( () => {
        getUser()
    }, [])



    return (
        <div>
            User dashboard
            <DataTable data={[user]} headers={Object.keys(user)}/>
        </div>
    )
}


