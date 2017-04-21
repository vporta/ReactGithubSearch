import React from 'react';

/*  
If our component doesn't 
  1. Have any state, and 
  2. Only has a render method
  We can then make it just a function 
*/ 
const Home = () => {
  return ( 
    <h2 className="text-center">
      Hello
    </h2> 
  )
}

export default Home;