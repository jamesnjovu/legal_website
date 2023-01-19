
import ower1 from '../assets/img/ower1.png'
import ower2 from '../assets/img/ower2.png'

const Team = () => {
    const ower_details = [
        { name: "Marget Chalwe ", img: ower1, position: "" },
        { name: "Kasumpa Mwansa Kabalata", img: ower2, position: "" }
    ]
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Our Executive Team</h1>
                <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
                </p>
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
                    {ower_details.map((link, idx) => (
                        <div key={idx} className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                            <div className="flex flex-col sm:-mx-4 sm:flex-row">
                                <img className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src={link.img} alt="" />
                                <div className="mt-4 sm:mx-4 sm:mt-0">
                                    <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">{link.name}</h1>
                                    <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">{link.position}</p>
                                </div>
                            </div>
                            <p className="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nesciunt officia aliquam neque optio? Cumque facere numquam est.</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Team;
