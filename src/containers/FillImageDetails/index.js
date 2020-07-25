import React, { useState } from 'react';

const FillImageDetails = ({ submitForm }) => {
  const [details, setDetails] = useState({
    name: '',
    id: '',
    desc: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };
  const { name, id, desc } = details;
  return (
    <form onSubmit={() => submitForm(details)}>
      <input
        placeholder="Task Name"
        onChange={handleChange}
        name="name"
        value={name}
      />
      <input
        placeholder="Task Id"
        onChange={handleChange}
        name="id"
        value={id}
      />
      <input
        placeholder="Description"
        onChange={handleChange}
        name="desc"
        value={desc}
      />
    </form>
  );
};

export default FillImageDetails;
