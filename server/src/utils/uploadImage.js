import ImageKit from "imagekit";

const imageKit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

export const uploadImageToImageKit = async (file, folderName) => {
  try {
    if (!file || !file.buffer) {
      throw new Error("No file or buffer provided for upload.");
    }

    const uploadResponse = await new Promise((resolve, reject) => {
      imageKit.upload(
        {
          file: file.buffer,
          fileName: `${Date.now()}-${file.originalName}`,
          folder: folderName,
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        },
      );
    });

    return uploadResponse.url;
  } catch (error) {
    const uploadError = new Error(`Image upload failed: ${error.message}`);

    uploadError.statusCode || 500;

    throw uploadError;
  }
};
