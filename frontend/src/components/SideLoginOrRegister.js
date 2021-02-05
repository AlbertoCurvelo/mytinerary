import React, {Component} from 'react'
import '../../node_modules/rsuite/dist/styles/rsuite-default.css';
import { Drawer, ButtonToolbar, Button, IconButton, Icon } from 'rsuite';
import Login from './Login'
import Register from './Register'
import UserLoged from './UserLoged'
const imgFondo=require(`../assets/img/fondoDefault.webp`).default
  
class SideLoginOrRegister extends Component{
  state = { 
    loginOrRegister:false
  }
  constructor(props) {
    super(props);
    this.state = {
      show: false
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
            backgroundImage:`url(${imgFondo})`
          }} className="userLoged">
            <UserLoged/>
          </Drawer.Header>
          <Drawer.Body>
          <h5>{this.state.loginOrRegister ? 'Create an account' : 'Login'}</h5> 
          {
            this.state.loginOrRegister
            ?<Register/>
            :<Login/>
          }
          <p className="loginOrNot" node="button" onClick={(e)=>{
            this.setState({loginOrRegister:!this.state.loginOrRegister})
            }}
            >or {!this.state.loginOrRegister ? 'create an account' : 'login'}
          </p> 
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