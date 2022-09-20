export const fetchExchangeRates = async () => {
    const response = await fetch('https://api.exchangerate.host/latest?base=USD');
  
    return response.json();
  };
  
  