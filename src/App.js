
import React , {useState} from "react"
import './App.css'

function App(){
  const [data, setData] = useState({
    name: "",
    department: "",
    rating: ""
  })
  const {name, department,rating} = data
  const nameHandler=(e)=>{
    setData({...data, [e.target.name]:[e.target.value]})

  }
 
  const [list, setlist] = useState([])
  const submitHandler=(e)=>{
    e.preventDefault()
    setlist([...list,{...data}])
    
   
  }
    
    
  
  return(
    <div className="app_container">
     <div className="form_container">
     <h1>Employee Feedback Form</h1>
      <form onSubmit={submitHandler}>
        <span>Name</span>
        <input className="inputName" type="text"
          name="name"
          placeholder="enter name"
          onChange={nameHandler}
          value={name} />
          <br/>
          <br/>
        <span>Department</span>
        <input className="inputDepartment" type="text"
          name="department"
          placeholder="enter department"
          onChange={nameHandler}
          value={department} />
          <br/>
          <br/>
        <span>Rating</span>
        <input className="inputRating" type="number"
          name="rating"
          placeholder="enter rating"
          onChange={nameHandler}
          value={rating} />
          <br/>
          <br/>
          <input className="inputSubmit" type="submit"/>
      </form>
     </div>
      <section className="list_container">
       {
         list.map((v)=>{
          return(
           
              <div className="list_item">
               <p style={{color:'white'}}>Name: {v.name}</p>
               <p style={{color:'white'}}>Department: {v.department}</p>
               <p style={{color:'white'}}>Rating: {v.rating}</p>
              </div>
            
          )
         })
       }
      </section>
      
       
    </div>
  );
}

export default App;