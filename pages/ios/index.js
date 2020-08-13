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
  designerLight,
  designerDark,
  productLight,
  productDark,
  shoppingbagLight,
  shoppingbagDark,
  checkoutDark,
  checkoutLight,
  accountLight,
  accountDark,
  signupLight,
  signupDark,
  authLight,
  authDark,
} from "../../src/utils/assetFiles";
import Sections from "../../src/components/sections";

const Ios = (props) => {
  return props?.theme === "LIGHT" ? (
    <>
      <Sections sections={shopLight} sectionTitle="Shop Screen" />
      <Sections
        sections={brandsMLight}
        sectionTitle="Brands-Manufacturer Screen"
      />
      <Sections
        sections={brandsDLight}
        sectionTitle="Brands-Designers Screen"
      />
      <Sections sections={discoverLight} sectionTitle="Discover Screen" />
      <Sections sections={catalogLight} sectionTitle="Catalog Screen" />
      <Sections sections={designerLight} sectionTitle="Designer Screen" />
      <Sections sections={productLight} sectionTitle="Product Screen" />
      <Sections
        sections={shoppingbagLight}
        sectionTitle="Shopping Bag Screen"
      />
      <Sections sections={checkoutLight} sectionTitle="Checkout Screen" />
      <Sections sections={accountLight} sectionTitle="Account Screen" />
      <Sections sections={authLight} sectionTitle="Auth Screen" />
    </>
  ) : (
    <>
      <Sections sections={shopDark} sectionTitle="Shop Screen" />
      <Sections
        sections={brandsMDark}
        sectionTitle="Brands-Manufacturer Screen"
      />
      <Sections sections={brandsDDark} sectionTitle="Brands-Designers Screen" />
      <Sections sections={discoverDark} sectionTitle="Discover Screen" />
      <Sections sections={catalogDark} sectionTitle="Catalog Screen" />
      <Sections sections={designerDark} sectionTitle="Designer Screen" />
      <Sections sections={productDark} sectionTitle="Product Screen" />
      <Sections sections={shoppingbagDark} sectionTitle="Shopping Bag Screen" />
      <Sections sections={checkoutDark} sectionTitle="Checkout Screen" />
      <Sections sections={accountDark} sectionTitle="Account Screen" />
      <Sections sections={authDark} sectionTitle="Auth Screen" />
    </>
  );
};

export default Ios;
