// import {React,useState} from 'react'


// export default function AddTodo() {
//     const [name,handelName] = useState("");
//     const [work,handelWork] = useState("");

//     const handelNameChange = (e) => {
//         handelName({
//             name:e.target.value
//         })
//     }

//     const handelWorkChange = (e) => {
//         handelWork({
//             work:e.target.value
//         })
//     }
//     const handelSubmit = (e) => {
//         e.preventDefault()
//         console.log(name,work)
//     }

//   return (
//     <div>
//         <form className="form-group" onSubmit = {handelSubmit}>
//             <div>
//                 <label htmlFor="">Name</label>
//                 <input type="text" name="name" value={name} onChange={handelNameChange}/>
//                 <br /><br />
//                 <label htmlFor="">Work</label>
//                 <input type="text" name="work" value={work}  onChange={handelWorkChange} />
//                 <br /><br />
//                 <input type="submit" />
//             </div>
//         </form>
//     </div>
//   )
// }

import React, { Component } from 'react'

export default class AddTodo extends Component {
    state = {
        name:"",
        work:"",
    }

    handelNameChange = (e) =>{
      //console.log(e.target.value)
        this.setState({
            name:e.target.value
        })
    }

    handelWorkChange = (e) =>{
        //console.log(e.target.value)
          this.setState({
              work:e.target.value
        })
    }

    handelSubmit = (e) =>{
        //console.log(e.target.value)
        e.preventDefault()
        this.props.handleChild(this.state);
        console.log(this.state)
    }
   

  render() {
    return (
        <div>
            <form className="form-group"  onSubmit = {this.handelSubmit}>
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" name="name" value={this.name} onChange={this.handelNameChange}/>
                    <br /><br />
                    <label htmlFor="">Work</label>
                    <input type="text" name="work" value={this.work} onChange={this.handelWorkChange}  />
                    <br /><br />
                    <input type="submit" />
                </div>
            </form>
        </div>
    )
  }
}




