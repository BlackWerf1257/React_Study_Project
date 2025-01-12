import React, {useState} from 'react'
import './App.css';

function App() {
  const [keyword, SetKeyword] = useState('');
  const [data, SetData] = useState([]);

  const fetchData = () => {
    //REST API 호출
    fetch(`https://api.github.com/search/repositories?q=${keyword}`)
    .then(response => response.json())
    .then(data => SetData(data.items))
    .catch(err => console.error(err))
  }
  return (
    <div className='App'>
      <input value={keyword}
      onChange={e => SetKeyword(e.target.value)}/>
      <button onClick={fetchData}>Fetch</button>

      <table>
        <tbody>
        {
          data.map(repo => 
          <tr key={repo.id}>
            <td>{repo.full_name}</td>
            <td> <a href={repo.html_url}>{repo.html_url}</a> </td>
          </tr>)
        }
        </tbody>
      </table>
    </div>
  );
}

export default App;
