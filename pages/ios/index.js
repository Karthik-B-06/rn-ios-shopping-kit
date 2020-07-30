const { default: Sections } = require("../../components/sections");

const Ios = (props) => {
  const shopLight = [
    './shop/light/initial.png',
    './shop/light/scrolled.png',
    './shop/light/withSearch.png',
  ]
  const shopDark = [
    './shop/dark/initial.png',
    './shop/dark/scrolled.png',
    './shop/dark/withSearch.png',
  ]
  return props?.theme === 'LIGHT' ? (
    <>
      <Sections sections={shopLight} sectionTitle='Shop Screen - Light' />
    </>
  ) : (
      <>
        <Sections sections={shopDark} sectionTitle='Shop Screen - Dark' />
      </>
    )
}

export default Ios;
