import {React,useState} from 'react'


export default function AddTodo() {
    const [name,handelName] = useState();

    const handelChange = (e) => {
        handelName({
            name:e.target.value
        })
       
      
    }
    console.log(name)

  return (
    <div>
        <form className="form-group">
            <div>
                <label htmlFor="">Name</label>
                <input type="text" name="name" value={name} onChange={handelChange}/>
                <br /><br />
                <label htmlFor="">Work</label>
                <input type="text" name="work" value=""/>
                <br /><br />
                <input type="submit" />
            </div>
        </form>
    </div>
  )
}



