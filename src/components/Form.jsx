import React,{useEffect} from 'react'


const Form = ({setSend,send,form,setForm}) => {

 const handleChange = (e)=>{
  const {name,value,type,checked,files} = e.target
  if(type==="checkbox"){
    setForm({
        ...form,
        [name]:checked 
      })
  }
  else if(type==="file"){
    setForm({
        ...form,
        [name]:files 
      })
  }
  else{
    setForm({
        ...form,
        [name]:value 
      })
  }
  
 }

 const handleSubmit = (event) =>{
     event.preventDefault();
    //  console.log(form)
     fetch("http://localhost:3003/forms",{
         method:"POST",
         headers:{
             "content-type" : "application/json"
         },
         body: JSON.stringify({
             username:form.username,
             number:form.number,
             address:form.Address,
             salary:form.salary,
             department:form.department,
             maritalstatus:form.maritalstatus,
             resume:form.resume,
         })
     })
     .then((res)=>res.json())
     .then((data)=>{
         setSend([...send,data])
         setForm("")
         console.log(data)
     })
     
 }
 useEffect(()=>{
    fetch("http://localhost:3003/forms")
    .then((res)=>res.json())
         .then((data)=>{
             setSend(data)
         })
 },[])


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name : </label>
                <input type="text" name='username' value={form.username}  onChange={handleChange} />
            </div>
            <div>
                <label>Number : </label>
                <input type="number" name='number' value={form.number}   onChange={handleChange} />
            </div>
            <div>
                <label>Address : </label>
                <input type="text" name='Address' value={form.Address} onChange={handleChange} />
            </div>
            <div>
                <label>Salary : </label>
                <input type="number" name='salary' value={form.salary} onChange={handleChange} />
            </div>
            <div>
                <label>Marital Status : </label>
                <input type="checkbox" name='maritalstatus' checked={form.maritalstatus}  onChange={handleChange} />
            </div>
            <div>
                <label >Department : </label>
                <select name="department" value={form.department} onChange={handleChange}>
                    <option value="executive">Executive</option>
                    <option value="operations">Operations</option>
                </select>
            </div>
            <div>
                <label>Resume : </label>
                <input type="file"  name='resume' value={form.resume}  onChange={handleChange} />
            </div>
            <button type='submit'>Submit</button>
        </form>
        <div>
            <div>
            
            </div>
            
        </div>
    </div>
  )
}

export default Form