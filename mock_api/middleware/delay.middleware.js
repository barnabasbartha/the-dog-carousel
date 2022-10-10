module.exports = (req, res, next) => {
  // Delay request
  setTimeout(next, (Math.random * 1000) / 2 + 1.5);

  // Delay response
  const endOriginal = res.end;
  res.end = (...args) => {
    setTimeout(() => {
      endOriginal.apply(res, args);
    }, Math.random() * 1000 + 1.5);
  };
};
