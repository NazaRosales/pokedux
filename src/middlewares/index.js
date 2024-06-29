const logger = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};

const addCustomPoke = (store) => (next) => (actionInfo) => {
  const newList = [...actionInfo?.action?.payload].map((poke) => {
    return { ...poke, name: poke.name[0].toUpperCase() + poke.name.slice(1) };
  });
  const updatedInfo = {
    ...actionInfo,
    action: { ...actionInfo.action, payload: newList },
  };
  next(updatedInfo);
};
export { logger, addCustomPoke };
