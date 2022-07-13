/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon, XIcon } from '@heroicons/react/solid';

const plans = [
  {
    title: 'Passport',
    subtitle: 'Essential Features for Your Website',
    featured: false,
    description:
      'Everything you need to get started with your very own website, without touching a line of code. ',
    priceMonthly: 99,
    priceYearly: 56,
    mainFeatures: [
      {
        id: 1,
        value:
          "Start building your dream site in minutes. Dirigible's page design tools makes it simple to design a beautiful site quickly and easily.",
      },
      {
        id: 2,
        value:
          'Includes all the features you need for a fast, seach engine optimized website right out of the box. No configuration or additional plugins to purchase or install.',
      },
      {
        id: 3,
        value:
          'Connect with your customers and audience with our specialized social media features, and powerful drag and drop forms.',
      },
      {
        id: 4,
        value:
          'Get access to our support forums, knowledgebase and customer support team.',
      },
    ],
  },
  {
    title: 'Take Off',
    subtitle: 'Amplify Your Reach with Advanced Features',
    description:
      'Stand out with more design features and add powerful blocks to boost your growth.',
    featured: true,
    priceMonthly: 125,
    priceYearly: 220,
    mainFeatures: [
      {
        id: 1,
        value:
          ' Includes everyting in the Passport plan, plus even more design options to help your brand stand out.',
      },
      {
        id: 2,
        value:
          'Add advanced features with Portfolios, Team and Location Directories, Events and RSVPs, Instagram feeds, Mega Menus & Footers, Store Hours and tons more.',
      },
      { id: 3, value: 'Monetize your site with our simple selling tools.' },
      {
        id: 4,
        value:
          'Includes priority support in addition to our forums and knowledgebase.',
      },
    ],
  },
  {
    title: 'Altitude',
    subtitle: 'Supercharge Your Website and Start Selling',
    featured: false,
    description:
      'Go further, faster with E-Commerce, Ticketing & Booking Features. Our Altitude plan includes onboarding with your account manager.',
    priceMonthly: 225,
    priceYearly: 140,
    mainFeatures: [
      {
        id: 1,
        value:
          'Includes everyting in the Passport and Take Off plans, plus e-commerce to sell your products, tickets, bookings, gift cards and more.',
      },
      {
        id: 2,
        value:
          'Take pre-orders and sell subscriptions. Connect to Printful for Print-on-Demand. Import and export orders, products and customer information. ',
      },
      {
        id: 3,
        value:
          'Increase revenue with abandonded cart recovery, autocomplete orders and customized notifications.',
      },
      {
        id: 4,
        value:
          'Includes a dedicated account manager to help you navigate your store setup.',
      },
    ],
  },
];
const plugins = [
  {
    tiers: [
      { title: 'starter', value: 'Dirigible SEO Plugin' },
      {
        title: 'popular',
        featured: true,
        value: 'All of the features from Passport plus:',
      },
      { title: 'intermediate', value: false },
    ],
  },
  {
    tiers: [
      { title: 'starter', value: 'Dirigible Popup Plugin' },
      { title: 'popular', featured: true, value: 'Dirigible People' },
      { title: 'intermediate', value: true },
    ],
  },
  {
    tiers: [
      { title: 'starter', value: 'Dirigible Link-In-Bio' },
      { title: 'popular', featured: true, value: 'Dirigible Events' },
      { title: 'intermediate', value: true },
    ],
  },
  {
    tiers: [
      { title: 'starter', value: 'Gravity forms' },
      { title: 'popular', featured: true, value: 'Dirigible Hours' },
      { title: 'intermediate', value: '7 accounts' },
    ],
  },
  {
    tiers: [
      { title: 'starter', value: 'Dirigible Blocks' },
      { title: 'popular', featured: true, value: 'Dirigible Locations' },
      { title: 'intermediate', value: '10 invoices' },
    ],
  },
  {
    tiers: [
      { title: 'starter', value: 'SMTP' },
      { title: 'popular', featured: true, value: 'Dirigible Mega Menu' },
      { title: 'intermediate', value: true },
    ],
  },
  {
    tiers: [
      { title: 'starter', value: 'Image Optimization and CDN' },
      { title: 'popular', featured: true, value: 'Dirigible Footer' },
      { title: 'intermediate', value: true },
    ],
  },
  {
    tiers: [
      { title: 'starter', value: '' },
      { title: 'popular', featured: true, value: 'Dirigible Manifest' },
      { title: 'intermediate', value: true },
    ],
  },
];
const blocks = [
  {
    tiers: [
      { title: 'starter', value: 'Background' },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: true },
    ],
  },
  {
    tiers: [
      { title: 'starter', value: 'Buttons' },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: true },
    ],
  },
  {
    tiers: [
      { title: 'starter', value: 'Comparison Table' },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: true },
    ],
  },
  {
    tiers: [
      { title: 'starter', value: 'Dirigible Blocks' },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: true },
    ],
  },
  {
    tiers: [
      { title: 'starter', value: 'Dirigible Columns' },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: true },
    ],
  },
  {
    tiers: [
      { title: 'starter', value: 'Dirigible People' },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: false },
    ],
  },
  {
    tiers: [
      { title: 'starter', value: 'Dirigible FAQ' },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: false },
    ],
  },
  {
    tiers: [
      { title: 'starter', value: 'Dirigible FAQ' },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: false },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  return (
    <div className="bg-gray-50">
      <div className="relative bg-white">
        {/* Overlapping background */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 hidden w-full h-6 bg-gray-50 lg:block"
        />

        <div className="relative max-w-3xl px-4 pt-16 mx-auto text-center sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-4xl font-extrabold text-book-black sm:text-6xl">
            <span className="block lg:inline">Pick a plan to grow your</span>
            <span className="block lg:inline"> brand and your business.</span>
          </h1>
          <p className="mt-4 text-xl text-cirrus-gray">
            Start building your last website.
          </p>
        </div>

        <h2 className="sr-only">Plans</h2>

        {/* Toggle */}
        <div className="relative flex justify-center mt-12 sm:mt-16">
          <div className="bg-flare-orange p-0.5 rounded-lg flex">
            <button
              type="button"
              className="relative px-6 py-2 text-sm font-medium bg-white rounded-md text-navy border-navy whitespace-nowrap hover:bg-cumulus-gray focus:z-10"
            >
              Monthly billing
            </button>
            <button
              type="button"
              className="ml-0.5 relative py-2 px-6 border border-transparent rounded-md text-sm font-medium text-white whitespace-nowrap hover:bg-navy focus:z-10"
            >
              Yearly billing
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="relative max-w-2xl px-4 pb-8 mx-auto mt-8 sm:mt-12 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-0">
          {/* Decorative background */}
          <div
            aria-hidden="true"
            className="absolute inset-0 hidden rounded-tl-lg rounded-tr-lg bg-navy top-4 bottom-6 left-8 right-8 lg:block"
          />

          <div className="relative space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.title}
                className={classNames(
                  plan.featured
                    ? 'bg-white ring-2 ring-flare-orange '
                    : 'bg-flare-orange lg:bg-transparent',
                  'pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12'
                )}
              >
                <div>
                  <h3
                    className={classNames(
                      plan.featured ? 'text-flare-orange' : 'text-white',
                      'text-sm font-semibold uppercase tracking-wide'
                    )}
                  >
                    {plan.title}
                  </h3>
                  <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
                    <div className="flex items-center mt-3">
                      <p
                        className={classNames(
                          plan.featured ? 'text-flare-orange' : 'text-white',
                          'text-4xl font-extrabold tracking-tight'
                        )}
                      >
                        ${plan.priceMonthly}
                      </p>
                      <div className="ml-4">
                        <p
                          className={classNames(
                            plan.featured ? 'text-gray-700' : 'text-white',
                            'text-sm'
                          )}
                        >
                          USD / mo
                        </p>
                        <p
                          className={classNames(
                            plan.featured
                              ? 'text-gray-500'
                              : 'text-nimbus-gray',
                            'text-sm'
                          )}
                        >
                          Billed yearly (${plan.priceYearly})
                        </p>
                      </div>
                    </div>
                    <a
                      href="#"
                      className={classNames(
                        plan.featured
                          ? 'bg-navy text-white'
                          : 'bg-white text-navy hover:bg-indigo-50',
                        'mt-6 w-full inline-block py-2 px-8 border border-transparent rounded-md  text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full'
                      )}
                    >
                      Buy {plan.title}
                    </a>
                  </div>
                </div>
                <h4 className="sr-only">Plugins</h4>
                <ul
                  role="list"
                  className={classNames(
                    plan.featured
                      ? 'border-gray-200 divide-gray-200'
                      : 'border-navy divide-flare-orange divide-opacity-75',
                    'mt-7 border-t divide-y lg:border-t-0'
                  )}
                >
                  {plan.mainFeatures.map((mainFeature) => (
                    <li key={mainFeature.id} className="flex items-center py-3">
                      <CheckIcon
                        className={classNames(
                          plan.featured ? 'text-navy' : 'text-white',
                          'w-5 h-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                      <span
                        className={classNames(
                          plan.featured ? 'text-gray-600' : 'text-white',
                          'ml-3 text-sm font-medium'
                        )}
                      >
                        {mainFeature.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feature comparison (up to lg) */}
      <section
        aria-labelledby="mobile-comparison-heading"
        className="lg:hidden"
      >
        <h2 id="mobile-comparison-heading" className="sr-only">
          Feature comparison
        </h2>

        <div className="max-w-2xl px-4 py-16 mx-auto space-y-16 sm:px-6">
          {plans.map((plan, mobilePlanIndex) => (
            <div key="plan.title" className="border-t border-gray-200">
              <div
                className={classNames(
                  plan.featured ? 'border-flare-orange' : 'border-transparent',
                  '-mt-px pt-6 border-t-2 sm:w-1/2'
                )}
              >
                <h3
                  className={classNames(
                    plan.featured ? 'text-flare-orange' : 'text-gray-900',
                    'text-sm font-bold'
                  )}
                >
                  {plan.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">{plan.description}</p>
              </div>

              <div className="relative mt-6">
                {/* Fake card background */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 hidden pointer-events-none sm:block"
                >
                  <div
                    className={classNames(
                      'absolute right-0 w-1/2 h-full bg-white rounded-lg'
                    )}
                  />
                </div>

                <div
                  className={classNames(
                    plan.featured
                      ? 'ring-2 ring-indigo-600'
                      : 'ring-1 ring-black ring-opacity-5 ',
                    'relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 '
                  )}
                >
                  <dl className="divide-y divide-gray-200">
                    {plugins.map((feature) => (
                      <div
                        key={feature.title}
                        className="flex items-center justify-between py-3 sm:grid sm:grid-cols-2"
                      >
                        <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                          {typeof feature.tiers[mobilePlanIndex].value ===
                            'string' &&
                          feature.tiers[mobilePlanIndex].value.length > 0 ? (
                            <span
                              className={classNames(
                                feature.tiers[mobilePlanIndex].featured
                                  ? 'text-indigo-600'
                                  : 'text-gray-900',
                                'text-sm font-medium'
                              )}
                            >
                              {feature.tiers[mobilePlanIndex].value}
                            </span>
                          ) : (
                            <>
                              {feature.tiers[mobilePlanIndex].value === true ? (
                                <CheckIcon
                                  className="w-5 h-5 mx-auto text-indigo-600"
                                  aria-hidden="true"
                                />
                              ) : (
                                <XIcon
                                  className="w-5 h-5 mx-auto text-gray-400"
                                  aria-hidden="true"
                                />
                              )}

                              <span className="sr-only">
                                {feature.tiers[mobilePlanIndex].value === true
                                  ? 'Yes'
                                  : 'No'}
                              </span>
                            </>
                          )}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* Fake card border */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 hidden pointer-events-none sm:block"
                >
                  <div
                    className={classNames(
                      plan.featured
                        ? 'ring-2 ring-indigo-600'
                        : 'ring-1 ring-black ring-opacity-5',
                      'absolute right-0 w-1/2 h-full rounded-lg'
                    )}
                  />
                </div>
              </div>

              <h4 className="mt-10 text-sm font-bold text-gray-900">
                Otherblocks
              </h4>

              <div className="relative mt-6">
                {/* Fake card background */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 hidden pointer-events-none sm:block"
                >
                  <div
                    className={classNames(
                      'absolute right-0 w-1/2 h-full bg-white rounded-lg'
                    )}
                  />
                </div>

                <div
                  className={classNames(
                    plan.featured
                      ? 'ring-2 ring-flare-orange'
                      : 'ring-1 ring-black ring-opacity-5',
                    'relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 '
                  )}
                >
                  <dl className="divide-y divide-gray-200">
                    {blocks.map((perk) => (
                      <div
                        key={perk.title}
                        className="flex justify-between py-3 sm:grid sm:grid-cols-2"
                      >
                        <dt className="text-sm font-medium text-gray-600 sm:pr-4">
                          {perk.title}
                        </dt>
                        <dd className="text-center sm:px-4">
                          {perk.tiers[mobilePlanIndex].value === true ? (
                            <CheckIcon
                              className="w-5 h-5 mx-auto text-indigo-600"
                              aria-hidden="true"
                            />
                          ) : (
                            <XIcon
                              className="w-5 h-5 mx-auto text-gray-400"
                              aria-hidden="true"
                            />
                          )}

                          <span className="sr-only">
                            {perk.tiers[mobilePlanIndex].value === true
                              ? 'Yes'
                              : 'No'}
                          </span>
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* Fake card border */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 hidden pointer-events-none sm:block"
                >
                  <div
                    className={classNames(
                      plan.featured
                        ? 'ring-2 ring-indigo-600'
                        : 'ring-1 ring-black ring-opacity-5',
                      'absolute right-0 w-1/2 h-full rounded-lg'
                    )}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature comparison (lg+) */}
      <section aria-labelledby="comparison-heading" className="hidden lg:block">
        <h2 id="comparison-heading" className="sr-only">
          Feature comparison
        </h2>

        <div className="px-8 py-24 mx-auto max-w-7xl">
          <div className="flex items-stretch w-full border-t border-gray-200">
            {plans.map((plan, planIdx) => (
              <div
                key={plan.title}
                aria-hidden="true"
                className={classNames(
                  planIdx === plans.length - 1 ? '' : 'pr-4',
                  '-mt-px pl-4 w-1/3'
                )}
              >
                <div
                  className={classNames(
                    plan.featured
                      ? 'border-flare-orange'
                      : 'border-transparent',
                    'py-6 border-t-2'
                  )}
                >
                  <p
                    className={classNames(
                      plan.featured ? 'text-flare-orange' : 'text-gray-900',
                      'text-sm font-bold'
                    )}
                  >
                    {plan.title}
                  </p>
                  <p className="mt-2 text-sm text-gray-500">
                    {plan.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            {/* Fake card backgrounds */}
            <div
              className="absolute inset-0 flex items-stretch pointer-events-none"
              aria-hidden="true"
            >
              <div className="w-1/3 px-4">
                <div className="w-full h-full bg-white rounded-lg " />
              </div>
              <div className="w-1/3 px-4">
                <div className="w-full h-full bg-white rounded-lg " />
              </div>
              <div className="w-1/3 pl-4">
                <div className="w-full h-full bg-white rounded-lg " />
              </div>
            </div>

            <table className="relative w-full">
              <caption className="sr-only">Business feature comparison</caption>
              <thead>
                <tr className="text-left">
                  <th scope="col">
                    <span className="sr-only">Feature</span>
                  </th>
                  {plans.map((plan) => (
                    <th key={plan.title} scope="col">
                      <span className="sr-only">{plan.title} plan</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {plugins.map((feature) => (
                  <tr key={feature.title}>
                    {feature.tiers.map((tier, tierIdx) => (
                      <td
                        key={tier.title}
                        className={classNames(
                          tierIdx === feature.tiers.length - 1
                            ? 'pl-4'
                            : 'px-4',
                          'relative w-1/3 py-2 text-center'
                        )}
                      >
                        <span className="relative w-full h-full py-3">
                          <span
                            className={classNames(
                              tier.featured
                                ? 'text-flare-orange'
                                : 'text-gray-900',
                              'text-sm font-medium'
                            )}
                          >
                            {tier.value}
                          </span>
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Fake card borders */}
            <div
              className="absolute inset-0 flex items-stretch pointer-events-none"
              aria-hidden="true"
            >
              <div className="w-1/3 px-4">
                <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
              </div>
              <div className="w-1/3 px-4">
                <div className="w-full h-full rounded-lg ring-2 ring-flare-orange ring-opacity-100" />
              </div>
              <div className="w-1/3 pl-4">
                <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
              </div>
            </div>
          </div>

          <h3 className="mt-10 text-sm font-bold text-gray-900">Blocks</h3>

          <div className="relative mt-6">
            {/* Fake card backgrounds */}
            <div
              className="absolute inset-0 flex items-stretch pointer-events-none"
              aria-hidden="true"
            >
              <div className="w-1/3 px-4">
                <div className="w-full h-full bg-white rounded-lg" />
              </div>
              <div className="w-1/3 px-4">
                <div className="w-full h-full bg-white rounded-lg" />
              </div>
              <div className="w-1/3 pl-4">
                <div className="w-full h-full bg-white rounded-lg" />
              </div>
            </div>

            <table className="relative w-full">
              <caption className="sr-only">Perk comparison</caption>
              <thead>
                <tr className="text-left">
                  <th scope="col">
                    <span className="sr-only">Perk</span>
                  </th>
                  {plans.map((plan) => (
                    <th key={plan.title} scope="col">
                      <span className="sr-only">{plan.title} plan</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {blocks.map((perk) => (
                  <tr key={perk.title}>
                    {perk.tiers.map((tier, tierIdx) => (
                      <td
                        key={tier.title}
                        className={classNames(
                          tierIdx === perk.tiers.length - 1 ? 'pl-4' : 'px-4',
                          'relative w-1/3 py-0 text-center'
                        )}
                      >
                        <span className="relative w-full h-full py-3">
                          {tier.value === true ? (
                            <CheckIcon
                              className="w-5 h-5 mx-auto text-flare-orange"
                              aria-hidden="true"
                            />
                          ) : (
                            <XIcon
                              className="w-5 h-5 mx-auto text-gray-400"
                              aria-hidden="true"
                            />
                          )}

                          <span className="sr-only">
                            {tier.value === true ? 'Yes' : 'No'}
                          </span>
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Fake card borders */}
            <div
              className="absolute inset-0 flex items-stretch pointer-events-none"
              aria-hidden="true"
            >
              <div className="w-1/3 px-4">
                <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
              </div>
              <div className="w-1/3 px-4">
                <div className="w-full h-full rounded-lg ring-2 ring-flare-orange ring-opacity-100" />
              </div>
              <div className="w-1/3 pl-4">
                <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
