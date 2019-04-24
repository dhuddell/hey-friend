import React from 'react';

const AppError = (error) => {
  console.log(error); // eslint-disable-line
  return (
    <div>
      <p>{error.message}</p>
    </div>
  );
};

export default AppError;
