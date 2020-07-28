const { default: Sections } = require("../../components/sections");

const Ios = () => {
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
  return (
    <>
      <Sections sections={brandsLight} sectionTitle='Brands Screen - Light' />
      <Sections sections={brandsDark} sectionTitle='Brands Screen - Dark' />
    </>
  )
}

export default Ios;
