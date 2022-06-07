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
            cloud_name: env('healight'),
            api_key: env('385645811679574'),
            api_secret: env('V8fxms3ZxN6HflANDBDfwAYSk20'),
          },
          actionOptions: {
            upload: {},
            uploadStream: {},
            delete: {},
          },
        },
    },
}