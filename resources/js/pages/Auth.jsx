import { useForm } from '@inertiajs/react'
import React from 'react'
import { router } from '@inertiajs/react'

export default function AuthAdmin() {
  const {data,setData,processing,errors,post} = useForm({
    email:'',
    password:'',
  });
  function submit(e){
    e.preventDefault();
    console.log(data);
    router.post('/users',data);
  }
  console.log(errors);
  return (
    <div>
        <form  onSubmit={submit} >
            <label htmlFor="">Email</label>
            <input type="text" name="email" id="email" value={data.email} onChange={(e)=>setData('email',e.target.value)}/>
            <label htmlFor="">Password</label>
            <input type="password" name="password" id="password" value={data.password} onChange={(e)=>setData('password',e.target.value)}/>
            <button>Log In</button>
        </form>        
    </div>
  )
}
