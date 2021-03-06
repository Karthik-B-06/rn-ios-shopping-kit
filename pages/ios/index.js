import Sections from "../../components/sections";
import {
  accountDark,
  accountLight,
  authDark,
  authLight,
  brandsDDark,
  brandsDLight,
  brandsMDark,
  brandsMLight,
  catalogDark,
  catalogLight,
  checkoutDark,
  checkoutLight,
  designerDark,
  designerLight,
  discoverDark,
  discoverLight,
  productDark,
  productLight,
  shopDark,
  shopLight,
  shoppingbagDark,
  shoppingbagLight,
  wishlistLight,
  wishlistDark,
  collectionLight,
  collectionDark,
} from "../../src/utils/assetFiles";

const Ios = (props) => {
  return props?.theme === "LIGHT" ? (
    <>
      <Sections sections={authLight} sectionTitle="Auth Screen" />
      <Sections sections={discoverLight} sectionTitle="Discover Screen" />
      <Sections sections={collectionLight} sectionTitle="Collection Screen" />

      <Sections sections={shopLight} sectionTitle="Shop Screen" />
      <Sections sections={catalogLight} sectionTitle="Catalog Screen" />
      <Sections sections={designerLight} sectionTitle="Designer Screen" />

      <Sections
        sections={brandsMLight}
        sectionTitle="Brands-Manufacturer Screen"
      />
      <Sections
        sections={brandsDLight}
        sectionTitle="Brands - Designers Screen"
      />

      <Sections sections={productLight} sectionTitle="Product Screen" />

      <Sections sections={accountLight} sectionTitle="Account Screen" />

      <Sections
        sections={shoppingbagLight}
        sectionTitle="Shopping Bag Screen"
      />

      <Sections sections={wishlistLight} sectionTitle="Wishlist Screen" />

      <Sections sections={checkoutLight} sectionTitle="Checkout Screen" />
    </>
  ) : (
    <>
      <Sections sections={authDark} sectionTitle="Auth Screen" />
      <Sections sections={discoverDark} sectionTitle="Discover Screen" />
      <Sections sections={collectionDark} sectionTitle="Collection Screen" />

      <Sections sections={shopDark} sectionTitle="Shop Screen" />
      <Sections sections={catalogDark} sectionTitle="Catalog Screen" />
      <Sections sections={designerDark} sectionTitle="Designer Screen" />

      <Sections
        sections={brandsMDark}
        sectionTitle="Brands-Manufacturer Screen"
      />
      <Sections
        sections={brandsDDark}
        sectionTitle="Brands - Designers Screen"
      />

      <Sections sections={productDark} sectionTitle="Product Screen" />

      <Sections sections={accountDark} sectionTitle="Account Screen" />

      <Sections sections={shoppingbagDark} sectionTitle="Shopping Bag Screen" />

      <Sections sections={wishlistDark} sectionTitle="Wishlist Screen" />

      <Sections sections={checkoutDark} sectionTitle="Checkout Screen" />
    </>
  );
};

export default Ios;
