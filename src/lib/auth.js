import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

// set google's public DNS servers to avoid potential issues with local DNS resolution in certain environments
//   এইটা করার কারণ হলো, কিছু পরিবেশে লোকাল DNS রেজল্যুশন সমস্যা হতে পারে,
//  তাই গুগলের পাবলিক DNS সার্ভার ব্যবহার করা হচ্ছে যাতে এই ধরনের সমস্যা এড়ানো যায়।

import { betterAuth } from "better-auth";

import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.BETTER_AUTH_DB_URL);
const db = client.db("pulsewire");

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client,
  }),
});
