const makeAction = (type, ...argNames) => {
    return (...args) => {
      let action = {type};
      argNames.forEach((arg, index) => {
        action[argNames[index]] = args[index];
      });
      return action;
    };
  };
  
  export default makeAction;
  