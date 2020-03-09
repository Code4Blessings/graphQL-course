//named export
//Default has no name but you can only have one

const message = 'Some message from myModule.js'
const name = 'Robin'
const location = 'Georgia'
const getGreeting = (name) => {
    return `Welcome to the course ${name}`
}

export { message, name, getGreeting, location as default }