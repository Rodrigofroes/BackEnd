const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    info: {
      title: 'Minha API',
      version: '1.0.0',
      description: 'Documentação da minha API com Swagger',
    },
  },
  apis: ['.server/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;