import React, { useState, useEffect } from 'react';
import IssueForm from './components/IssueForm';
import IssueList from './components/IssueList';
import './App.css';

function App() {
  const [issues, setIssues] = useState([]);

  // Load issues from local storage on initial render
  useEffect(() => {
    const storedIssues = JSON.parse(localStorage.getItem('issues')) || [];
    setIssues(storedIssues);
  }, []);

  // Save issues to local storage whenever the issues array changes
  useEffect(() => {
    localStorage.setItem('issues', JSON.stringify(issues));
  }, [issues]);

  const addIssue = (issue) => {
    setIssues([...issues, issue]);
  };

  const deleteIssue = (id) => {
    setIssues(issues.filter(issue => issue.id !== id));
  };

  return (
    <div className="App">
      <header>
        <h1>GitHub Issue Tracker</h1>
      </header>
      <IssueForm addIssue={addIssue} />
      <IssueList issues={issues} deleteIssue={deleteIssue} />
    </div>
  );
}

export default App;
