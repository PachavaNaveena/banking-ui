import './/registration.css'
import {register} from "../actions/user";
export const Registration = () => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const formValues = e.target
        const user = {
            "firstname": formValues.firstname.value,
            "lastname": formValues.lastname.value,
            "email": formValues.email.value,
            "address1": formValues.address1.value,
            "address2": formValues.address2.value,
            "city" : formValues.city.value,
            "state": formValues.state.value,
            "zipcode": formValues.zipcode.value,
            "password": formValues.password.value
        }

        const result = await register(user);
        if (result.error) {
            alert(result.error.message);
        } else {
            alert("Registration successful. Please login")
            document.getElementById("form").reset()
        }
    }

    return (<div style={{display: 'flex', flexDirection: 'column', width: '30%', margin: 'auto'}}>
        <div style={{margin: '20px', fontSize: '30px', fontWeight: 'bold',fontFamily: 'fantasy', color: '#06b'}}>Register</div>
        <form id="form" onSubmit={onSubmit}>
            <div>
                <label htmlFor="firstname">First Name</label>
                <input type="text" name="firstname" id="firstname" placeholder="naveena" required  />
            </div>
            <div>
                <label htmlFor="lastname">Last Name</label>
                <input type="text" name="lastname" id="lastname" placeholder="pachava" required />
            </div>
            <div>
                <label htmlFor="email">Email ID</label>
                <input type="email" name="email" id="email" placeholder="123@gmail.com" required />
            </div>
            <div>
                <label htmlFor="Add1">Address 1</label>
                <input type="text" name="address1" id="Add1" placeholder="1234 abcd" required />
            </div>
            <div>
                <label htmlFor="Add2">Address 2</label>
                <input type="text" name="address2" id="Add2" placeholder="abcd abcd"/>
            </div>
            <div>
                <label htmlFor="city">City</label>
                <input type="text" name="city" id="city" placeholder="dallas" required />
            </div>
            <div>
                <label htmlFor="st">state</label>
                <input type="text" name="state" id="st" placeholder="TX" required />
            </div>
            <div>
                <label htmlFor="zip">Zipcode</label>
                <input type="text" name="zipcode" id="zip" placeholder="523002" required />
            </div>
            <div>
                <label htmlFor="pass">Password</label>
                <input type="password" name="password" id="pass" placeholder="......." required />
            </div>
            <div>
                <input type="submit" value="register" style={{width: '80%'}}></input>
            </div>
        </form>
    </div>);
}
