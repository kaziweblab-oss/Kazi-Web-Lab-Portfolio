import ImageKit from "@imagekit/react";

export const imageKit = new ImageKit({
  publicKey: process.env.publicKey,
  privateKey: process.env.privateKey,
  urlEndpoint: process.env.urlEndpoint,
});
