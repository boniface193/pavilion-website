const axios = require('axios')

// const CEV_URL = `cloudinary://915515433436869:${process.env.API_KEY}@first-pavilion`

exports.renderHomePage = (req, res) => {
    res.render('views/index', {
        pavInfo: {
            phone: '+234 902 045 5349',
            emaily: '#modalYT'
        },
        name: 'check me out'
    })
}

exports.renderHomeSecond = (req, res) => {
    res.render('views/index2')
}


// exports.renderCloudinary = (req, res) => {
//     axios.get(CEV_URL)
//         .then((response) => {
//             console.log(response)
//             // res.render('index', {
                
//             //     sunset: `Sunset: ${response.data.sys.sunset}`,

//             // })
//         })
//         .catch((error) => {
//             console.log(error)
//         })
// }

// exports.renderEmail = (req, res) => {
//     res.render('index', {
//         email: 'info@firstpavitech.com'
//     })
// }
