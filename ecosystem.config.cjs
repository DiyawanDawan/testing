require('dotenv').config();

module.exports = {
  apps: [
    {
      name: 'test-deploy',
      script: 'index.js',
      watch: false,
      env: {
        NODE_ENV: 'development',
        PORT: 3000,
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
  ],

  deploy: {
    production: {
      user: 'root',
      host: '148.230.97.80',
      ref: 'origin/main',
      repo: 'git@github.com:DiyawanDawan/test.git',
      path: '/var/www/test-deploy',
      key: '/c/Users/v/.ssh/server-ssh',
      'post-deploy': '/var/www/test-deploy/source/deploy-prod.sh'
    },
  },
};
