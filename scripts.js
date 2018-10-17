anime({
    targets: '#h2div',
    translateX: [
      { value: 100, duration: 1200 },
      { value: 0, duration: 800 }
    ],
    rotate: '1turn',
    backgroundColor: '#FFF',
    duration: 2000,
    loop: false
    });

anime({
    targets: ".el",
    translateX: [
        {value: 250, duration: 2000},
        {value: 0, duration: 1000}
    ],
    
    duration: 2000,
    loop: true
    
    });

anime({
    targets: "#bigSq",
    rotate: '10turn',
    duration: 5000
})

