import React from 'react';

export default function Login(){
    return (
      <div>
        <h1>Login</h1>
        <form>
          <div>
            <input type='text' name='username' placeholder='Username'/>
          </div>
          <div>
            <input type='password' name='password' placeholder='Password'/>
          </div>
          <input type='submit' value='submit'/>
        </form>
      </div>
    );
  }