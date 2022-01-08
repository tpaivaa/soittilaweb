const env = process.env

const config = {
  listPerPage: env.LIST_PER_PAGE || 10,
   owfs : {
    HOST: '10.10.10.6',
    PORT: 4304
  }
}

module.exports = config