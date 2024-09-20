import Link from "next/link";

const HomePage = () => {
  const tiles = [
    {
      id: 1,
      title: "Rooms",
      description: "Description for Tile 1",
      imageUrl:
        "https://res.cloudinary.com/dmbxx03vp/image/upload/v1726852104/6_v5lzgu.jpg",
    },
    {
      id: 2,
      title: "Agenda",
      description: "Description for Tile 2",
      imageUrl:
        "https://res.cloudinary.com/dmbxx03vp/image/upload/v1726852104/4_xnuxcr.jpg",
    },
    {
      id: 3,
      title: "Marketplace",
      description: "Description for Tile 3",
      imageUrl:
        "https://res.cloudinary.com/dmbxx03vp/image/upload/v1726852105/5_v0wgxd.jpg",
    },
    {
      id: 4,
      title: "Speakers",
      description: "Description for Tile 4",
      imageUrl:
        "https://res.cloudinary.com/dmbxx03vp/image/upload/v1726852104/1_cqp6nt.jpg",
    },
    {
      id: 5,
      title: "Games",
      description: "Description for Tile 5",
      imageUrl:
        "https://res.cloudinary.com/dmbxx03vp/image/upload/v1726852104/3_fczaji.jpg",
    },
    {
      id: 6,
      title: "Sponsors",
      description: "Description for Tile 6",
      imageUrl:
        "https://res.cloudinary.com/dmbxx03vp/image/upload/v1726852104/2_ffl42v.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-purple-50 flex justify-center items-center p-8">
      {/* Responsive grid layout */}
      <Link href="/">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-xl">
          {tiles.map((tile) => (
            <div
              key={tile.id}
              className="bg-purple-100 shadow-4xl cursor-pointer rounded-lg p-4 sm:p-6 text-center hover:bg-purple-500 transition duration-300 group"
            >
              <img
                src={tile.imageUrl}
                alt={tile.title}
                className="w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 object-contain rounded-md mb-4 group-hover:opacity-75 transition duration-300"
              />
              <h2 className="text-2xl sm:text-xl font-bold text-pink-600 mb-2 group-hover:text-yellow-300">
                {tile.title}
              </h2>
            </div>
          ))}
        </div>
      </Link>
    </div>
  );
};

export default HomePage;
