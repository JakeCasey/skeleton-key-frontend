import User from './wrappers/User';
import Subscribe from './Subscribe';
import Unsubscribe from './Unsubscribe';

var isSubscribedToThisPlan = (plansSubscribed, plan) => {
  console.log(plansSubscribed);
  if (!plansSubscribed) return false;

  var isSubscribedToThisPlan = plansSubscribed.filter(p => {
    return p == plan.planId;
  });

  if (isSubscribedToThisPlan.length > 0) {
    return true;
  }
};

const SubscribeOrUnsubscribe = ({ plan }) => {
  return (
    <User>
      {({ data: { me }, error }) => {
        return (
          <div>
            {isSubscribedToThisPlan(me.plansSubscribed, plan) ? (
              <Unsubscribe plan={plan} />
            ) : (
              <Subscribe plan={plan} />
            )}
          </div>
        );
      }}
    </User>
  );
};

export default SubscribeOrUnsubscribe;
