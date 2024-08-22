function getDiscount(totalAmount) {
  const discountedAmount =
    totalAmount > 100 ? totalAmount * 0.1 : totalAmount * 0.05;
  return discountedAmount;
}
