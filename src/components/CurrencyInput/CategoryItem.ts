import styled from 'styled-components';
import { Color } from '../../styles/variables/colors';

export const CategoryItem = styled.div<{ isSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 40px;
  padding: 5px;

  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  color: ${(props) => (props.isSelected ? Color.White : Color.TextMain)};

  background-color: ${(props) => (props.isSelected ? Color.SecondaryFill : 'transparent')};
  border-radius: 0.5rem;

  &:hover {
    background-color: ${(props) => (!props.isSelected ? Color.LightGrey : Color.SecondaryFill)};
    cursor: pointer;
  }

  transition: background-color 0.5s ease;
`;

export const CategoryItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 3px;

  padding-left: 5px;
  padding-right: 5px;
`;
