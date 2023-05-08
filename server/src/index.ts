import request from './api/github/request';
import { TexProcessor } from './process/process-tex';

const makeThing = async () => {
  const response = await request.get('/repos/AndrewChild/The-Garden-Guidebook/contents/sections/The Garden Main.tex');

  const processer = new TexProcessor();

  processer.load(Buffer.from(response.data.content, 'base64'));

  processer.start();
};

makeThing();
