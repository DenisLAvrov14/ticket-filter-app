import React from 'react';
import Filter from './components/filter/Filter';
import TicketList from './components/ticketList/TicketList';

const App: React.FC = () => {
  return (
    <div style={{ margin: '20px' }}>
      <h1>Поиск билетов</h1>
      <Filter />
      <TicketList />
    </div>
  );
};

export default App;
