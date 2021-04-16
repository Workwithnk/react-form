import React, { useState } from "react";

function FormData() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [submit,setSubmit] = useState([]);
  const formSubmit = (e) =>{
      e.preventDefault();
      if(name && password){
      let formData = {id:new Date().getTime().toString(), email: name, pass : password}
      setSubmit([...submit,formData]);
      setName('');
      setPassword('');
    }else{
      alert('Plz fill the data!!');
    }
  }
  return (
    <>
      <form onSubmit={formSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button>Submit</button>
      </form>
      <div>
          {
              submit.map((e)=>{
                 return <h1 key={e.id}> name is {e.email} and pass is {e.pass }</h1>
              })
          }
      </div>
    </>
  );
}

export default FormData;
