const truncate = (text) => {
  const words = text.split(' ');
  const maxWordLen: number = 50;
  if (words.length <= maxWordLen) {
    return text;
  }
  return `${words.slice(0, maxWordLen).join(' ')}...`;
};

export default truncate;
