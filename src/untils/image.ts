import { RcFile } from 'antd/lib/upload';

export const IMAGE_MIME_TYPE = /image\/(png|jpg|jpeg)/i;

export const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
