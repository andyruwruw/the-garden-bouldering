import request from './api/github/request';

const makeThing = async () => {
  const response = await request.get('/repos/AndrewChild/The-Garden-Guidebook/contents/sections/The Garden Main.tex');

  console.log(Buffer.from(response.data.content, 'base64'));
};

makeThing();
