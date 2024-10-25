// Make sure to include these imports:
// import { GoogleGenerativeAI } from "@google/generative-ai";
const { GoogleGenerativeAI } = require("@google/generative-ai");

const answer = async (message) => {
  try {
    const genAI = new GoogleGenerativeAI(
      "AIzaSyA8bYVcFBDUAsXi6YsppZjDuV7UXAcnWIo"
    );
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(message);
    const answer = result.response.text();
    return answer;
  } catch (error) {
    return error.message;
  }
};

module.exports = answer;
