// PM2 config for running the Vite dev server inside the sandbox.
// The dev server serves data/, thumbs/ and img/ straight from the repo root
// (see vite.config.ts), so no 1.1 GB asset copy into dist/ is needed.
module.exports = {
  apps: [
    {
      name: 'webapp',
      script: 'node_modules/vite/bin/vite.js',
      args: '--host 0.0.0.0 --port 3000 --strictPort',
      cwd: __dirname,
      env: {
        NODE_ENV: 'development',
        // Vite 8 rejects unknown Host headers; allow the sandbox preview domain.
        __VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS: '.sandbox.novita.ai',
      },
      watch: false,
      instances: 1,
      exec_mode: 'fork',
    },
  ],
}
