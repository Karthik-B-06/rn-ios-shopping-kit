import { map } from "lodash";

const Sections = ({ sections, sectionTitle }) => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-0 sm:px-0 md:px-0 md:pb-3">
        <h1 className="text-2xl font-semibold text-gray-900">{sectionTitle}</h1>
      </div>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-3">
        {
          map(sections, (sectionImage) => {
            return (
              <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow">
                <div className="relative flex-1 flex flex-col" style={{ paddingBottom: '200%' }}>
                  <img className="absolute h-full w-full flex-shrink-0 mx-auto bg-black" src={sectionImage} alt="" />
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