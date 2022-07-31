import './App.css';
import './reset.css';

function App() {
  
  // const issue = document.getElementById('issue');
  // const pr = document.getElementById('pr');

  // issue.addEventListener('click', function() {
  //   issue.classList.remove('current')
  // })

  return (
    <div className="App">
      <header className='header'>
          <nav className='nav'>
            <h1>Github Viewer</h1>
            <ul>
              <li><a href="">Issue</a></li>
              <li><a href="">Pull Request</a></li>
            </ul>
          </nav>
      </header>
      <main className="main">
        <div className="wrapper">
          <nav className="tab" >
            <li className='issue current' id='issue'><a href="">Issue</a></li>
            <li className='pr' id='pr'><a href="">Pull Request</a></li>
          </nav>
          <div className="search_box">
            <h2 className='ttl'>Issue</h2>
            <input type="search" placeholder='issue名で検索'/>
            <div className="btn_area">
              <div className='btn left'><a href="#">New</a></div>
              <div className='btn right'><a href="#">Delete</a></div>
            </div>
          </div>
          <div className="contents">
            <table className='table'>
              <tr>
                <th className='check'><input type="checkbox"></input></th>
                <th className='empty'></th>
                <th className='status'>ステータス</th>
                <th className='author'>作成者</th>
                <th className='date'>作成日付</th>
                <th className='update'>更新日付</th>
              </tr>
              <tr>
                <td><input type="checkbox"></input></td>
                <td>A bug in Top Page</td>
                <td>Open</td>
                <td></td>
                <td>07-31-2022</td>
                <td>07-31-2022</td>
              </tr>
              <tr>
                <td><input type="checkbox"></input></td>
                <td>A problem of performance in Top Page</td>
                <td>Open</td>
                <td></td>
                <td>07-31-2022</td>
                <td>07-31-2022</td>
              </tr>
            </table>
          </div>
        </div>
      </main>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
