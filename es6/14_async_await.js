async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 2000)
    })

    let result = await promise // รอจนกว่า promise จะทำงานเสร็จ
    console.log(result)
}

f()