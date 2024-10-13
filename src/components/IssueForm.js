import React, { useState } from 'react';

const IssueForm = ({ addIssue }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Open');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newIssue = {
      id: Date.now(),
      title,
      description,
      status,
    };
    addIssue(newIssue);
    setTitle('');
    setDescription('');
    setStatus('Open');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Issue Title" 
        required 
      />
      <textarea 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Issue Description" 
        required 
      ></textarea>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Open">Open</option>
        <option value="Closed">Closed</option>
      </select>
      <button type="submit">Add Issue</button>
    </form>
  );
};

export default IssueForm;
