const formatDate = (date) =>{
  const today = date.toISOString().split('T')[0]
  return today
}

export default formatDate