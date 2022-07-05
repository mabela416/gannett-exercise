const axios = require('axios').default;

exports.getContentById = async id => {
  try {
    const result = await axios.get(`https://peaceful-springs-7920.herokuapp.com/content/${id}`);
    return result.data;
  } catch (e) {
    throw Error(`Could not retrieve content for ${id}. ${e}`);
  }
};
