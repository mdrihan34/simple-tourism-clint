const Country = () => {
  return (
    <div className="lg:ml-48 lg:mr-36 ">
      <h1 className="text-4xl font-semibold text-center my-10">
        Our Tourism Country
      </h1>
      <div className="md:grid grid-cols-3 gap-10 justify-center space-y-5 md:space-y-0">
        <div className="card h-96 w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              className="h-28 w-full"
              src="https://i.postimg.cc/rmvN3P6R/pexels-kelly-1179532-2382889.jpg"
              alt="Bangladesh"
            />
          </figure>
          <div className="space-y-5 mt-3">
            <h2 className="text-2xl font-extrabold text-center">Bangladesh</h2>
            <p className="p-4">
              Bangladesh is a South Asian country marked by lush greenery and
              many waterways. Its Padma (Ganges), Meghna, and Jamuna rivers
              create fertile plains, and travel by boat is common. On the
              southern coast, the Sundarbans, an enormous mangrove forest shared
              with Eastern India, is home to the royal Bengal tiger.
            </p>
          </div>
        </div>
        <div className="card h-96 w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              className="h-56 w-full"
              src="https://i.postimg.cc/rsBc3stb/pexels-tirachard-kumtanom-112571-472309.jpg"
              alt="Bangladesh"
            />
          </figure>
          <div className="space-y-5 mt-3">
            <h2 className="text-2xl font-extrabold text-center">Thailand</h2>
            <p className="p-4">
              Thailand is renowned for its tropical beaches, opulent royal
              palaces, ancient ruins, and ornate temples displaying figures of
              Buddha. A vibrant country located in Southeast Asia, it blends
              modern cityscapes with quiet villages and lush landscapes.
              Bangkok, its capital, is at the heart of the country.
            </p>
          </div>
        </div>
        <div className="card  h-96 w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              className="h-56 w-full"
              src="https://i.postimg.cc/cCy0563z/pexels-ahmad-syahrir-107128-758742.jpg"
              alt="Bangladesh"
            />
          </figure>
          <div className="space-y-5 mt-3">
            <h2 className="text-2xl font-extrabold text-center">Indonesia</h2>
            <p className="p-4">
              Indonesia is a vast archipelago in Southeast Asia, made up of over
              17,000 islands, including popular destinations like Bali, Java,
              and Sumatra. Known for its diverse landscapes that range from
              volcanic mountains to dense rainforests and pristine beaches,
              Indonesia is also rich in cultural heritage with numerous ethnic
              groups, each.
            </p>
          </div>
        </div>
        <div className="card  h-96 w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              className="h-56 w-full"
              src="https://i.postimg.cc/5NWBWVMd/pexels-umar-mukhtar-703539-1538177.jpg"
              alt="Bangladesh"
            />
          </figure>
          <div className="space-y-5 mt-3">
            <h2 className="text-2xl font-extrabold text-center">Malaysia</h2>
            <p className="p-4">
              Malaysia is a Southeast Asian country known for its beaches,
              rainforests, and mix of Malay, Chinese, Indian, and European
              cultural influences. Its capital, Kuala Lumpur, is home to
              colonial buildings, busy shopping districts such as Bukit Bintang,
              and iconic skyscrapers like the Petronas Twin Towers.
            </p>
          </div>
        </div>
        <div className="card  h-96 w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              className="h-56 w-full"
              src="https://i.postimg.cc/mrWktb8B/pexels-foodoncam-58597.jpg"
              alt="Bangladesh"
            />
          </figure>
          <div className="space-y-5 mt-3">
            <h2 className="text-2xl font-extrabold text-center">Vietnam</h2>
            <p className="p-4">
              Vietnam is a Southeast Asian country known for its vibrant
              culture, bustling cities, and poignant history. It features
              stunning landscapes ranging from lush rice terraces and forested
              mountains in the north to picturesque valleys in the central
              highlands and beautiful beaches in the south..
            </p>
          </div>
        </div>
        <div className="card  h-96 w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              className="h-56 w-full"
              src="https://i.postimg.cc/pLHydW0x/pexels-souvenirpixels-1534057.jpg"
              alt="Bangladesh"
            />
          </figure>
          <div className="space-y-5 mt-3">
            <h2 className="text-2xl font-extrabold text-center">Cambodia</h2>
            <p className="p-4">
              Cambodia is renowned for its rich history and majestic temples,
              most famously Angkor Wat, an enormous temple complex that has
              become a symbol of the country. It's also known for its charming
              cities like Phnom Penh and Siem Reap, which blend traditional
              Khmer culture with French colonial influences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
