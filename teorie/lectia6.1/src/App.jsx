import React from 'react';
import "./App.css";

const styleApp = {color: "white", height: "3rem"};

const App = () => {
  return (
    <>
      <div className='bg-red p-1 uppercase' style={styleApp}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, recusandae!
      </div>
    </>
  );
}

export default App;
