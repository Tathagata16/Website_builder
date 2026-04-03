const extractJson = async (raw) => {
    try{if (!raw) {
        return
    }
    const cleanText = raw.replace(/```json/gi, "").replace(/```/g, "")
        .trim();

    const firstBrace = cleanText.indexOf('{');
    const secondBrace = cleanText.lastIndexOf('}');

    if(firstBrace === -1 || secondBrace === -1)return null;

    const jsonString = cleanText.slice(firstBrace,secondBrace+1);

    try {
            return JSON.parse(jsonString);
        } catch (err) {
            console.log("❌ JSON PARSE ERROR:", err.message);
            console.log("❌ RAW JSON STRING:", jsonString);
            return null;
        }
    }catch(err){
        console.log("Error parsing JSON:", err);
        return null;
    }

}

export default extractJson;