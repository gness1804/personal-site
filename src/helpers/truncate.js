// @flow

import { TruncateI } from '../types/interfaces';

const truncate: TruncateI = (text) => {
  const words: string[] = text.split(' ');
  const maxWordLen: number = 50;
  if (words.length <= maxWordLen) {
    return text;
  }
  return `${words.slice(0, maxWordLen).join(' ')}...`;
};

export default truncate;
