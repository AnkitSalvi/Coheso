export const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.1",
    info: {
      title: "QWLT API",
      description: "API documentation for QWLT APP",
      contact: {
        name: "My Name",
      },
      servers: [`http://localhost:${process.env.PORT}`],
    },
    components: {
      schemas: {},
      securitySchemes: {
        Bearer: {
          type: "apiKey",
          name: "Authorization",
          in: "header",
        },
      },
    },
    security: [
      {
        Bearer: [],
      },
    ],
  },
  apis: [`./src/routes/*.ts`], // This will point to all the route files in the routes directory
};
