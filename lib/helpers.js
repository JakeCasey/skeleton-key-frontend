import altitude from './plans/alititude';
import takeoff from './plans/takeoff';
import passport from './plans/passport';
import bbilarge from './plans/bbi-large';
import bbimedium from './plans/bbi-medium';
import bbismall from './plans/bbi-small';

let debounce = (func, wait, immediate) => {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

let testPlans = {
  dirigible: {
    passport: {
      copy: passport,
      yearly: {
        perMonth: 41,
        billedAt: 499,
        priceId: 'price_1K8CXrK1T7MNTdAGY0BR6olT',
      },
      monthly: {
        perMonth: 99,
        priceId: 'price_1K8CXrK1T7MNTdAGMuOu0fXV',
      },
    },
    takeoff: {
      copy: takeoff,
      yearly: {
        perMonth: 66,
        billedAt: 799,
        priceId: 'price_1K8Cb4K1T7MNTdAG5uZdoQJ8',
      },

      monthly: {
        perMonth: 124,
        priceId: 'price_1K8Cb4K1T7MNTdAGzeqJ9l6z',
      },
    },
    altitude: {
      copy: altitude,
      yearly: {
        perMonth: 124,
        billedAt: 1499,
        priceId: 'price_1K8CbnK1T7MNTdAGvvNbjBeZ',
      },
      monthly: {
        perMonth: 249,
        priceId: 'price_1K8CbnK1T7MNTdAG303hu00S',
      },
    },
  },
  bbi: {
    small: {
      copy: bbismall,
      yearly: {
        perMonth: 41,
        billedAt: 499,
        priceId: 'price_1K8CXrK1T7MNTdAGY0BR6olT',
      },
      monthly: {
        perMonth: 99,
        priceId: 'price_1K8CXrK1T7MNTdAGMuOu0fXV',
      },
    },
    medium: {
      copy: bbimedium,
      yearly: {
        perMonth: 66,
        billedAt: 799,
        priceId: 'price_1K8Cb4K1T7MNTdAG5uZdoQJ8',
      },
      monthly: {
        perMonth: 124,
        priceId: 'price_1K8Cb4K1T7MNTdAGzeqJ9l6z',
      },
    },
    large: {
      copy: bbilarge,
      yearly: {
        perMonth: 124,
        billedAt: 1499,
        priceId: 'price_1K8CbnK1T7MNTdAGvvNbjBeZ',
      },
      monthly: {
        perMonth: 249,
        priceId: 'price_1K8CbnK1T7MNTdAG303hu00S',
      },
    },
  },
};

let plans = {
  dirigible: {
    passport: {
      copy: passport,
      yearly: {
        perMonth: 83,
        billedAt: 999,
        priceId: 'price_1KjmVRK1T7MNTdAG05a7uGpf',
      },
      monthly: {
        perMonth: 99,
        priceId: 'price_1KjmVRK1T7MNTdAGlUjIoxTF',
      },
    },
    takeoff: {
      copy: takeoff,
      yearly: {
        perMonth: 99,
        billedAt: 1199,
        priceId: 'price_1KjmW7K1T7MNTdAGAiLUZass',
      },
      monthly: {
        perMonth: 124,
        priceId: 'price_1KjmW7K1T7MNTdAGigNqhHlo',
      },
    },
    altitude: {
      copy: altitude,
      yearly: {
        perMonth: 124,
        billedAt: 1499,
        priceId: 'price_1K8CbnK1T7MNTdAGvvNbjBeZ',
      },
      monthly: {
        perMonth: 249,
        priceId: 'price_1K8CbnK1T7MNTdAG303hu00S',
      },
    },
  },
  bbi: {
    small: {
      copy: bbismall,
      yearly: {
        perMonth: 41,
        billedAt: 499,
        priceId: 'price_1K8CXrK1T7MNTdAGY0BR6olT',
      },
      monthly: {
        perMonth: 99,
        priceId: 'price_1K8CXrK1T7MNTdAGMuOu0fXV',
      },
    },
    medium: {
      copy: bbimedium,
      yearly: {
        perMonth: 66,
        billedAt: 799,
        priceId: 'price_1K8Cb4K1T7MNTdAG5uZdoQJ8',
      },
      monthly: {
        perMonth: 124,
        priceId: 'price_1K8Cb4K1T7MNTdAGzeqJ9l6z',
      },
    },
    large: {
      copy: bbilarge,
      yearly: {
        perMonth: 124,
        billedAt: 1499,
        priceId: 'price_1K8CbnK1T7MNTdAGvvNbjBeZ',
      },
      monthly: {
        perMonth: 249,
        priceId: 'price_1K8CbnK1T7MNTdAG303hu00S',
      },
    },
  },
};

let isSubscribed = (user) => {
  if (!user.period_ends) {
    return false;
  }

  var today = new Date().getTime() / 1000;
  var period_ends = parseInt(user.period_ends);

  if (today >= period_ends) {
    return false;
  } else {
    return true;
  }
};

export { debounce, testPlans, plans, isSubscribed };
