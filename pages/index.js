import Navigation from "../components/navbar";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Information from "../components/information.js";
import HeadMasterComment from "../components/headMasterComment.js";
import Card from "../components/card.js";
import searchTranslations from "../public/text.json";
import CardBanner from "../components/cardBanner.js";
import InstaExample from "../components/instaExample.js";
import GridLayout from "../components/gridLayout";
import Footer from "../components/footer"
const text = searchTranslations;

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <div className="container">
          <CardBanner></CardBanner>
          <Card imgSrc={"/images/landscape-photo.jpg"}></Card>
          <Information></Information>
          <InstaExample></InstaExample>
          <Card imgSrc={"/images/landscape-photo-2.jpg"}></Card>
          <GridLayout></GridLayout>
          <HeadMasterComment></HeadMasterComment>
        </div>
      </main>
      <Footer></Footer>

    </>
  );
}
