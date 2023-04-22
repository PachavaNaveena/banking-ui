import {Transactions} from "./Transactions";
import {AccountInfo} from "./AccountInfo";

export const Dashboard = () => {
    return (
        <div>
            <AccountInfo />
            <Transactions />
        </div>
    )
}

