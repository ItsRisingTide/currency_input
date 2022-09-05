export enum FilterCategory {
  ALL = 'ALL',
  CRYPTO = 'CRYPTO',
  CASH = 'CASH',
  BANKS_RUB = 'BANKS_RUB',
  BANKS_UAH = 'BANKS_UAH',
}

export const FilterCategoryLabel: Record<FilterCategory, string> = {
  [FilterCategory.ALL]: 'Все',
  [FilterCategory.CRYPTO]: 'Криптовалюты',
  [FilterCategory.CASH]: 'Наличные',
  [FilterCategory.BANKS_RUB]: 'Банки RUB',
  [FilterCategory.BANKS_UAH]: 'Банки UAH',
};

export const FilterCategoryDirections: Record<
  Exclude<FilterCategory, FilterCategory.ALL>,
  string[]
> = {
  [FilterCategory.CRYPTO]: ['BTC', 'ETH', 'USDTTRC'],
  [FilterCategory.CASH]: ['CASHUSD', 'CASHRUB'],
  [FilterCategory.BANKS_RUB]: ['ACRUB', 'SBERRUB', 'TCSBRUB'],
  [FilterCategory.BANKS_UAH]: [],
};
