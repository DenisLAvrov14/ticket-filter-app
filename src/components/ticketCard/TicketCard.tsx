import React from 'react';
import { Ticket } from '../../models/Ticket';

interface TicketCardProps {
  ticket: Ticket;
}

const TicketCard: React.FC<TicketCardProps> = React.memo(({ ticket }) => {
  return (
    <div className="ticket-card">
      <h3>{ticket.origin_name} → {ticket.destination_name}</h3>
      <p>Вылет: {ticket.departure_time}, Прибытие: {ticket.arrival_time}</p>
      <p>Пересадок: {ticket.stops}</p>
      <p>Цена: {ticket.price} ₽</p>
      <p>Перевозчик: {ticket.carrier}</p>
    </div>
  );
});

export default TicketCard;
