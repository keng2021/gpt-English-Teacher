const PROMPTS = {
    "default": "Give me the definition, root origin, synonyms, antonyms, word families, cultural context, and examples. Keep it simply and short. Use the followin content: "
};

export function getPrompt( name = 'default' ) {
    if ( name in PROMPTS ) {
        return PROMPTS[name];
    }
    return {"error": "No prompt found for name: " + name};
}

export function promptList() {
    return Object.keys(PROMPTS);
}