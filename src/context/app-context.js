import { createContext, useState } from "react";

// --- --- --- contest structure --- --- ---
const AppContext = createContext({
  data: [],
  addExpense: (item) => {},
  setExpense: (items) => {},
  deleteExpense: (item) => {},
});

export default AppContext;

// --- --- --- context provider --- --- ---
export const AppContextProvider = (props) => {
  let [data, setData] = useState([]);

  let addExpense = (item) => {
    setData((prev) => {
      return [item, ...prev];
    });
  };

  let setExpense = (items) => {
    setData(items);
  };

  let deleteExpense = (item) => {
    let newDataList = data.filter((ele) => {
      return ele.id !== item.id;
    });
    setData(newDataList);
  };

  return (
    <AppContext.Provider
      value={{
        data: data,
        addExpense: addExpense,
        setExpense: setExpense,
        deleteExpense: deleteExpense,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
