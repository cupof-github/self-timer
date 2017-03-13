SelfTimer.prototype.formats = function() {
  return {
    date: /^(1[0-2]|[1-9])-([1-9]|[12]\d|3[0-1])$/,
    year: /^[2][0][1-9]{2}$/,
    annual: /^[2]{1}[0]{1}[1-3]{1}[0-9]{1}-[01]{1}[0-9]{1}-[0-3]{1}[0-9]{1}$/,
    time: /^(0?[1-9]|1[012])(:[0-5]\d) [APap][mM]$/
  };
}; // ! SelfTimer.prototype.formats
