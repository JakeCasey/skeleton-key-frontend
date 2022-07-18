import PleaseSignIn from '../components/PleaseSignIn';
import PleaseSubscribe from '../components/PleaseSubscribe';
import HomePage from '../components/special/HomePage';
import MyClients from '../components/special/MyClients';

const Home = (props) => (
  <div>
    <PleaseSignIn>
      <MyClients />
    </PleaseSignIn>
  </div>
);

export default Home;
