import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, dispatch, allExpenses, currency } = useContext(AppContext);
  const [upgradebudget, setUpgradeBudget] = useState(budget);

  return (
    <div className="alert alert-secondary">
      <span>
        Budget: {currency}
        <input
          required="required"
          value={upgradebudget}
          type="number"
          step={10}
          onChange={(event) => {
            if (event.target.value > 20000) {
              alert('Budget cannot exceed amount 20000');
            } else if (event.target.value < allExpenses) {
              alert('Unable to reduce the budget amount under expences');
            } else {
              setUpgradeBudget(event.target.value);
              dispatch({ type: 'SET_BUDGET', payload: upgradebudget });
            }
          }}
        ></input>
      </span>
    </div>
  );
};

export default Budget;
