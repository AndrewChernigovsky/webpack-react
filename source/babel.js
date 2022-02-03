async function start() {
    return await Promise.resolve('async is working')
}

const unused = 42

start().then(console.log)