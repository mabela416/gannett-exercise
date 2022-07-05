const ContentService = require('../services/content.service');

exports.getContentById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ status: 400, message: 'Profile id is required' });
    }
    const contentRes = await ContentService.getContentById(id);
    return res.status(200).json({ status: 200, data: contentRes, message: `Successfully retrieved content for ${id}` });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
