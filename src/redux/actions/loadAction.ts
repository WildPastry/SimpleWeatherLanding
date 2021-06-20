// export type Action = { type: "ADD_NOTE"; payload: string };

// export const addNote = (note: string): Action => ({
//   type: "ADD_NOTE",
//   payload: note,
// });

// export const createLoadingSelector = (actions: any) => (state: any) => {
//   // returns true only when all actions is not loading
//   return _(actions)
//     .some((action: any) => _.get(state, `api.loading.${action}`));
// };
export type Action = {type: 'LOAD_ASSETS'; payload: boolean};

// export const loadAction = (payload: boolean, isLoading: boolean) => ({
//   type: 'LOAD_ASSETS',
//   payload: Boolean,
// });

export const loadAction = (isLoading: boolean): Action => ({
  type: "LOAD_ASSETS",
  payload: isLoading,
});