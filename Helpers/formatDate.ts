const formatDate = (date) =>{
  var options = { weekday: 'short',  day: 'numeric', month: 'long', }
  const today = date.toLocaleDateString("en-us", options)
  return today
}

export default formatDate