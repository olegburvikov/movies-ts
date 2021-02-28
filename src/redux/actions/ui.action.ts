import CONST from '../const'

export const setIsSearchOpen = (value: boolean) => {
  return {
    type: CONST.SET_IS_SEARCH_OPEN,
    payload: value,
  }
}
