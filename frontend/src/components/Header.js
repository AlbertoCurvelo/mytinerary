import React, {Component} from 'react';
import UserSideNav from './UserSideNav'
import DropdownNav from './Dropdown'

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