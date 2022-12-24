export interface State {
  app: {
    isLoading: boolean;
    data: string[];
  };
}

export interface Action<Payload = any> {
  type: string;
  payload: Payload;
}
