const fileModel=require("../models/fileModel");
const cloudinary =require("cloudinary").v2

// Function to upload file to Cloudinary
async function fileUploadToCloudinary(file, folder,type,quality) {
    return await cloudinary.uploader.upload(file.tempFilePath, {
        folder: folder,
        resource_type: type || "auto",
        quality: quality || 100
    });
}
// Local File handler
exports.localFileUpload =async (req,res)=> {
    try{
        const file=req.files.file
        console.log("File-->",file);

        let path=__dirname+"/files/"+Date.now()+ `.${file.name.split('.')[1]}`;

        file.mv(path,(err)=>{
            console.log(err);
        });
        
        res.status(200).json({
            success:true,
            message: "Local file uploaded Successfully"
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            message:"Internal Server error",
            success:false
        })
    }
}

// image upload handler


// Image upload function
exports.imageUpload = async (req, res) => {
    try {
        const { fileName, tags, email } = req.body;
        const file = req.files.imageFile;

        const validFile = ["jpg", "jpeg", "png"];

        // Check for valid file types
        if (validFile.includes(fileName.split('.').pop().toLowerCase())) {
            // Upload file to Cloudinary
            const response = await fileUploadToCloudinary(file, "File_Upload","image");

            // Create and save the file document in the database
            const newFile = new fileModel({
                fileName,
                url: response.secure_url, // Assuming you want to save the Cloudinary URL
                tags,
                email,
            });
            await newFile.save(); // Save the document
            console.log(newFile);
            // Send success response
            return res.status(200).json({
                success: true,
                message: "File Uploaded successfully",
                data: newFile, // You can return the file data if needed
            });
        } else {
            return res.status(400).json({
                message: "File type not supported",
                success: false,
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
};


exports.videoUpload = async (req, res) => {
    try {
        const { fileName, tags, email } = req.body;
        const file = req.files.videoFile;

        // Validate file extension
        const validFile = ["mp4", "mkv"];
        if (validFile.includes(fileName.split('.')[1].toLowerCase())) {
            try {
                // Upload video to Cloudinary
                const response = await fileUploadToCloudinary(file, "File_Upload");

                // Save details to MongoDB
                const newFile = new fileModel({
                    fileName,
                    url: response.secure_url, // Saving the Cloudinary URL
                    tags,
                    email,
                });
                await newFile.save();

                return res.status(200).json({
                    newFile,
                    message: "Uploaded Successfully",
                });
            } catch (error) {
                console.log(error);
                return res.status(400).json({
                    message: "Not able to upload to Cloudinary",
                });
            }
        } else {
            return res.status(400).json({
                message: "File type not supported",
                success: false,
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
};
