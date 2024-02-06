import React, { useState } from 'react';
import Select from 'react-select';
import './Form.css'; // Import your CSS file for styling

// Simulated list of addresses (you can replace it with an API call)
const allAddresses = [
  '123 Main St',
  '456 Elm St',
  '789 Oak St',
  // Add more addresses as needed
];

const Form = () => {
  const [address, setAddress] = useState('');
  const [submitted, setSubmitted] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  //const [filteredAddresses, setFilteredAddresses] = useState([]);
  const [availability,setAvailability]=useState('')

  const addressOptions = allAddresses.map((addr) => ({ value: addr, label: addr }));
  function handleSelectChange(e){
    setAvailability(e.target.value)
  }
  const handleChange = (selectedOption) => {
    setAddress(selectedOption.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (address.trim() === '') {
      
      setShowPopup(true);
    } else {
      const newItem = { address ,availability};
      setSubmitted([...submitted, newItem]);

      
      setAddress('');
      setAvailability('')
    }
  };

  return (
    <div style={{width:'1200px',margin:'0px'}}>
      <form onSubmit={handleSubmit} className="form">
        <label style={{ fontSize: '25px', marginRight: '20px' }} className="form-label">
          Enter street address:
          <Select
            className="react-select-container"
            classNamePrefix="react-select"
            options={addressOptions}
            value={addressOptions.find((option) => option.value === address)}
            onChange={handleChange}
            placeholder="enter street address"
            isSearchable
          />
        </label>
        <label style={{ fontSize: '25px', marginRight: '20px' }}>
        Check availability
        <select style={{ padding: '10px', marginLeft: '10px', fontSize: '20px', border: '1px solid #ccc' }} value={availability} onChange={handleSelectChange}>
          <option value="Unit1">Unit1</option>
          <option value="Unit10">Unit10</option>
          <option value="Unit20">Unit20</option>
          <option value="Unit30">Unit30</option>
          <option value="Unit40">Unit40</option>
        </select>
      </label>
        <button type="submit" className="form-submit">
          Submit
        </button>
      </form>

      <ul className="SubmittedList">
        {submitted.map((item, index) => (
          <li key={index} className="SubmittedItem">
            <span className="SubmittedAddress">Street Address: {item.address}</span>
            <span className="SubmittedAddress">availability: {item.availability}</span>
          </li>
        ))}
      </ul>

      {/* Popup for blank address */}
      {showPopup && (
        <div key="popup" className="popup">
          <p>Please fill in the address before submitting.</p>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Form;
