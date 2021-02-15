import axios from 'axios';

export const uploadImage = async (files, url, folder) => {
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', folder);


    const file = await axios.post(url, data);
    const imageUrl = file.secure_url;
    
   return imageUrl;
}
