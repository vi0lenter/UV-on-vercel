module.exports = {
  bare: {
    enabled: true,
    prefix: '/bare/',
  },
  uv: {
    prefix: '/service/',
    encodeUrl: 'xor', // 'xor' ou 'base64'
    handler: '/uv.handler.js',
    bundle: '/uv.bundle.js',
  },
  websiteBlacklist: [],
  injection: true, // inject du code dans la page (nécessaire pour contourner des scripts bloquants)
}
