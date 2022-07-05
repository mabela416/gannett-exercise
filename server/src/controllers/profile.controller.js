const ProfileService = require('../services/profile.service');

exports.getProfile = async (req, res) => {
  try {
    const { data: profileRes, cookie } = await ProfileService.getProfile();
    res.cookie(cookie);
    return res.status(200).json({ status: 200, data: profileRes, message: 'Successfuly retrieved profile!' });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
