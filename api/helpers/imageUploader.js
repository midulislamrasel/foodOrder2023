const cloudinary = require('cloudinary').v2;

// Set the Cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadImage = async (file) => {

    try {
        const result = await cloudinary.uploader.upload(file, {
            folder: 'hammer',

        });
        return result.secure_url;
    } catch (error) {
        //console.log('Error uploading image:', error);
    }
};

module.exports = {
    uploadImage
}