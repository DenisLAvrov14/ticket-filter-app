import { useState, useEffect } from 'react';
import { Ticket } from '../../models/Ticket';
import ticketsData from '../../data/tickets.json';

const useFilteredTickets = (filterStops: number | null) => {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    let sortedTickets = [...ticketsData.tickets].sort((a, b) => a.price - b.price);
    if (filterStops !== null) {
      sortedTickets = sortedTickets.filter(ticket => ticket.stops === filterStops);
    }
    setTickets(sortedTickets);
  }, [filterStops]);

  return tickets;
};

export default useFilteredTickets;
