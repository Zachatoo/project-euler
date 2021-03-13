import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const LoadingIcon = ({ size }) => (
  <FontAwesomeIcon icon="circle-notch" size={size} spin />
);

export default LoadingIcon;