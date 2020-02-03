const {historyApi} = require('.');
const PORT = process.env.PORT;

if (PORT === undefined) {
  console.log('[History API][Env Vars][Error]: The Port is not defined');
  process.exit(1);
}

historyApi.listen(PORT);

// Start the app in the given port.
console.log(`[History API] App working on port: ${PORT}`);
