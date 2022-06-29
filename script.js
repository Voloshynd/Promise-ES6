'use strict'; 


// console.log('Pobierania danych...');

// const req = new Promise(function(resolve, rejcet){// zawsze przyjmuje dwa argumenty resolve i reject

//     setTimeout(()=>{
//         console.log('Przygotowanie danych...');
        
//         const product = {
//             name: 'TV',
//             price: 2000
//         };
//         resolve(product); // przekazujemy dane w then 
//     }, 2000);  
// }); 

//  req.then((product)=>{ // then dla opracowania pozytywnej odpowiedzi z Promisa, przyjmuje argumnet z funkcja resolve 
//    return  new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         product.status = 'ordered';
//         resolve(product);
//         // reject(); 
//     }, 2000)
//    })
//  }) .then(data=>{ // budujemy lancuch 
//     data.modify = true; // dodajemy jakies nowe dane i przekazujemy dalej 
//     return data
//     console.log(data);
//    }).then(data =>{
//     console.log(data)
//    }).catch(()=>{// catch zawsze sie wpisuje na koncu, dla opracowania bledow 
//     console.error('Wystapil blad')
//    }).finally(()=>{ // zawsze na koncu, wykonuje sie zawsze nie zaleznie od koncowego wyniku 
//     console.log('Finally');
//    })


const test = time => { // time jakas ilosc czasu, ktora zadamy 
    return new Promise( resolve =>{ // Promise moze przyjmowac i jeden argument  
    setTimeout(() => resolve(), time) // wykona sie argument time 
});
}
//   test(1000).then(()=>{
//     console.log('1000 ms')
//   })

//   test(2000).then(()=>{
//     console.log('2000 ms')
//   })

Promise.all([test(1000),  test(2000)]).then(()=>{
    console.log('All'); 
})// przyjmuje tablice z promisami, Promise.all() sluzy dla tego zeby wszystkie nasze promisy zostaly wykonane, czeka na zkonczenie wszystkich promisow 

Promise.race([test(1000),  test(2000)]).then(()=>{
    console.log('All'); 
})// Promise.race() czeka na pierwszy promise