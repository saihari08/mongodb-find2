import React, { useState } from 'react'

function EmployeesForm() {

    let [employees,setEmployees]=useState([]);

let getEmployeesFromServer=async()=>{
    let reqOptions={
        method:"GET"
    }
    let JSONData=await fetch("http://localhost:2120/employees",reqOptions);
    let JSOData=await JSONData.json();
    setEmployees(JSOData);
    console.log(JSOData);
}

  return (
    <div>
      <form>
        <button type="button"onClick={()=>{
            getEmployeesFromServer();
        }}>Get Employees</button>
      </form>
      <div>
        <table>
            <thead>
                <tr> 
                <th>S.No</th>
                <th>id</th>
                <th>profilepic</th>
                <th>firstname</th>
                <th>lastname</th>
                <th>gender</th>
                <th>age</th>
                <th>email</th>
                <th>department</th>
                <th>country</th>
                </tr>
            </thead>
            <tbody>
           {employees.map((ele,i)=>{
            return(    
            <tr key={i}> 
                <td>{i+1}</td>
                <td>{ele.id}</td>
                <td><img src={ele.profilepic}></img></td>
                <td>{ele.firstname}</td>
                <td>{ele.lastname}</td>
                <td>{ele.gender}</td>
                <td>{ele.age}</td>
                <td>{ele.email}</td>
                <td>{ele.department}</td>
                <td>{ele.country}</td>
                </tr>
                 )
                })}
            </tbody>
            <tfoot></tfoot>
        </table>
      </div>
    </div>
  )
}

export default EmployeesForm
