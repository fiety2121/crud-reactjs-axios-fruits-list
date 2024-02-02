import React from 'react';
import { Table } from './table';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Home } from './Home';
// import { Update } from './update'; // Adjust the filename based on your actual file
// import { Create } from './create'; // Adjust the filename based on your actual file
// import { Read } from './read'; // Adjust the filename based on your actual file

function App() {
  return (
    <div className="App">
      <Table/>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/tp2/Home' element={<Home />} />
          <Route path='/tp2/update' element={<Update />} />
          <Route path='/tp2/create' element={<Create />} />
          <Route path='/tp2/read' element={<Read />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
