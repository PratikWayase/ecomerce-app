import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "uploads/"); // Make sure this folder exists
    },
    filename: function (req, file, callback) {
        callback(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({ storage }); // 🔁 lowercase 'storage' key is mandatory

export default upload;
