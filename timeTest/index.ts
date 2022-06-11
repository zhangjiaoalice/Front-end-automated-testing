export const runTimeout = (callback) => {
    setTimeout(() => {
        callback();
    }, 2000);
}

export const moreTimers = (callback) => {
    setTimeout(() => {
        callback();
        setTimeout(() => {
            callback();
        }, 2000)
    }, 3000)
}