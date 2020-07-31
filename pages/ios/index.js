const { default: Sections } = require("../../components/sections");

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
const discoverLight = [
  './discover/light/initial.png',
  './discover/light/scrolled.png',
  './discover/light/scrolled1.png',
  './discover/light/scrolled2.png',
  './discover/light/scrolled3.png',
];
const discoverDark = [
  './discover/dark/initial.png',
  './discover/dark/scrolled.png',
  './discover/dark/scrolled1.png',
  './discover/dark/scrolled2.png',
  './discover/dark/scrolled3.png',
]

const accountDark = [
  './account/dark/initial.png',
  './account/dark/scrolled.png'
]
const accountLight = [
  './account/light/initial.png',
  './account/light/scrolled.png'
]

const Ios = (props) => {
  return props?.theme === 'LIGHT' ? (
    <>
      <Sections sections={accountLight} sectionTitle='Account Screen - Light' />
      <Sections sections={shopLight} sectionTitle='Shop Screen - Light' />
      <Sections sections={discoverLight} sectionTitle='Discover Screen - Light' />
    </>
  ) : (
      <>
        <Sections sections={accountDark} sectionTitle='Account Screen - Dark' />
        <Sections sections={shopDark} sectionTitle='Shop Screen - Dark' />
        <Sections sections={discoverDark} sectionTitle='Discover Screen - Dark' />
      </>
    )
}

export default Ios;
