import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { CosmosClient } from "@azure/cosmos";

const httpTrigger: AzureFunction = async function(
  context: Context,
  req: HttpRequest
): Promise<void> {
  try {
    const client = new CosmosClient(process.env.CONNECTION_STRING);

    const database = client.database("tailwind");
    const container = database.container("products");

    const product = req.body;
    const { id, brand } = product;

    let { resource } = await container.item(id, brand.name).replace(product);

    context.res = {
      // status: 200, /* Defaults to 200 */
      body: resource
    };
  } catch (err) {
    context.res = {
      status: 500,
      body: err.message
    };
  }
};

export default httpTrigger;
