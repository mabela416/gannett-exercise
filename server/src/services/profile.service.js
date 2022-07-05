const axios = require('axios').default;

exports.getProfile = async () => {
  try {
    const result = await axios.get('https://peaceful-springs-7920.herokuapp.com/profile/');
    return { data: result.data, cookie: result.headers['set-cookie'] };
  } catch (e) {
    throw Error(`Could not retrieve profile ${e}`);
  }
};
