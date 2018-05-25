// @flow

import { TruncateI } from '../types/interfaces';

const truncate: TruncateI = text => `${text.split(' ').slice(0, 50).join(' ')}...`;

export default truncate;
