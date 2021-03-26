// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const crypto = require('crypto')

const VALID_OTP = '67890'

const isJSON = (variable) => typeof variable === 'object' && variable !== null

export default (req, res) => {
    const body = req.body
    if (!body || !isJSON(body)) {
        res.statusCode = 400
        res.json({
            error: true,
            message: `Invalid request! Must include field 'otp' in request body as JSON`
        })
        return
    }

    if (body.otp !== VALID_OTP) {
        res.statusCode = 401
        res.json({
            error: true,
            message: `Invalid OTP!`
        })
        return
    }

    res.statusCode = 200
    res.json({
        token: crypto.randomBytes(20).toString('hex'),
        scope: '*',
	    permissions: ['login'],
    })
}
