import { Configuration, OpenAIApi } from "openai";
const conf = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
console.log(process.env.OPENAI_API_KEY)
const openai = new OpenAIApi(conf);
export default async function (req, res) {
  const { des } = req.body;

  if (!des) {
    res.status(400).json({
      msg: "no hay descripcion",
    });
  }
  const response = await openai.createImage({
    prompt: des,
    size: "512x512",
  });

  res.status(200).json({
    url: response.data.data[0].url,
  });
}

