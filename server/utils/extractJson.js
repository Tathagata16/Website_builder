const extractJson = async (raw) => {
    if (!raw) {
        return
    }
    const cleanText = raw.replace(/```json/gi, "").replace(/```/g, "")
        .trim();

    const firstBrace = cleanText.indexOf('{');
    const secondBrace = cleanText.lastIndexOf('}');

    if(firstBrace === -1 || secondBrace === -1)return null;

    const jsonString = cleanText.slice(firstBrace,secondBrace+1);

    return JSON.parse(jsonString);

}

export default extractJson;