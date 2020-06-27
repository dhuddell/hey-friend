import React from 'react';
import { TWENTY_ARRAY } from '../constants';

export default () => (
  TWENTY_ARRAY.map((val) => <option value={val} key={val}>{val}</option>)
);
