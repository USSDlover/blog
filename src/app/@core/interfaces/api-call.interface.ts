export interface IApiCall<T> {
  status: boolean;
  message: string;
  response: T;
}
