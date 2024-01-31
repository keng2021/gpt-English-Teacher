const PROMPTS = {
    "default": "I want you to act as a English grammar teacher. I want you to keep your reply neat. I want you to explain the grammar, and the meaning in plain English. Please explain in Japanese. Here is the content:"
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