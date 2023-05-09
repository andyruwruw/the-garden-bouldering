// Local Imports
import { UpdateDataHandler } from './handlers/general/update-data-handler';

/**
 * Run update data handler.
 */
const processData = async () => {
  const processor = new UpdateDataHandler();

  await processor.execute(
    null,
    null,
  );
}

processData();
