
export const fetchData = (fn) => {
    fn({ age: 18 })
}

export const promiseFun = () => {
    return new Promise((resolve, reject) => {
        resolve({
            msg: 'aaaa',
        })
    })
}