import Achivement from "@components/Home/Achivement";
import BlobContent from "@components/Home/BlobContent";
import BuildTrust from "@components/Home/BuildTrust";
import Gallary from "@components/Home/Gallary";
import Hero from "@components/Home/Hero";
import OurStory from "@components/Home/OurStory";
import WhatweDo from "@components/Home/WhatweDo";
import WhoWeAre from "@components/Home/WhoWeAre";

const Home = () => {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <WhatweDo />
      <BlobContent />
      <Achivement />
      <OurStory />
      <BuildTrust />
      <Gallary />
    </>
  );
};

export default Home;
