import './app.css';
import Content from './content/Content';
import Sidebar from './side-bar/Sidebar';
import FloatCard from './common/float-card/FloatCard';
import AddButton from './common/add-button/AddButton';
import { authUser } from "../store/current-user/actions";
import { connect } from "react-redux";

function App(props) {
  const { isAuthenticated, authUser } = props;

  if (!isAuthenticated) {
    authUser();
  }

  return (
    <div className='app'>
      <Sidebar />

        <Content />

      <FloatCard />
      <AddButton />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.currentUser.isAuthenticated
  }
}

function mapDispatchToProps(dispatch) {
  return {
    authUser: () => dispatch(authUser()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);