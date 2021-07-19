const getKnowYourRightsContent = () => fetch('/api/know-your-rights').then(response => response.json())
export default { getKnowYourRightsContent }