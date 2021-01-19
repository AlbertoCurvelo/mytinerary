import React, {Component} from 'react';
import DropdownNav from './Dropdown'

class Header extends Component {
  
  render() {
    return (
      <header className="App">
        <nav>
          <DropdownNav/>
        </nav>
      </header>
    )
  }
}
export default Header