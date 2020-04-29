const parseNumber = (number: number | string) => {
  return typeof number === 'number' ? number : parseInt(number, 10)
}

const percentRatio = (height: number, width: number) => {
  return `${((Math.round(height) / Math.round(width)) * 100).toFixed(2)}%`
}

export { parseNumber, percentRatio }