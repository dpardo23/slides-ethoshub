import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { SlideViewer } from './components/SlideViewer';
import { Home } from './components/Home'; // Nuevo import

import { sprint1Slides } from './data/sprint1';
import { sprint2Slides } from './data/sprint2';

const App = () => {
  // Cambiamos el estado inicial a 'home'
  const [activeSprint, setActiveSprint] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sprintDataMap = {
    1: sprint1Slides,
    2: sprint2Slides,
    3: [],
    4: [],
    5: [],
    6: []
  };

  return (
    <div className="w-full h-screen bg-[#000000] overflow-hidden relative text-white">
      <Sidebar
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        activeSprint={activeSprint}
        setActiveSprint={setActiveSprint}
      />

      {/* Lógica de renderizado condicional */}
      {activeSprint === 'home' ? (
        <Home onStart={() => setIsSidebarOpen(true)} />
      ) : (
        <SlideViewer
          slides={sprintDataMap[activeSprint]}
          activeSprint={activeSprint}
        />
      )}
    </div>
  );
};

export default App;