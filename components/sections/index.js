import { map } from "lodash";

const Sections = ({ sections, sectionTitle }) => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-0 sm:px-0 md:px-0">
        <h1 className="text-2xl font-semibold text-gray-900">{sectionTitle}</h1>
      </div>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-3">
        {
          map(sections, (sectionImage, index) => {
            return (
              <li key={index} className="col-span-1 flex flex-col text-center bg-white shadow-md mt-2">
                <div className="relative flex-1 flex flex-col" style={{ paddingBottom: '218%' }}>
                  <img className="absolute h-full w-full flex-shrink-0 mx-auto bg-gray-300" src={sectionImage} alt="" />
                </div>
              </li>
            )
          })
        }
      </ul>
    </>
  )

}

export default Sections;