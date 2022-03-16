import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { styled } from '@mui/styles';
import { Link } from 'react-router-dom';



const AppLogin = styled('div') ({
    position: 'relative',
    backgroundColor: '#A8EB12',
    width: '100%',
    height: '100vh',
      '& h2' : {  fontSize: '50px',
                  color: '#A8EB12',
                  fontWeight: '600',
                  wordSpacing: '5px',
                  marginTop: '50px',
               },
     
      '& form' : {  display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                    alignItems: 'center',
                    backgroundColor: '#053735',
                    width: '400px',
                    height: '440px',
                    position: 'absolute',
                    left: '40%',
                    top: '20%',
                    borderRadius: '10px',
                  },
      
      '& p' : {    fontSize: '30px',
                   fontWeight: '600', 
                   paddingTop: '10px',
                   color: '#A8EB12',
              },  
     
      '& input' : {  fontSize: '20px',
                     width: '300px',
                     height: '40px',
                     borderRadius: '8px',
                     border: 'none',
                    
                  },
     
       '& button' : { fontSize: '30px',
                      borderRadius: '6px',
                      color: '#053735',
                      border: '1px solid #A8EB12',
                      fontWeight: '600',
                      cursor: 'pointer',
                    },
       '& button:hover' : { backgroundColor: '#A8EB12',
                            transitionDuration: '0.8s',
       },


       '& [type="email"], [type="password"]' : { color: '#053735',
                    },                         
});



const typeLogin = yup.object().shape({
          email: yup.string().email().required(),
          password: yup.string().min(8).max(32).required(),
});

const Login = () => {
      const { register, handleSubmit, formState: { errors }, reset } = useForm({
      resolver: yupResolver(typeLogin),
  });
  
  
const onSubmitHandler = (data) => {
      console.log({ data });
      reset();
  };
  return (
   <AppLogin> 
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <h2>ToDo List</h2>
      <br />
       
      <p>Email</p>
      <input {...register("email")} placeholder="example name@gmail.com" type="email" required/>
      <span>{errors.email?.message}</span>
      <br />
      
      <p>Password</p> 
      <input {...register("password")} placeholder="example One12_qs" type="password" required/>
      <span>{errors.password?.message}</span>
      <br />

      <Link to="/Main">       
      <button type="submit">Sing in</button>
      </Link> 
     </form>
   </AppLogin>
  );
};

export default Login;