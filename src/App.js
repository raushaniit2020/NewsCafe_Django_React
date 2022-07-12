import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import NewsItem from './components/NewsItem';
import Search from './components/Search';
import Login from './components/Login';
import SignUp from './components/SignUp'
import { useStateValue } from './components/StateProvider';
import { auth } from './Firebase';


function App(props) {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("general");
  const [country, setCountry] = useState("in");
  // const [value, setValue] = useState("");




  useEffect(() => {
    console.log(category)
    if (category) {

      fetch(`http://127.0.0.1:8000/?country=${country}&category=${category}`)
        .then(resp => resp.json())
        .then((body) => {

          setArticles(body)

        })
        .catch(error => console.log(error))


    }
    console.log(country)
    if (country) {

      fetch(`http://127.0.0.1:8000/?country=${country}&category=${category}`)
        .then(resp => resp.json())
        .then((body) => {

          setArticles(body)

        })
        .catch(error => console.log(error))


    }

    else {
      fetch('http://127.0.0.1:8000/')
        .then(resp => resp.json())
        .then((body) => {

          setArticles(body)

        })
        .catch(error => console.log(error))

    }
  }, [category, country]);


  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads....
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if (authUser) {
        // it means the user just logged in or was logged in from earlier
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        // the user i logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar setCategory={setCategory} setCountry={setCountry} />
        {/* <NewsItem articles={articles}/> */}

        <Routes>
          <Route exact path="/" element={<NewsItem articles={articles} />} />
          <Route exact path="/general" element={<NewsItem articles={articles} key="business" category="business" />} />
          <Route exact path="/business" element={<NewsItem articles={articles} key="business" category="business" />} />
          <Route exact path="/entertainment" element={<NewsItem articles={articles} key="entertainment" category="entertainment" />} />
          <Route exact path="/health" element={<NewsItem articles={articles} key="health" category="health" />} />
          <Route exact path="/science" element={<NewsItem articles={articles} key="science" category="science" />} />
          <Route exact path="/sports" element={<NewsItem articles={articles} key="sports" category="sports" />} />
          <Route exact path="/technology" element={<NewsItem articles={articles} key="technology" category="technology" />} />
          <Route exact path="/country" element={<NewsItem articles={articles} />} />
          <Route exact path="/query" element={<Search />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

