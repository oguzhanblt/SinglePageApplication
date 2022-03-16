import React,{useState} from 'react';
import { Input } from 'reactstrap';
import Swal from "sweetalert2"


const InputItem=({onSave})=>{
    const[linkName,setLinkName]=useState('');
    const [linkUrl,setLinkUrl]=useState('');
    const [linkScore,setLinkScore]=useState(0);
    const onSubmit= (e)=>{
        e.preventDefault();
        if(!linkName&&!linkUrl){
            Swal.fire({
                icon:'error',
                title:'Opss..',
                text:'Fill in name and url'
            })
        }else if(!linkName&&linkUrl){
            Swal.fire({
                icon:'error',
                title:'Opps..',
                text:'Fill in link Name'
            })
        }else if(linkName&&!linkUrl){
            Swal.fire({
                icon:'error',
                title:'Opps...',
                text:'fill in link url'
            })
        }else{
            onSave({linkName,linkUrl,linkScore})
        }
        setLinkName('');
        setLinkUrl('');
        setLinkScore('0');
    }

    return(
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Link Name</label>
                <Input type="text" 
                    placeholder="add Link Name" 
                    value={linkName}  
                    onChange={(e)=>setLinkName(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Link URL</label>
                <Input 
                    type="text"
                    placeholder="Add link Url"
                    value={linkUrl}
                    onChange={(e)=>setLinkUrl(e.target.value)}/>
            </div>
            <Input type="submit" 
                className="btn btn-block" 
                value="Submit Link"/>
        </form>
    )
}
export default InputItem