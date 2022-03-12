import React, { useEffect, useState } from "react";

const Ingredients = ({ user }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://test-api-stathis.herokuapp.com/ingredients', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        username: user
      })
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw response;
    })
    .then(data => setData(data))
    .catch(error => {
      console.log('Error fetching data! ', error);
      setError(error);
    })
    .finally(() => {
      setLoading(false);
    })
  }, [user]);

  if (loading) return "loading...";
  if (error) return "Error!";

  return (
    <ol>
      {
        data.map(entry => {
          return <li key={entry.id}>{entry.item}</li>
        })
      }
    </ol>
  );
};

export default Ingredients;