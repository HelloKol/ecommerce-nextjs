import Image from "next/image";
import type { NextPage } from "next";
import { sanityClient, urlFor } from "../lib/sanity";
import { SingleRowFeed, About } from "../components";
import { featuredQuery, dressesQuery, coatsQuery } from "../services";
import { FeaturedType, AllProductsType } from "../types/types";
import styles from "./styles.module.scss";

interface FeaturedInterface {
  featured: FeaturedType[];
}
interface ProductProps {
  dresses: AllProductsType[];
  coats: AllProductsType[];
}
type Props = FeaturedInterface & ProductProps;

const Home: NextPage<Props> = (props) => {
  const { featured, dresses, coats } = props;

  const renderHero = () => {
    const { name, description, image } = featured[0];
    const fallBack = "https://bit.ly/3i1Ga5W";
    const imgSrc = image != null ? urlFor(image).url() : fallBack;

    return (
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.leftHero}>
            <h1 className={styles.title}>{name}</h1>
            <p className={styles.description}>
              Shop our endless selection of clothing and accessories for you and
              your loved ones! You'll find pretty pastels, bold dresses, trendy
              separates.
              {/* {description[0]["children"][0].text} */}
            </p>
            <div className={styles.shopNow}>
              <div className={styles.circle}>
                <p>Shop now</p>
              </div>
            </div>
          </div>

          <div className={styles.rightHero}>
            <div className={styles.featuredImg}>
              <Image
                src={imgSrc}
                alt={name}
                width={200}
                height={240}
                quality={100}
                layout="responsive"
                priority
              />
              <p className={styles.checkOut}>
                Check out <br /> this collection
              </p>
            </div>
          </div>

          <ul className={styles.socialLinks}>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
          </ul>

          <span className={styles.explore}>
            <p>Explore</p>
            <img src={"./static/icons/down-arrow.png"} alt={"down arrow"} />
          </span>
        </div>
      </section>
    );
  };

  const renderLookBook = () => {
    const products = coats.slice(14, 17).map((item, index) => {
      const { _id, name, image, price } = item;
      const imgSrc = image != null ? urlFor(image).url() : "fallbackImg";
      return (
        <li key={_id} className={styles[`lookBookItem-${index + 1}`]}>
          <div className={styles.imagWrapper}>
            <Image
              src={imgSrc}
              alt="products"
              width={300}
              height={400}
              layout="responsive"
            />
          </div>
          <p>{name}</p>
        </li>
      );
    });
    return (
      <section className={styles.lookBookSection}>
        <div className={styles.lookBookcontainer}>
          <h1>Look Books</h1>
          <ul className={styles.lookBookList}>{products}</ul>
        </div>
      </section>
    );
  };

  const renderFollowUs = () => {
    /* follow us section */
    return (
      <section className={styles.followUsSection}>
        <div className={styles.followUscontainer}>
          <h1>Follow Us On Instagram</h1>
          <h3>@Kkity_official</h3>
          <div className={styles.followImages}>
            <div className={styles.imgOne}>
              <Image
                src={"/static/media/follow/olad.jpg"}
                width={300}
                height={380}
                layout={"responsive"}
              />
            </div>
            <div className={styles.flexImages}>
              <div className={styles.imgTwo}>
                <Image
                  src={"/static/media/follow/mendes.jpg"}
                  width={300}
                  height={440}
                  layout={"responsive"}
                />
              </div>
              <div className={styles.imgThree}>
                <Image
                  src={"/static/media/follow/haust.jpg"}
                  width={300}
                  height={440}
                  layout={"responsive"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <main className={styles.landingSection}>
      {renderHero()}
      <SingleRowFeed mainHeader="Arrivals" products={dresses} />
      <About />
      {renderLookBook()}
      {renderFollowUs()}
    </main>
  );
};

export async function getStaticProps() {
  const featured = await sanityClient.fetch(featuredQuery);
  const dresses = await sanityClient.fetch(dressesQuery);
  const coats = await sanityClient.fetch(coatsQuery);
  return { props: { featured, dresses, coats } };
}

export default Home;
