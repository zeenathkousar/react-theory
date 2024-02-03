import { createElement } from 'react';

// function App2({ name }) {
//   return createElement(
//     'h1',
//     { className: 'greeting' },
//     'heading1 ',
//     createElement('i', null, name),
//     '. Welcome!'
//   );
// }

// export default  App2

// . For comparison, here is the same example rewritten with JSX:

function App2() {
    return (
      <h1 className="greeting">
        Hello <i>name</i>. Welcome!
      </h1>
    );
  }
  
  export default App2
