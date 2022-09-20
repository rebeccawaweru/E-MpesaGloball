
import * as React from 'react';
import {Box} from '@mui/material'
import FxItem from '../FxItem/FxItem';
import { searchFxRates } from '../Live/searchFxRates';
import {fetchExchangeRates} from '../Live/fetchExchangeRates'
function App() {
  const [rates, setRates] = React.useState(null);
  const [ratesBase, setRatesBase] = React.useState('');
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchResults, setSearchResults] = React.useState(null);

  const onSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  React.useEffect(() => {
    let componentIsMounted = true;

    const getFxData = () => {
      fetchExchangeRates()
        .then((data) => {
          console.log('fx data:', data);
          if (componentIsMounted) {
            setRates(data.rates);
            setRatesBase(data.base);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };

    // load initially
    getFxData();

    const fetchInterval = setInterval(getFxData, 1000 * 60);

    return () => {
      clearInterval(fetchInterval);
      componentIsMounted = false;
    };
  }, []);

  React.useEffect(() => {
    if (searchTerm.trim().length > 0) {
      setSearchResults(searchFxRates(rates, searchTerm));
    } else {
      setSearchResults(rates);
    }
  }, [searchTerm, rates]);

  return (
    <>
      <h1>Fx Rates</h1>
     <Box sx={{display:"flex", backgroundColor:"black",color:"white"}}>
     {searchResults
        ? Object.keys(searchResults).map((key) => (
            <FxItem
              key={key}
              fxSymbol={key}
              fxRate={searchResults[key]}
              ratesBase={ratesBase}
            />
          ))
        : []}
     </Box>
    
    </>
  );
}

export default App;
