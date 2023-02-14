import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const ChoseCurrency = () => {
  const { dispatch } = useContext(AppContext);

  return (
    <div className="alert alert-success form-floating">
      <label
        for="floatingSelect"
        style={{ paddingLeft: '5%', color: 'white' }}
      >
        Currency{' '}
      </label>
      <select
        className="currency-select"
        id="floatingSelect"
        onChange={(event) => {
          dispatch({ type: 'CHG_CURRENCY', payload: event.target.value });
        }}
        style={{
          width: '70%',
          padding: '2%',
          textAlign: 'right',
          color: 'white',
          backgroundColor: 'green',
        }}
        aria-label=""
      >
        <option defaultValue value="£" name="£ Pound">
          £ UK Pound
        </option>
        <option value="$" name="$ Dollar">
          $ US Dollar
        </option>
        <option value="€" name="€ Euro">
          € Euro
        </option>
        <option value="₹" name="₹ Ruppee">
          ₹ India Ruppee
        </option>
      </select>
    </div>
  );
};

export default ChoseCurrency;