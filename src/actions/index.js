// add User address
export const getUserAddress = ( { address } = {} ) => ({
  type: 'GET_USER_ADDRESS',
  address
});