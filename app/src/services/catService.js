const getCatPic =  () => fetch('/api/cats').then(response => response.json())
export default { getCatPic}