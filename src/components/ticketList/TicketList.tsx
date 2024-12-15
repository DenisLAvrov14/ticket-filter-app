import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import TicketCard from '../ticketCard/TicketCard';
import ticketsData from '../../data/tickets.json';

const TicketList: React.FC = () => {
  const filterStops = useSelector((state: RootState) => state.filter.filterStops);

  const filteredTickets = ticketsData.tickets
    .sort((a, b) => a.price - b.price)
    .filter(ticket => (filterStops !== null ? ticket.stops === filterStops : true));

  return (
    <div>
      {filteredTickets.map(ticket => (
        <TicketCard key={ticket.departure_time + ticket.price} ticket={ticket} />
      ))}
    </div>
  );
};

export default TicketList;
