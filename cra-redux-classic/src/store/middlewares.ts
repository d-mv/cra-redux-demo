export const appMiddleware =
  (state: any) => (action: any) => (next: () => void) => {
    next();
  };
