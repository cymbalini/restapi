'use strict'
const baseurl = 'https://api.nbp.pl/api/exchangerates/tables/'
const getCurrency = async (table) => {
    try {
        const Response = await fetch(`${baseurl}${table}`)
        const data = await Response.json()
        return data
    } catch (err) {
        console.log(`to jest błąd ${err}`)
    }
}
getCurrency('a').then(data => {
    console.log(data)
    // const currencies = data[0]
    // destrukturyzacja
    const [currencies] = data
    const { rates } = currencies
    rates.forEach((elem, i) => {
        const tr = document.createElement('tr')
            tr.innerHTML = `<td>${++i}</td>
            <td>${elem.currency}</td>
            <td>${elem.mid}</td>`
            document.querySelector('table tbody').appendChild(tr)
    })
})
// const getData = () => {

//     fetch(baseurl)
//         .then(Response => Response.json())
//         .then(result => {
//             console.log(result)
//             console.log(result[0].rates)
//             result[0].rates.forEach((elem, i) => {
//                 const tr = document.createElement('tr')
//                 tr.innerHTML = `<td>${++i}</td>
//                 <td>${elem.currency}</td>
//                 <td>${elem.mid}</td>`
//                 document.querySelector('table tbody').appendChild(tr)
//             });
//         })
// }
// const btn = document.querySelector('button')
// btn.addEventListener('click', getData)


//                  GIT

// git init, git add . , git commit -m"" ,
// komedy do kita gałęzie
// git branch (sprawdza)
// git branch -d nazwa(usuwa)
// git branch nazwa (dodaje)
// git checkout -b dev(zmienia i tworzy)
