/** @format */

import * as http from 'http';
import path from 'path';
import createMockServer from '../../src';

const PORT = 9999;

export default async function(): Promise<http.Server> {
  const servicesDir = path.resolve(__dirname, '../services');
  const server = await createMockServer(servicesDir);
  // eslint-disable-next-line no-console
  const app = server.listen(PORT, () => console.log(`Starting server on port ${PORT}`));

  return app;
}
