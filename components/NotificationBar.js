import { Transition } from '@headlessui/react';
import { XCircleIcon } from '@heroicons/react/solid';

let NotificationBar = () => {
  let notifications = [
    {
      status: 'ERROR',
      message: 'Something is broken.',
      isShowing: true,
    },
    {
      status: 'WARNING',
      message: 'Something is sort of broken.',
      isShowing: true,
    },
    {
      status: 'SUCCESS',
      message: 'Something went well.',
      isShowing: true,
    },
  ];

  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      {notifications.map((n) => (
        <Notification n={n} />
      ))}
    </div>
  );
};

let Notification = ({ n }) => {
  return (
    <Transition
      appear={true}
      show={n.isShowing}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0 transform -translate-y-20"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="p-4 bg-red-50">
        <div className="flex">
          <div className="flex-shrink-0">
            <XCircleIcon className="w-5 h-5 text-red-400" aria-hidden="true" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">{n.message}</h3>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default NotificationBar;
