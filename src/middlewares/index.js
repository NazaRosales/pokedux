const logger = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};
const convertPascalCase = (store) => (next) => (action) => {
  if (action.payload) {
    const newList = action.payload.map((poke) => {
      return { ...poke, name: poke.name[0].toUpperCase() + poke.name.slice(1) };
    });
    const updatedAction = {
      ...action,
      payload: newList,
    };
    next(updatedAction);
  } else {
    next(action);
  }
};
export { logger, convertPascalCase };
