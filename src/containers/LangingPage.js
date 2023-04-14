import {Registration} from "./Registration";
import {Login} from "./Login";

export const LandingPage = () => {
    return (
        <div style={containerStyle}>
            <Registration />
            <Login />
        </div>
    )
}

const containerStyle = {display: 'flex'}