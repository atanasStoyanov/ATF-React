export const uploadImage = async (files, url, folder) => {
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', folder);

    const res = await fetch(url, {
        method: 'POST',
        body: data
    });

    const file = await res.json();

    const imageUrl = file.secure_url;
    
   return imageUrl;
}
