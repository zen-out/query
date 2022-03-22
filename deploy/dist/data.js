let userType = {
    gmail_id: "string",
    facebook_id: "string",
    spotify_id: "string",
    name: "string",
    email: "string",
    verified: "boolean",
    logged_in: "boolean",
    theme: "string",
    hash: "string",
    id: "number",
    created: "date"
}


let hourglassType = {
    id: "number",
    user_id: "number",
    email: "string",
    seconds: "number",
    public: "boolean",
    status: "string",
    usefulness: "number",
    importance: "number",
    difficulty: "number",
    start: "date",
    edit: "date",
    end: "date",
    created: "date"
}

let problemType = {
    id: "number",
    user_id: "number",
    hourglass_id: "number",
    problem: "string",
    whatshouldbe: "string",
    whatactuallyis: "string",
    hypothesis: "string",
    plan: "string",
    created: "date"
}

let cheatsheetType = {
    id: "number",
    user_id: "number",
    hourglass_id: "number",
    problem_id: "number",
    title: "string",
    key_info: "string",
    description: "string",
    notes: "string",
    structure: "string",
    created: "date"
}
let taskType = {
    id: "number",
    user_id: "number",
    hourglass_id: "number",
    problem_id: "number",
    cheatsheet_id: "number",
    name: "string",
    created: "date"
}
let tag_snippetType = {
    id: "number",
    user_id: "number",
    hourglass_id: "number",
    problem_id: "number",
    cheatsheet_id: "number",
    task_id: "number",
    tag: "string",
    snippet: "string",
    link: "string",
    created: "date"
}
let followType = {
    id: "number",
    user_id: "number",
    follow_user_id: "number",
    hourglass_id: "number",
    created: "date"
}
let deviceType = {
    id: "number",
    user_id: "number",
    type: "string",
    device: "string",
    last_login: "date",
    created: "date"
}
let paymentType = {
    id: "number",
    user_id: "number",
    type: "string",
    paid_date: "date",
    created: "date"
}
let userMerge = {
    gmail_id: undefined,
    facebook_id: undefined,
    spotify_id: undefined,
    name: undefined,
    email: undefined,
    verified: undefined,
    logged_in: undefined,
    theme: undefined,
    hash: undefined,
    id: undefined,
    created: undefined
}


let hourglassMerge = {
    id: undefined,
    user_id: undefined,
    email: undefined,
    seconds: undefined,
    public: undefined,
    status: undefined,
    usefulness: undefined,
    importance: undefined,
    difficulty: undefined,
    start: undefined,
    edit: undefined,
    end: undefined,
    created: undefined
}

let problemMerge = {
    id: undefined,
    user_id: undefined,
    hourglass_id: undefined,
    problem: undefined,
    whatshouldbe: undefined,
    whatactuallyis: undefined,
    hypothesis: undefined,
    plan: undefined,
    created: undefined
}

let cheatsheetMerge = {
    id: undefined,
    user_id: undefined,
    hourglass_id: undefined,
    problem_id: undefined,
    title: undefined,
    key_info: undefined,
    description: undefined,
    notes: undefined,
    structure: undefined,
    created: undefined
}
let taskMerge = {
    id: undefined,
    user_id: undefined,
    hourglass_id: undefined,
    problem_id: undefined,
    cheatsheet_id: undefined,
    name: undefined,
    created: undefined
}
let tag_snippetMerge = {
    id: undefined,
    user_id: undefined,
    hourglass_id: undefined,
    problem_id: undefined,
    cheatsheet_id: undefined,
    task_id: undefined,
    tag: undefined,
    snippet: undefined,
    link: undefined,
    created: undefined
}
let followMerge = {
    id: undefined,
    user_id: undefined,
    follow_user_id: undefined,
    hourglass_id: undefined,
    created: undefined
}
let deviceMerge = {
    id: undefined,
    user_id: undefined,
    Merge: undefined,
    device: undefined,
    last_login: undefined,
    created: undefined
}
let paymentMerge = {
    id: undefined,
    user_id: undefined,
    Merge: undefined,
    paid_date: undefined,
    created: undefined
}
module.exports = { userMerge, hourglassMerge, problemMerge, taskMerge, tag_snippetMerge, cheatsheetMerge, followMerge, deviceMerge, paymentMerge, userType, hourglassType, problemType, taskType, tag_snippetType, cheatsheetType, followType, deviceType, paymentType }