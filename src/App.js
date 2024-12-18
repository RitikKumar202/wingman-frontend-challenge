import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WingmanChatbot from './components/WingmanChatBot';

function App() {
  return (

    <BrowserRouter>
      <div className="flex h-screen font-Inter">
        <div>
          <Sidebar />
        </div>

        <div className="flex-1 flex flex-col overflow-y-auto">
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/chats' element={<WingmanChatbot />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
