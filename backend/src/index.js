import app from './app.js';
import logger from './api/utils/logger.js';
import config from './api/utils/config.js';

app.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})