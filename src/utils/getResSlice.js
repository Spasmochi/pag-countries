const getResSlice = (data, items, index) => {
  const indexOffset = index * items
  const initialIndex = indexOffset - items
  const visibleRange = data.slice(initialIndex, indexOffset)

  return visibleRange
}

export default getResSlice
