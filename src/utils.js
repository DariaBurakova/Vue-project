const getCurrentDate = () => {
    const date = new Date()
    const dd = date.getDate()
    const mm = date.getMonth() + 1
    const yy = date.getFullYear()
    return `${dd}.${mm}.${yy}`
  }
  
  export {
    getCurrentDate
  }