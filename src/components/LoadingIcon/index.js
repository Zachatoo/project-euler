import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const LoadingIcon = ({ size, className }) => (
  <FontAwesomeIcon
    icon="circle-notch"
    className={className}
    size={size}
    spin
  />
);

export default LoadingIcon;