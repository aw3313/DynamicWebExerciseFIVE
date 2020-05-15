import React from 'react';


function CreateAccountForm({ CreateAccountFunction }){
    return (
        <div>

            <form className="forms" onSubmit={(formValues) => CreateAccountFunction(formValues)}>
                <h3>Create an Account</h3>
                <label htmlFor="createEmail">Email</label>
                <input type="email" name="createEmail" placeholder="Email"/>
                <label htmlFor="createPassword">Password</label>
                <input type="password" name="createPassword" placeholder="Password"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default CreateAccountForm;
