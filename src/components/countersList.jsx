import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Ненужная вещь" },
    { id: 1, value: 0, name: "Ложка" },
    { id: 2, value: 0, name: "Вилка" },
    { id: 3, value: 0, name: "Тарелка" },
    { id: 4, value: 1, name: "Набор минималиста" },
  ];

  const [counters, setCounters] = useState(initialState);
  const handleDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id);

    setCounters(newCounters);
  };
  const handleIncrement = (id) => {
    const addValue = counters.map((val) => {
      if (val.id === id) {
        val.value += 1;
      }
      return val;
    });
    setCounters(addValue);
  };
  const handleDecrement = (id) => {
    const downValue = counters.map((val) => {
      if (val.id === id) {
        val.value -= 1;
      }
      return val;
    });

    setCounters(downValue);
  };

  const handleReset = () => {
    setCounters(initialState);
  };
  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onDelete={handleDelete}
          onDecrement={handleDecrement}
          onIncrement={handleIncrement}
          {...count}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  );
};

export default CountersList;
