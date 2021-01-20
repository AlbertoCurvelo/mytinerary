import React, {Component} from 'react';
import DropdownNav from './Dropdown'
import UserSideNav from './UserSideNavBase'

class Header extends Component {
  
  render() {
    return (
      <header className="App">
        <nav>
          <DropdownNav/>
          <UserSideNav/>
        </nav>
      </header>
    )
  }
}
export default Header