const Blueprint = require('./Blueprint');

const apiBlueprint = new Blueprint('api');

apiBlueprint.route('/', (request, response) => {
  response.status(200).send('Hello World!');
});

apiBlueprint.route('/health_check', (request, response) => {
  response.status(200).send(Date.now().toString());
});

apiBlueprint.route('/conversations', (request, response) => {
  response.status(200).send({ page: 0, total: 1, data: { conversations: [] } });
});

exports.api = apiBlueprint;
