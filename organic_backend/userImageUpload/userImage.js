const imageUpload = (file, folder = "images") => {
  console.log(file, "file");
  const filename = Math.random().toString(36).substring(2);
  console.log(filename, "failename");
  const fileExtension = file.name?.split(".")[1];
  console.log(fileExtension, "fileExtension");
  const imageName = filename + "." + fileExtension;
  file.mv(`Public/${folder}/${imageName}`);
  return imageName;
};
export default imageUpload