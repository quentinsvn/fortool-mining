const checked = (value, options) => {
  if (value !== true) {
    return options.message || 'doit être accepté';
  }
};

export default {
  checked
};
