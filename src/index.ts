import * as dotenv from 'dotenv';

//set up the env variables from './env' or './dev.env'
//to add more presets change package.json
dotenv.config({
  path: process.env.NODE_ENV === 'production' ? './.env': './dev.env'
});

const port: number = Number(process.env.PORT) || 3000

import Fastify from 'fastify';

const fastify = Fastify({
  logger: true,
});

fastify.get('/', (req, res) => {
  res.send({hello: "works"});
});


fastify.listen({ port }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  console.log(`Server started on ${port} port\nMode - ${process.env.NODE_ENV}`)
})