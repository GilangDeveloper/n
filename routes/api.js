const { default: axios } = require('axios');
const express = require('express');
// const randomstring = require("randomstring");
const router = express.Router();


// router.get('/', (req, res, next) => {
//     const user = req.body.user;
//     if(!user){
//         res.send('isi lah')
//     }
//     res.send(user)
// })
router.post('/whm', (req, res, next) => {
    const user = req.body.user;
    if(!user){
        res.send('ketik user')
    }
    axios({
        url: "https://addpeckage.csrly092.me/curlserver.php",
        headers: {
            Accept: 'application/json, text/plain, */*'
        },
        method: 'post',
        data: 'pkgwhm=pkgwhm&usergz='+user,
    })
    .then((resp) => res.send(resp.data))
})

module.exports = router;