// pages/api/checkFood.js
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { foodName } = req.body;

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      // const prompt = `Provide a detailed analysis of the food product "${foodName}". Discuss its safety, list any potential harmful substances in points(pros and cons). In 100 words. Conclude with a rating between 1 to 10.`;
      const prompt = `Provide a detailed analysis of the food product "${foodName}". Include the following sections:
        1. Product Overview: Brief description of the food product.
        2. Safety Analysis: Discuss its safety comprehensively.
        3. Pros and Cons: List potential beneficial and harmful substances in points.
        4. Safety Rating: Conclude with a rating between 1 to 10 and explain the reason for this rating.
        5. Recommendations: Offer actionable advice or recommendations based on the analysis. 

        Please keep the entire response concise, less than 100 words.`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      let text = response.text();

      // Replace Markdown formatting with HTML tags
      text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'); // Bold
      text = text.replace(/^\* (.*)$/gm, '<li>$1</li>'); // List items
      text = text.replace(/^(#{1,6})\s*(.*?)$/gm, (match, hashes, title) => {
        const level = hashes.length;
        return `<h${level}>${title}</h${level}>`;
      }); // Headings
      text = text.replace(/\n/g, '<br/>'); // Line breaks

      const ratingRegex = /(\d+)\/10/;
      const match = text.match(ratingRegex);
      const rating = match ? parseInt(match[1]) : null;


      res.status(200).json({ text, rating });
    } catch (error) {
      console.error('Error checking food safety:', error);
      res.status(500).json({ error: 'Error checking food safety' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
