import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

export async function POST(req, res) {
  try {
    const { foodName } = await req.json();
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
    let text = await response.text();

    // markdown to html
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'); // bold
    text = text.replace(/^\* (.*)$/gm, '<li>$1</li>'); // list items
    text = text.replace(/^(#{1,6})\s*(.*?)$/gm, (match, hashes, title) => {
      const level = hashes.length;
      return `<h${level}>${title}</h${level}>`;
    }); // headings
    text = text.replace(/\n/g, '<br/>'); // line breaks

    //extracting the rating from the reponse text
    const ratingRegex = /(\d+)\/10/;
    const match = text.match(ratingRegex);
    const rating = match ? parseInt(match[1]) : null;

    return new Response(JSON.stringify({ text, rating }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error checking food safety:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function GET(req, res) {
  return new Response(JSON.stringify({ message: 'Method not allowed' }), {
    status: 405,
    headers: { 'Content-Type': 'application/json' },
  });
}
