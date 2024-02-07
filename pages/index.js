import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import Testimoni from "../components/Testimoni";
import SeoHead from "../components/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead title='Burn2Give Landing Page' />
      <Layout>
        <Hero />
        <Feature />
        <Pricing />
        <Testimoni />
      </Layout>
    </>
  );
}
