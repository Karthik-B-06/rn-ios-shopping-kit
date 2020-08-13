import {
  shopLight,
  shopDark,
  brandsMLight,
  brandsMDark,
  brandsDDark,
  brandsDLight,
} from "../../src/utils/assetFiles";
import Sections from "../../src/components/sections";

const Ios = (props) => {
  return props?.theme === "LIGHT" ? (
    <>
      <Sections sections={shopLight} sectionTitle="Shop" />
      <Sections sections={brandsMLight} sectionTitle="Brands Manufacturer" />
      <Sections sections={brandsDLight} sectionTitle="Brands Designers" />
    </>
  ) : (
    <>
      <Sections sections={shopDark} sectionTitle="Shop" />
      <Sections sections={brandsMDark} sectionTitle="Brands Manufacturer" />
      <Sections sections={brandsDDark} sectionTitle="Brands Designers" />
    </>
  );
};

export default Ios;
