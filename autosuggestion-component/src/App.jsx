import React from "react";
import Autocomplete from "./components/Autocomplete";

const App = () => {
  const fetchSuggestions= async ()=>{

  }
  return (
    <div>
      <Autocomplete 
      placeholder={'search recipes'}
      fetchSuggestions={fetchSuggestions}
      dataKey={'name'}
      customLoading={<>Loading recipe</>}
      onSelect={(e)=>{}}
      onChange={(input)=>{}}
      onFocus={(e)=>{}}
      onBlur={(e)=>{}}
      customStyles={{}}
      />
    </div>
  );
};

export default App;
