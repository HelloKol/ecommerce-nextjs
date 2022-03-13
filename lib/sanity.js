import { createClient, createPreviewSubscriptionHook } from "next-sanity";
import { PortableText as PortableTextComponent } from "@portabletext/react";
import createImageUrlBuilder from "@sanity/image-url";

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2021-10-21",
  useCdn: false,
};

export const sanityClient = createClient(config);
export const usePrevewSubscription = createPreviewSubscriptionHook(config);
export const urlFor = (source) => createImageUrlBuilder(config).image(source);
export const PortableText = (props) => (
  <PortableTextComponent components={{}} {...props} />
);
