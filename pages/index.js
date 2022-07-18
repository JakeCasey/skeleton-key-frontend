import PleaseSignIn from '../components/PleaseSignIn';
import PleaseSubscribe from '../components/PleaseSubscribe';
import HomePage from '../components/special/HomePage';

const Home = (props) => (
  <div>
    <PleaseSignIn>
      <HomePage />
    </PleaseSignIn>
  </div>
);

export default Home;
