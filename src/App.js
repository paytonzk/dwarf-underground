import React, { Component } from 'react';
import './App.css';
import Header from './Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
    <main className="expanded row">
      <Forum />
      <Sidebar />
      <OtherArticles />
    </main>
      <Footer />
      </div>
    );
  }
}

export default App;
