export const formatNumberToRupiah = (number: number) => {
  const roundedNumber = Math.round(number)
  return roundedNumber.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  })
}
