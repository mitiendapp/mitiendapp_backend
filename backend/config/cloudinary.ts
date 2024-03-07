import {v2 as cloudinary} from 'cloudinary'

cloudinary.config({
  cloud_name: 'dn4gw0ghk',
  api_key:'393838355426452',
  api_secret:'m_iW5NVR0yKmrsKv5D_vx4AWGwY',
  secure:true
});

export async function uploadImage(filePath:string){
  return await cloudinary.uploader.upload(filePath,{
     folder: 'replit'
  })
}