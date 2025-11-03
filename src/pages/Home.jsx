import React, { useEffect } from 'react'
import { StoreCatalog } from '../components/StoreCatalog'
import axios from 'axios';

const Home = () => {
 


  const fetchUsers = ()=>{
      axios.get('https://fakestoreapi.com/users')
        .then(response => console.log('Users',response.data))
  };

  const fetchAuth = () =>{
    
      const credentials = { username: 'johnd', password: 'm38rmF$' };
      axios.post('https://fakestoreapi.com/auth/login', credentials)
        .then(response => console.log(response.data));
  };

  
   
    

  

  useEffect(()=>{
    fetchUsers()
    fetchAuth()
  }, []);

  return (
   

    <div>

        < StoreCatalog />
    </div>
  )
}

export default Home