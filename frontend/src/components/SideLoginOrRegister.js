import React, {Component} from 'react'
import '../../node_modules/rsuite/dist/styles/rsuite-default.css';
import { Drawer, ButtonToolbar, Button } from 'rsuite';
import UserLoged from './UserLoged'
import MenuUserOptions from './MenuUserOptions';
import { connect } from 'react-redux';
  
class SideLoginOrRegister extends Component{
  state = { 
    imgFondo:"",
    userImg:""
  }
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      imgFondo:require(`../assets/img/fondoDefault.webp`).default
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
    {
      !this.props.userLogged ? this.userImg=require('../assets/img/logoUser.png').default : this.userImg=this.props.userLogged.urlPic
    }
    return (
      <div>
        <ButtonToolbar>
          <div node="button" onClick={() => this.toggleDrawer('left')} style={{
            backgroundImage:`url(${this.userImg})`
          }} className="user userNav nav"></div>
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
function mapStateToProps(state, props) {
 return {userLogged:state.authR.loggedUser}
}
export default connect(mapStateToProps,null)(SideLoginOrRegister)