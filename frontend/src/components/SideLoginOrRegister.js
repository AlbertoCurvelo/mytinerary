import React, {Component} from 'react'
import '../../node_modules/rsuite/dist/styles/rsuite-default.css';
import { Drawer, ButtonToolbar, Button } from 'rsuite';
import UserLoged from './UserLoged'
import MenuUserOptions from './MenuUserOptions';
  
class SideLoginOrRegister extends Component{
  state = { 
    imgFondo:""
  }
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      imgFondo:require(`../assets/img/fondoDefault.webp`).default,
    };
    this.close = this.close.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }
  close() {
    this.setState({
      show: false
    });
  }
  toggleDrawer(placement) {
    this.setState({
      placement,
      show: true
    });
  }
  render() {
    return (
      <div>
        <ButtonToolbar>
          <div node="button" onClick={() => this.toggleDrawer('left')} className="user imagenes nav"></div>
        </ButtonToolbar>

        <Drawer
          placement={this.state.placement}
          show={this.state.show}
          onHide={this.close}
          size='xs'
        >
          <Drawer.Header style={{
            backgroundImage:`url(${this.state.imgFondo})`
          }} className="userLoged">
            <UserLoged/>
          </Drawer.Header>
          <Drawer.Body>
            <MenuUserOptions closeDrawer={this.close}/>
          </Drawer.Body>
          <Drawer.Footer>
            <Button onClick={this.close} appearance="primary">
              Close
            </Button>
          </Drawer.Footer>
        </Drawer>
      </div>
    );
  }
}
export default SideLoginOrRegister