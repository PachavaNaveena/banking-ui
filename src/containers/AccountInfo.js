import {useEffect, useState} from "react";
import {getUserInfo} from "../actions/user";

export const AccountInfo = () => {
    const [user, setUser] = useState({})

    const getUser = async () => {
        const user = await getUserInfo()
        setUser(user)
    }

    useEffect( () => {
        getUser()
    }, [])

    return (
        <div style={{width: '25%', margin: "auto", paddingBottom: '50px'}}>
            <div>
                <h3>Account Information</h3>
            </div>
            <div style={{display: 'flex', justifyContent: "space-between"}}>
                <span><b>Account Id: </b></span>
                <span>{user.id}</span>
            </div>
            <div style={{display: 'flex', justifyContent: "space-between"}}>
                <span><b>Firstname: </b></span>
                <span>{user.firstname}</span>
            </div>
            <div style={{display: 'flex', justifyContent: "space-between"}}>
                <span><b>Lastname:  </b></span>
                <span>{user.lastname}</span>
            </div>
            <div style={{display: 'flex', justifyContent: "space-between"}}>
                <span><b>Balance:  </b></span>
                <span>{user.balance}</span>
            </div>
        </div>
    )
}