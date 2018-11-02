// add User address
export const getUserAddress = ( { address, latLng } = {} ) => ({
  type: 'GET_USER_ADDRESS',
  address,
  latLng
});