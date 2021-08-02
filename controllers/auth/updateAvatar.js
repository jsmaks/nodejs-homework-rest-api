const fs = require('fs/promises');
const path = require('path');
const jimp = require('jimp');
const { user } = require('../../services');

module.exports = async (req, res, next) => {
  console.log(req.user._id)
  const userId = req.user._id.toString();
  if (!req.file) {
    return res.status(400).json({
      status: 'Error',
      code: 400,
      error: 'no file attached',
    });
  }
  const { path: tempFileName } = req.file;
  const uploadDir = path.join(process.cwd(), 'public/avatars');

  try {
    const fileName = path.join(uploadDir, `${userId}.jpg`);
    await imageNormalize(tempFileName);

    const result = await user.updateById(userId, { avatarURL: fileName });
    await fs.rename(tempFileName, fileName);

    res.status(200).json({
      status: 'Success',
      code: 200,
      data: result.avatarURL,
    });
  } catch (error) {
    fs.unlink(tempFileName);
    next(error);
  }
};

const imageNormalize = async (imagePath) => {
  const image = await jimp.read(`${imagePath}`);
  await image.resize(250, jimp.AUTO);
  return await image.writeAsync(`${imagePath}`);
};
