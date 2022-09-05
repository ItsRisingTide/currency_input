import React, { useState, useEffect } from 'react';
import { CurrencyInput } from './components/CurrencyInput/CurrencyInput';
import { MainSection } from './styles/blocks/main-section';
import { getDirections, getFilters } from './utils/api';
import { IDirection } from './shared/interfaces/directions';
import { IFilter } from './shared/interfaces/filters';

const App = () => {
  const [directions, setDirections] = useState<IDirection[] | undefined>(undefined);
  const [filters, setFilters] = useState<IFilter[] | undefined>(undefined);

  const [toDirections, setToDirections] = useState<IDirection[] | undefined>(undefined);

  useEffect(() => {
    getDirections().then((data) => setDirections(data));
    getFilters().then((data) => setFilters(data));
  }, []);

  useEffect(() => {
    setToDirections(directions);
  }, [directions]);

  const handleFromDirectionChange = (fromDirection: IDirection | null): void => {
    if (fromDirection === null) {
      setToDirections(directions);
      return;
    }

    const directionsByFilter = filters?.find((filter) => filter.from.code === fromDirection.code);
    if (!directionsByFilter) {
      setToDirections([]);
      return;
    }
    setToDirections(directionsByFilter.to);
  };

  if (directions === undefined || filters === undefined) return <div>Loading...</div>;

  return (
    <MainSection>
      <CurrencyInput
        title="Отдаете"
        directions={directions}
        onChange={handleFromDirectionChange}
        placeholderText="Выберите исходное направление..."
      />
      <br />
      <CurrencyInput
        title="Получаете"
        directions={toDirections ?? []}
        placeholderText="Выберите конечное направление..."
      />
    </MainSection>
  );
};

export default App;
