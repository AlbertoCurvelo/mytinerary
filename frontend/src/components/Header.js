import React, {Component} from 'react';
import DropdownNav from './Dropdown'
import Side from './Side'

class Header extends Component {
  
  render() {
    return (
      <header className="App">
        <nav>
          <DropdownNav/>
          <Side/>
        </nav>
      </header>
    )
  }
}
export default Header