import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = createClient({
  projectId: '4dk1mwny',
  dataset: 'production',
  apiVersion: '2022-12-07',
  useCdn: true,
  token: import.meta.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
