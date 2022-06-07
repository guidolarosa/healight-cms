module.exports = ({ env }) => ({
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
            cloud_name: env('CLOUDINARY_NAME', 'healight'),
            api_key: env('CLOUDINARY_API_KEY', '385645811679574'),
            api_secret: env('CLOUDINARY_API_SECRET', 'V8fxms3ZxN6HflANDBDfwAYSk20'),
        },
          actionOptions: {
            upload: {},
            uploadStream: {},
            delete: {},
          },
        },
    }
})