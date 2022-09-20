export const searchFxRates = (rates, searchTerm) => {
    if (searchTerm.trim().length === 0) return;
  
    const results = {};
  
    for (const [key, value] of Object.entries(rates)) {
      if (key.toUpperCase().includes(searchTerm.toUpperCase())) {
        results[key] = value;
      }
    }
  
    return results;

}