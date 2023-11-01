function curriedAdd(total = 0) {
  if (typeof total !== "number") {
    return 0;
  }

  const addFunction = (nextNumber) => {
    if (typeof nextNumber === "number") {
      return curriedAdd(total + nextNumber);
    } else {
      return total;
    }
  };

  addFunction.valueOf = function () {
    return total;
  };

  return addFunction;
}

module.exports = { curriedAdd };