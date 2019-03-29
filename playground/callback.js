let data = null;
fetchData = (callback) => {
    setTimeout(() => {
        data = {course: 'full stack js'}
        callback();
    }, 2000);
}


printData = () => {
    console.log(data)
}

fetchData(() => {
    printData()
})


