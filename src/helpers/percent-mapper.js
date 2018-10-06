export default (activity) => {
  switch (activity) {
  case 0:
    return 'zero';
  case 25:
    return 'twenty-five';
  case 50:
    return 'fifty';
  case 75:
    return 'seventy-five';
  case 100:
    return 'one-hundred';
  default:
    return 'one-hundred';
  }
};
