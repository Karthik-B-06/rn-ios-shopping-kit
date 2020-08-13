import {
  shopLight,
  shopDark,
  brandsMLight,
  brandsMDark,
  brandsDDark,
  brandsDLight,
  discoverLight,
  discoverDark,
  catalogDark,
  catalogLight,
} from "../../src/utils/assetFiles";
import Sections from "../../src/components/sections";

const Ios = (props) => {
  return props?.theme === "LIGHT" ? (
    <>
      <Sections sections={shopLight} sectionTitle="Shop" />
      <Sections sections={brandsMLight} sectionTitle="Brands-Manufacturer" />
      <Sections sections={brandsDLight} sectionTitle="Brands-Designers" />
      <Sections sections={discoverLight} sectionTitle="Discover" />
      <Sections sections={catalogLight} sectionTitle="Catalog Screen" />
    </>
  ) : (
    <>
      <Sections sections={shopDark} sectionTitle="Shop" />
      <Sections sections={brandsMDark} sectionTitle="Brands-Manufacturer" />
      <Sections sections={brandsDDark} sectionTitle="Brands-Designers" />
      <Sections sections={discoverDark} sectionTitle="Discover" />
      <Sections sections={catalogDark} sectionTitle="Catalog Screen" />
    </>
  );
};

export default Ios;
