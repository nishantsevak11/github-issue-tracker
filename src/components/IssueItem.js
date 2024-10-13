import React from 'react';

const IssueItem = ({ issue, deleteIssue }) => {
  return (
    <div className="issue-item">
      <h3>{issue.title}</h3>
      <p>{issue.description}</p>
      <p>Status: <strong>{issue.status}</strong></p>
      <button onClick={() => deleteIssue(issue.id)}>Delete</button>
    </div>
  );
};

export default IssueItem;
