const createConstant = (constant) => ({
  REQUEST: `${constant}_REQUEST`,
  SUCCESS: `${constant}_SUCCESS`,
  ERROR: `${constant}_ERROR`
});

export default createConstant;
