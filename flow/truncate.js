//

//import { TruncateI } from '../types/interfaces';

const truncate = text => {
  const words = text.split(' ');
  const maxWordLen = 50;
  if (words.length <= maxWordLen) {
    return text;
  }
  return `${words.slice(0, maxWordLen).join(' ')}...`;
};

module.exports = truncate;
