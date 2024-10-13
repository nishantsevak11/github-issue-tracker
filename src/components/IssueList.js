import React from 'react';
import IssueItem from './IssueItem';

const IssueList = ({ issues, deleteIssue }) => {
  return (
    <div className="issue-list">
      {issues.length === 0 ? (
        <p>No issues to display.</p>
      ) : (
        issues.map(issue => (
          <IssueItem key={issue.id} issue={issue} deleteIssue={deleteIssue} />
        ))
      )}
    </div>
  );
};

export default IssueList;
