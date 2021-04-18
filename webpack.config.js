module.exports = {
  devServer: {
    http2: true,
    https: {
      key: fs.readFileSync('./webhook_pkey.key'),
      cert: fs.readFileSync('./webhook_cert.pem'),
    },
  },
};