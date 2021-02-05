import React, {Component} from 'react';
import DropdownNav from './Dropdown'
import SideLoginOrRegister from './SideLoginOrRegister'

class Header extends Component {
  
  render() {
    return (
      <header className="App">
        <nav>
          <DropdownNav/>
          <SideLoginOrRegister/>
        </nav>
      </header>
    )
  }
}
export default Header