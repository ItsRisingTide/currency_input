import React, { useCallback, useState, useRef, useEffect } from 'react';

import { Select } from 'react-functional-select';
import type { SelectRef } from 'react-functional-select';

import {
  FilterCategory,
  FilterCategoryDirections,
  FilterCategoryLabel,
} from '../../shared/enums/filter-categories';
import type { IDirection } from '../../shared/interfaces/directions';
import { SelectTheme } from '../../styles/variables/select-theme';

import { CategoryItemsContainer, CategoryItem } from './CategoryItem';
import { CurrencyInputTitle } from './CurrencyInputTitle';
import { CurrencyInputContainer } from './CurrencyInputContainer';

interface ICurrencyInputProps {
  title: string;
  directions: IDirection[];
  placeholderText: string;
  onChange?: (option: IDirection | null) => void;
}

export const CurrencyInput: React.FC<ICurrencyInputProps> = ({
  title,
  directions,
  placeholderText,
  onChange,
}) => {
  const [selectedFilterCategory, setSelectedFilterCategory] = useState<FilterCategory | 'All'>(
    FilterCategory.ALL
  );
  const [selectedDirection, setSelectedDirection] = useState<IDirection | null>(null);
  const [availableDirections, setAvailableDirections] = useState<IDirection[]>(directions);

  const selectRef = useRef<SelectRef | null>(null);

  useEffect(() => {
    setSelectedFilterCategory(FilterCategory.ALL);
    selectRef.current?.clearValue();
    setAvailableDirections(directions);
  }, [directions]);

  const handleCategorySelect = (category: FilterCategory): void => {
    if (category === FilterCategory.ALL) {
      setAvailableDirections(directions);
      setSelectedFilterCategory(category);
      return;
    }

    const categoryDirections = directions.filter((direction) =>
      FilterCategoryDirections[category].includes(direction.code)
    );
    if (selectedDirection && !categoryDirections.includes(selectedDirection)) {
      selectRef.current?.clearValue();
    }
    setAvailableDirections(categoryDirections);
    setSelectedFilterCategory(category);
  };

  const getOptionValue = useCallback((option: IDirection): string => option.code, []);
  const getOptionLabel = useCallback((option: IDirection): string => `${option.name}`, []);
  const onOptionChange = useCallback((option: IDirection | null): void => {
    onChange?.(option);
    setSelectedDirection(option);
  }, []);

  return (
    <CurrencyInputContainer>
      <CurrencyInputTitle>{title}</CurrencyInputTitle>
      <CategoryItemsContainer>
        {Object.values(FilterCategory).map((category) => (
          <CategoryItem
            onClick={() => handleCategorySelect(category)}
            isSelected={selectedFilterCategory === category}
            key={category}
          >
            {FilterCategoryLabel[category]}
          </CategoryItem>
        ))}
      </CategoryItemsContainer>
      <Select
        ref={selectRef}
        themeConfig={SelectTheme}
        placeholder={placeholderText}
        noOptionsMsg="Нет доступных направлений"
        options={availableDirections}
        onOptionChange={onOptionChange}
        getOptionValue={getOptionValue}
        getOptionLabel={getOptionLabel}
      />
    </CurrencyInputContainer>
  );
};
