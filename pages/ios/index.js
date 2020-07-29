const { default: Sections } = require("../../components/sections");

const Ios = (props) => {
  const brandsLight = [
    './brands/light/BrandsDesigners.png',
    './brands/light/BrandsDesignersScrolled.png',
    './brands/light/BrandsManufacturers.png',
    './brands/light/BrandsManufacturersScrolled.png'
  ]
  const brandsDark = [
    './brands/dark/BrandsDesigners.png',
    './brands/dark/BrandsDesignersScrolled.png',
    './brands/dark/BrandsManufacturers.png',
    './brands/dark/BrandsManufacturersScrolled.png'
  ]
  const shopLight = [
    './shop/light/ShopScreen.png',
    './shop/light/ShopScreenScrolled.png',
    './shop/light/ShopScreenSearchFocussed.png',
  ]
  const shopDark = [
    './shop/dark/ShopScreen.png',
    './shop/dark/ShopScreenScrolled.png',
    './shop/dark/ShopScreenSearchFocussed.png',
  ]
  return props?.theme === 'LIGHT' ? (
    <>
      <Sections sections={brandsLight} sectionTitle='Brands Screen - Light' />
      <Sections sections={shopLight} sectionTitle='Shop Screen - Light' />
    </>
  ) : (
      <>
        <Sections sections={brandsDark} sectionTitle='Brands Screen - Dark' />
        <Sections sections={shopDark} sectionTitle='Shop Screen - Dark' />
      </>
    )
}

export default Ios;
