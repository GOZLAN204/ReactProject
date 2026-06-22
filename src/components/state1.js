import React, { useState } from 'react';
import '../App.css';
import { peopleData } from '../data/peopleData';
import PersonCard from './PersonCard';
import EditPersonForm from './EditPersonForm';

export default function MyState1() {
  const [people, setPeople] = useState(peopleData);
  const [selectedPersonId, setSelectedPersonId] = useState(null);

  const selectedPerson = people.find((person) => person.idNumber === selectedPersonId) || null;

  const handleCardClick = (idNumber) => {
    setSelectedPersonId(idNumber);
  };

  const handleSave = (updatedPerson) => {
    const updatedPeople = people.map((person) => {
      if (person.idNumber === updatedPerson.idNumber) {
        return updatedPerson;
      }
      return person;
    });

    setPeople(updatedPeople);
    setSelectedPersonId(null);
  };

  return (
    <div className="page-container">
      <h1 className="page-title">רשימת אנשים</h1>

      <div className="cards-container">
        {people.map((person) => (
          <PersonCard
            key={person.idNumber}
            person={person}
            isSelected={person.idNumber === selectedPersonId}
            onClick={handleCardClick}
          />
        ))}
      </div>

      {selectedPerson && (
        <EditPersonForm
          person={selectedPerson}
          onSave={handleSave}
        />
      )}
    </div>
  );
}
