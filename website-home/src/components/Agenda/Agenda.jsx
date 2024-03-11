

import React from 'react';
import AgendaCard from './AgendaCard';
import { agenda } from '../../data/Agenda';

function Agenda() {
  return (
    <div className="agenda-container">
      {agenda.map((agendaItem, index) => (
        <AgendaCard key={index} {...agendaItem} />
      ))}
    </div>
  );
}

export default Agenda;