// const express = require('express');
// const multer = require('multer');
// const app = express();

// // Set up storage for uploaded files
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         // Specify the directory where you want to store the uploaded files
//         cb(null, 'public/images');
//     },
//     filename: (req, file, cb) => {
//         // Generate a unique filename for the uploaded file
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//         cb(null, file.fieldname + '-' + uniqueSuffix);
//     }
// });

// const upload = multer({ storage });

// // Define the /upload endpoint
// app.post('/upload', upload.single('image'), (req, res) => {
//     // Access the uploaded file using req.file and its path using req.file.path
//     // You can now handle the file as needed (e.g., save file path to a database, etc.)
    
//     // Return the file path as JSON response
//     res.json(req.file.path);
// });

// // Start the server
// app.listen(3000, () => {
//     console.log('Server started on http://localhost:3000');
// });


// const blogTitleField = document.querySelector('.title');
// const articleField = document.querySelector('.article');

// //article-img
// const articleImage = document.querySelector('#img-upload');
// const img = document.querySelector('.article-img');
// let imgPath;

// articleImage.addEventListener('change', () => {
//     uploadImage(articleImage, "img");
// });

// const uploadImage = (uploadFile, uploadType) => {
//   const file = uploadFile.files[0]; // Get the first selected file
//     if(file && file.type.includes("image")) {
//         const formData = new FormData();
//         formData.append('image', file);

//         fetch('/upload', {
//         method: 'post',
//         body: formData
//         }).then(res => res.json())
//         .then(data => {
//         imgPath = `${location.origin}/images/${data}`;
//         img.style.backgroundImage = `url(${imgPath})`;
//         })
//         .catch(error => {
//         console.error('Error uploading image:', error);
//         });
//     }
// }





// // const publishBtn = document.querySelector('.publish-btn');
// // const uploadInput = document.querySelector('#img-upload');

// // articleImage.addEventListener('change', () => {
// //     uploadImage(articleImage, "img");
// // });

// // const uploadImage = (uploadFile, uploadType) => {
// //     const file = uploadFile.files;
// //     if(file && file.type.includes("image")) {
// //         const formData = new FormData();
// //         formData.append('image', file);

// //         fetch('/upload', {
// //             method: 'post',
// //             body: formData
// //         }).then(res => res.json())
// //         .then(data => {
// //             imgPath = '${location.origin}/images/${data}';
// //             img.style.backgroundImage = `url(${imgPath})`;
// //         })
// //     }
// // }