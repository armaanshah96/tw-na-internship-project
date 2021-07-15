/*
    Key concepts: Promise + `.then`, HTTP request, Asynchronous code

    CHECKPOINT: what does calling getGrumpiestCat() do? What is "fetch" (google: Fetch API) and how does it relate to HTTP and our backend?
    CHECKPOINT: Tricky - why is specifying '/api/cats/grumpiest' enough information? (hint: the backend url, localhost:8080, is specified in react app codebase)

    Topics we'll touch on: what is a Promise, what does fetch do
 */

const getGrumpiestCat = () => fetch('/api/cats/grumpiest').then(response => response.json())
export default { getGrumpiestCat }