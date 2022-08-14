import { FormControl,FormGroup, InputLabel,Input, Typography,styled,Button } from "@mui/material";
import {useState} from 'react';
import { addUser} from "../service/api";


const Container = styled(FormGroup)`
    width:50%;
    margin:5% auto 0 auto;
    & > div{
        margin-top:20px;
    }
`
const defaultValue = {
    name:'',
    username:'',
    email:'',
    phone:''
}
const AddUser = () =>{
    const[user,setUser] = useState(defaultValue);
    const onValueChange=(e)=>{
        // console.log(e.target.name,e.target.value);
        setUser({...user,[e.target.name]:e.target.value});
        // console.log(user);
    }

    const addUserDetails =async() =>{
        await addUser(user);
    }
    return(
        <Container>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="name"></Input>
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="username"></Input>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="email" ></Input>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="phone" ></Input>
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={() =>addUserDetails()} >Add User</Button>
            </FormControl>
        </Container>
        
    )
}

export default AddUser;