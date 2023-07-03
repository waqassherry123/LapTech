import React from 'react';
import SvgIcon from 'react-native-svg-icon';
import svgs from './svgs';

const Icon = (props) => <SvgIcon svgs={svgs} {...props} />;

export default Icon;