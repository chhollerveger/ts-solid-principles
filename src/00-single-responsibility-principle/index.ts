import Client from "./models/client";
import Notify from "./models/notify";

const client = new Client("peter.parker@avangers.com");
const notification = new Notify(client);

notification.sendEmail();