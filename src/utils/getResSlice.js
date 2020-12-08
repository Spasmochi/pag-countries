const getResSlice = (data, items, index) => {
  const indexOffset = index * items
  const initialIndex = indexOffset - items
  console.log('currentSlice: [', initialIndex, ',', indexOffset, ']')
  const visibleRange = data.slice(initialIndex, indexOffset)
  console.log(visibleRange)

  return visibleRange
}

export default getResSlice
