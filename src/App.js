import React from 'react';
import publications from './publications';
import Reader from './components/Reader';
import './styles.css';

const App = () => (
  <>
    <Reader items={publications} />
  </>
);

export default App;
