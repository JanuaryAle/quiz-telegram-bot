module.exports = {
  telegramBotToken: "<insert token into development.json>",
  url: "<insert server https url here>",
  mongo: {
    host: "mongodb://localhost:27017/",
    dbName: "quiz_db"
  },
  bot: {
    logDest: `${process.cwd()}/logs/bot`,
    openTime: "00:00",
    closeTime: "23:59",
    simple_prize_score: 5,
    lottery_score: 10
  },
  bot_server: {
    logDest: `${process.cwd()}/logs/server`,
    port: 5000,
    key: `${__dirname}/../../certs/webhook_pkey.pem`,
    cert: `${__dirname}/../../certs/webhook_cert.pem`
  },

  api_server: {
    logDest: `${process.cwd()}/logs/api`,
    port: process.env.PORT || 3000
  }
};
