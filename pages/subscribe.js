import Payment from '../components/Payment';
import PleaseSignIn from '../components/PleaseSignIn';
import NewPayment from '../components/NewPayment';
import { NextSeo } from 'next-seo';

const SubscribePage = (props) => (
  <div>
    <PleaseSignIn>
      <Payment />
      {/* <NewPayment /> */}
    </PleaseSignIn>
  </div>
);

export default SubscribePage;
