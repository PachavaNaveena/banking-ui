import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import {LandingPage} from "./containers/LangingPage";
import {Dashboard} from "./containers/Dashboard";
import {Deposit} from "./containers/Deposit";
import {Withdraw} from "./containers/Withdraw";
import {Transfer} from "./containers/Transfer";
import {Header} from "./components/Header";


const PrivateRoute =  (props) => {
    const {children} = props
    const auth = localStorage.getItem('auth')
    if (!auth) {
        return <Navigate to="/" />
    }
    return (<>
        <Header />
        {children}
    </>)


}
const PublicRoute =  (props) => {
    const {children} = props
    const auth = localStorage.getItem('auth')
    if (auth) {
        return <Navigate to="/dashboard" />
    }
    return children
}

const App = () => {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PublicRoute>
                    <LandingPage />
                </PublicRoute>} exact
                />
                <Route path="dashboard" element={<PrivateRoute>
                         <Dashboard/>
                     </PrivateRoute>}
                />
                <Route path="/deposit" element={<PrivateRoute>
                    <Deposit/>
                </PrivateRoute>} />
                <Route path="/transfer" element={<PrivateRoute>
                    <Transfer/>
                </PrivateRoute>} />
                <Route path="/withdraw" element={<PrivateRoute>
                    <Withdraw/>
                </PrivateRoute>} />
                <Route path="*" element={<PrivateRoute>
                    <Navigate to="/dashboard" />
                </PrivateRoute>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;


/**
 * props
 * state
 * useState
 * useEffect
 * hooks
 * react life cycle
 * react router
 *
 *
 * create transaction table.
 *
 *
 * prop types
 * other react hooks - useContext, useRef, useMemo , useReducer , useCallback
 */