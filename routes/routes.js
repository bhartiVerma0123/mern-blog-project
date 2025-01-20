const express = require('express');
const router = express.Router();
const app = express();
const multer = require('multer');
app.use('/uploads', express.static('uploads'));
const LoginController = require('../controllers/LoginController');
const {BlogController, ManageController, SingleBlogController, UpdateController ,DeleteController} = require('../controllers/BlogController');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, "uploads/"); // Relative path
  },
  filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

router.post("/addblog", upload.single('photo'), BlogController);

// POST REQUEST || Login
router.post('/login', LoginController);
// GET REQUEST || Single Blog
router.get("/single_blog/:blogId", SingleBlogController)
// GET REQUEST || manage blog
router.get('/manageblog', ManageController);
// POST REQUEST || update blog
router.post('/updateBlog', UpdateController);

router.delete("/delete_blog/:sid" , DeleteController )



module.exports = {router}