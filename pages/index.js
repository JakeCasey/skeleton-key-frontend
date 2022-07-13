import PleaseSignIn from '../components/PleaseSignIn';
import PleaseSubscribe from '../components/PleaseSubscribe';
import HomePage from '../components/special/HomePage';

const Home = (props) => (
  <div>
    <PleaseSignIn>
      <PleaseSubscribe>
        <HomePage />
      </PleaseSubscribe>
    </PleaseSignIn>
  </div>
);

export default Home;
