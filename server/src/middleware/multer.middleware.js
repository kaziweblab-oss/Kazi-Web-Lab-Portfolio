import multer from "multer";

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only JPG, JPEG, PNG and WEBP images are allowed."), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

export const uploadProjectThumbnail = (req, res, next) => {
  upload.single("thumbnail")(req, res, (error) => {
    if (error instanceof multer.MulterError) {
      return res.status(400).json({
        status: false,
        message: error.message,
      });
    }

    if (error) {
      return res.status(400).json({
        status: false,
        message: error.message,
      });
    }

    next();
  });
};
