const baseUrl = process.env.NODE_ENV === 'production'
  ? 'https://ieczyc27e2.execute-api.us-west-2.amazonaws.com/Production'
  : 'https://ieczyc27e2.execute-api.us-west-2.amazonaws.com/Staging'

export const axiosOptions = {
  baseURL: baseUrl,
};