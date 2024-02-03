import { createElement } from 'react';

function App({ name }) {
  return createElement(
    'h1',
    { className: 'greeting' },
    'heading1'
  );
}

export default App;