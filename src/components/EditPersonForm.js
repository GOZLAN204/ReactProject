import React, { useEffect, useState } from 'react';

export default function EditPersonForm({ person, onSave }) {
  const [formData, setFormData] = useState(person);

  useEffect(() => {
    setFormData(person);
  }, [person]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(formData);
  };

  return (
    <div className="edit-section">
      <h2>עריכת פרטי אובייקט</h2>
      <form className="edit-form" onSubmit={handleSubmit}>
        <label htmlFor="name">שם:</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="idNumber">ת.ז:</label>
        <input
          id="idNumber"
          name="idNumber"
          type="text"
          value={formData.idNumber}
          readOnly
        />

        <label htmlFor="address">כתובת:</label>
        <input
          id="address"
          name="address"
          type="text"
          value={formData.address}
          onChange={handleChange}
        />

        <label htmlFor="image">שם קובץ תמונה:</label>
        <input
          id="image"
          name="image"
          type="text"
          value={formData.image}
          onChange={handleChange}
        />

        <button type="submit">עריכה</button>
      </form>
    </div>
  );
}
