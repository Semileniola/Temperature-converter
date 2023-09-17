let myPromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Yay, I resolved!')
      }, 1000);
    });
}

    console.log(myPromise())
