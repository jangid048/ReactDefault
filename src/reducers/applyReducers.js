export function applyReducers(state, action, reducers) {
    const reducerKeys = Object.keys(reducers);
    return state.withMutations(temporaryState => {
      reducerKeys.forEach(domainName => {
        const reducer = reducers[domainName];
        const currentDomainState = temporaryState.get(domainName);
        const newDomainState = reducer(currentDomainState, action);
  
        validateState(newDomainState, domainName, action);
        temporaryState.set(domainName, newDomainState);
      });
    });
  }

  const validateState = (nextState, reducerName, action) => {
    if (nextState === undefined) {
      throw new Error('Reducer "' + reducerName + '" returned undefined when handling "' + action.type + '" action. To ignore an action, you must explicitly return the previous state.');
    }
  };