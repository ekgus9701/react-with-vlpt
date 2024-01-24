import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper>
      <div>
        <Hello name="react" color="red"/>
        <Hello n color="pink"/>
      </div>
    </Wrapper>
    
  );
}

export default App;
