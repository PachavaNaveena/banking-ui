import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import {LandingPage} from "./containers/LangingPage";
import {Dashboard} from "./containers/Dashboard";

const PrivateRoute =  (props) => {
    const {children} = props
    const auth = localStorage.getItem('auth')
    if (!auth) {
        return <Navigate to="/" />
    }
    return children
}

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} exact />
                <Route path="dashboard" element={<PrivateRoute>
                    <Dashboard/>
                </PrivateRoute>} />
                <Route path="*"
                       element={<PrivateRoute>
                           <Navigate to="/dashboard" />
                       </PrivateRoute>}
                />
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
 * other react hooks
 */