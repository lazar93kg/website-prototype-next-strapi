module.exports = ({ env }) => ({
 graphql: {
      enabled: true,
      config: {
        endpoint: "/graphql",
        shadowCRUD: true,
        playgroundAlways: true,
        defaultLimit: 7,
        maxLimit: 100,
        apolloServer: {
        tracing: true,
         introspection: true,
        },
      },
    }, 
  // ...
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
    
  },
  // ...
  
});
