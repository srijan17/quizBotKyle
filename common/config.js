require('dotenv').config()

const {
    APP_ID: ApplicationId,
    PUBLIC_KEY: Token,
    SERVER_ID: ServerId
} = process.env
console.log("Sharing")
console.log(` app id${ApplicationId},token ${Token}, server ${ServerId} |||`)
module.exports = {
    ApplicationId, Token, ServerId
}