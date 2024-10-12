import React, { useState } from "react";
import "./App.css";

const articles = [
  {
    id: 1,
    title: "What I wish I knew about React",
    date: "28 April 2020",
    content:
      "A couple weeks ago I started working on my first React application.Not only was it my first React application, but it was also my first React Native application, so a lot was new to me all in one Coming from the Angular (and Ionic) world, it felt like all my preconceived notions and ideas were being turned upside down. I managed to put together (what I think is) a pretty decent application, but I had a lot of roadblocks along the way. This is partly because I prefer to learn by just diving in (the only tutorial I did was this React Native Crash Course). So, a lot of these roadblocks could have been solved by me just reading the documentation.That said, in case theres anyone else there like me, here are a few things I wish I knew before I got started..",
  },
  {
    id: 2,
    title: "Introduction to CSS Animations ",
    date: "26 April 2017",
    content: "Before getting into how I created the logo animation, it'll be helpful to give a bit of an introduction to how CSS animations work. CSS animations make it possible for us to apply custom, complex animations to elements without needing to use additional tools or languages like JavaScript. They have a lot of benefits, such as being simpler to use and having better performance than other methods.", 
  },
  {
    id: 3,
    title: "Has the user expressed a preference for always visible focus? ",
    date: "21 March 2023",
    content:"This is a simple one. If a user has expressed a preference for focus to always be visible, then the :focus-visible pseudo-class should apply to the focused element. Fin.",
  },
  {
    id: 4,
    title: "What, exactly, is the DOM?",
    date: "26 November 2018",
    content: "The Document Object Model, or the “DOM”, is an interface to web pages. It is essentially an API to the page, allowing programs to read and manipulate the page’s content, structure, and styles. Let’s break this down.",
  },
  {
    id: 5,
    title: "Introduction to React",
    date: "May 18, 2021",
    content: "React is a popular JavaScript library for building user interfaces, particularly for single-page applications.",
  },
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const highlightText = (text, searchTerm) => {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, "gi");
    return text.split(regex).map((part, index) =>
      part.toLowerCase() === searchTerm.toLowerCase() ? (
        <span key={index} className="highlight">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="App">
      <div className="content">
        <div className="left-content">
          <h1>Search</h1>
          <div className="search-box">
            <input type="text" placeholder="Search articles..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
          </div>

          <div className="results">
            <p>{filteredArticles.length} posts were found.</p>
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article) => (
                <div key={article.id} className="article">
                  <h3>{highlightText(article.title, searchTerm)}</h3>
                  <p className="date">{article.date}</p>
                  <p>{highlightText(article.content, searchTerm)}</p>
                </div>
              ))
            ) : (
              <p>No articles found.</p>
            )}
          </div>
        </div>

        <div className="right-side">
          <div className="info-box">
            <p>
              <strong>bitsofcode.</strong> Articles on Frontend Development All articles are written by <span>Ire Aderinokun</span>, Frontend Developer and
              User Interface Designer.
            </p>
            <a href="https://twitter.com/ireaderinokun" target="_blank" rel="noreferrer">
              Follow @ireaderinokun
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
