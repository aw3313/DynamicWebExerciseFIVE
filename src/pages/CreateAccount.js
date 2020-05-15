import React from 'react';
//Components
import CreateAccountForm from '../components/CreateAccountForm';


function CreateAccount({CreateAccountFunction}){
    console.log('CreateAccountFunction', CreateAccountFunction);
    return (
        <div>
            <h1>Create Account</h1>
            <CreateAccountForm CreateAccountFunction={CreateAccountFunction}/>

        </div>
    );
}

export default CreateAccount;
