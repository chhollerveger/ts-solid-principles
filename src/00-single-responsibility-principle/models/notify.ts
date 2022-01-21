import Client from "./client";

export default class Notify {

  constructor(private client: Client) { }

  sendEmail(): boolean {
    console.log(`Sending a notification to the email address ${this.client.email}...`);
    return true;
  }

}