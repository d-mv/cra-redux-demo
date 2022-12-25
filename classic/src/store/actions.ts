export const setIsLoading = (payload: boolean) => ({
  type: 'IS_LOADING',
  payload,
});

export const setData = (payload: string[]) => ({ type: 'DATA', payload });
