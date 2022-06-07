module.exports = {
    'migrations': {
        enabled: true,
        config: {
            autoStart: true,
            migrationFolderPath : 'migrations'
        },
    },
    upload: {
        config: {
          provider: 'cloudinary',
          providerOptions: {
            cloud_name: env('CLOUDINARY_NAME'),
            api_key: env('CLOUDINARY_API_KEY'),
            api_secret: env('CLOUDINARY_API_SECRET'),
          },
        //   actionOptions: {
        //     upload: {},
        //     uploadStream: {},
        //     delete: {},
        //   },
        },
    },
}