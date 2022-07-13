import React from 'react';

import PropTypes from 'prop-types';

const ErrorMessage = ({ error }) => {
  if (!error || !error.message) return null;
  if (
    error.networkError &&
    error.networkError.result &&
    error.networkError.result.errors.length
  ) {
    return error.networkError.result.errors.map((error, i) => (
      <div key={i} className="mb-2 bg-white status-message error">
        <div className="status-dot line"></div>
        <div>
          <p>{error.message.replace('GraphQL error: ', '')}</p>
        </div>
      </div>
    ));
  }
  return (
    <div className="mb-2 bg-white status-message error">
      <div className="status-dot line"></div>
      <div>
        <p>{error.message.replace('GraphQL error: ', '')}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;
