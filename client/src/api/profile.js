import client from './client';

const getProfile = () => client.get('/profile');

const profile = {
  getProfile,
};
export default profile;
