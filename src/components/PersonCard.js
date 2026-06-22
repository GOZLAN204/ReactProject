import React from 'react';
import { getImagePath } from '../utils/getImagePath';

export default function PersonCard({ person, isSelected, onClick }) {
  const cardClassName = isSelected ? 'person-card person-card-selected' : 'person-card';

  return (
    <div
      className={cardClassName}
      onClick={() => onClick(person.idNumber)}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === 'Enter') {
          onClick(person.idNumber);
        }
      }}
    >
      <img
        className="person-image"
        src={getImagePath(person.image)}
        alt={person.name}
      />
      <p>שם: {person.name}</p>
      <p>ת.ז: {person.idNumber}</p>
      <p>כתובת: {person.address}</p>
    </div>
  );
}
