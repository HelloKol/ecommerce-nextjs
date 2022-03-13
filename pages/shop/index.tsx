import type { NextPage } from "next";
import styles from "./styles.module.scss";

const Shop: NextPage = () => {
  return <section>shop</section>;
};

// export async function getStaticProps() {
//   const featured = await sanityClient.fetch(featuredQuery);
//   if (!featured) {
//     return {
//       notFound: true,
//     };
//   }
//   return { props: { featured } };
// }

export default Shop;
