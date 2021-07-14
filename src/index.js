import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import reportWebVitals from './reportWebVitals';


function Title() {
  return (
    <h1>
      Hi, I'm Jeremy!
      <br />
      I'm a <b>UI developer</b>,
      <br />
      <b>photographer</b>
      and <b>artist</b>
      in Sydney, Australia
    </h1>
  )
}

function Experience() {
  return (
    <ul id='experience'>
      <li>
        <em>Current</em>
        <span className='company'>Bupa</span>
      </li>
      <li>
        <em>Previous</em>
        <span>
          <span className='company'>
            Ansarda,
          </span>
          <span className='company'>
            BlueChilli,
          </span>
          <span className='company'>
            Oneflare,
          </span>
          <span className='company'>
            Jaxsta,
          </span>
          <span className='company'>
            We Are Social,
          </span>
          <span className='company'>
            Essential
          </span>
        </span>
      </li>
    </ul>
  )
}

function Link() {
  return (
    <ul id='link'>
      <li>
        github
      </li>
      <li>linkedin</li>
      <li>instagram</li>
      <li>twitter</li>
    </ul>
  )
}

function App() {
  return (
    <div id='app'>
      <Title />
      <Experience />
      <Link />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
