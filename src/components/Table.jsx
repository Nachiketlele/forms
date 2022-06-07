import React from 'react'
import styles from "./styles.module.css"
const Table = ({send,setSend,setForm}) => {
      const handleDelete = (id) =>{
           //  console.log(form)
           
            fetch(`http://localhost:3003/forms/${id}`,{
                method:"DELETE",
            })
            fetch("http://localhost:3003/forms")
            .then((res)=>res.json())
                 .then((data)=>{
                     setSend(data)
                 })
        }


  return (
        <div>
 <table>
       <thead >
         <tr className={styles.tr}>
                 <th>UserName</th>
                 <th>Mobile.no</th>
                 <th>Address</th>
                 <th>Salary</th>
                 <th>Department</th>
                 <th>Marital Status</th>
                 <th>Resume</th>
             </tr>
       </thead>
       <tbody>

         {send.map((el)=>(
               <tr className={styles.tr1} key={el.id}>
                  <td>{el.username}</td>
                  <td>{el.number}</td>
                  <td>{el.address}</td>
                  <td>{el.salary}</td>
                  <td>{el.department}</td>
                  <td>{!el.maritalstatus?"Unmarried":"Married"}</td>
                  <td>{el.resume}</td>
                  <button onClick={()=>handleDelete(el.id)}>Delete</button>
               </tr>
              
         ))}
       </tbody>
  </table>
        </div>
  )

 
        


}

export default Table