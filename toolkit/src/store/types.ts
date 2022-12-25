export interface AppState {
  isLoading: boolean;
  data: string[];
}
export interface RootState {
  app: AppState;
}

export interface Action<Payload = any> {
  type: string;
  payload: Payload;
}
