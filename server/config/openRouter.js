
const generateResponse = async (prompt) => {
    const openRouterUrl = "https://openrouter.ai/api/v1/chat/completions"
   
    const model = "deepseek/deepseek-chat";
    if (!process.env.OPENROUTER_API_KEY) {
    throw new Error("OPENROUTER_API_KEY is missing from environment");
}
    const res = await fetch(openRouterUrl, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
            
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: model,
            messages: [
                {
                    role:'system',
                    content:'You must return ONLY valid raw JSON'
                }
                ,
                {
                    role: 'user',
                    content: prompt,
                },
            ],
            temperature:0.2
        }),
    });


    if(!res.ok){
        const err = await res.text();
        throw new Error(`Open router error ${err}`);
    }
    const data = await res.json();
    return data.choices[0].message.content;

}

export default generateResponse;