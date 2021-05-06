import './App.css';
import {Component} from 'react'


class App extends Component {
  constructor() {
    super()
    this.state = {
      showMenu: false
    }
  }

  toggleMenu = () => {
    this.setState({showMenu: !this.state.showMenu})
  }
  render() {
    return (
      <div className="App">
        <header className='header'>
          <h1>Title Here</h1>
          <nav>
            <ul className='nav-main'>
              <li>SERVICES</li>
              <li>PORTFOLIO</li>
              <li>ABOUT</li>
              <li>TEAM</li>
              <li>CONTACT</li>
            </ul>
            <button onClick={this.toggleMenu}>BURGER</button>
            <ul className={`nav-drop ${this.state.showMenu ? 'show' : ''}`}>
              <li>SERVICES</li>
              <li>PORTFOLIO</li>
              <li>ABOUT</li>
              <li>TEAM</li>
              <li>CONTACT</li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default App;
