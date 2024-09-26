"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";

const HomePage = () => {
  const { data: session } = useSession();

  const tiles = [
    {
      id: 1,
      title: "Rooms",
      description: "Description for Tile 1",
      imageUrl:
        "https://res.cloudinary.com/dmbxx03vp/image/upload/v1726852104/6_v5lzgu.jpg",
      route: "/rooms",
    },
    {
      id: 2,
      title: "Agenda",
      description: "Description for Tile 2",
      imageUrl:
        "https://res.cloudinary.com/dmbxx03vp/image/upload/v1726852104/4_xnuxcr.jpg",
      route: "/agenda",
    },
    {
      id: 3,
      title: "Marketplace",
      description: "Description for Tile 3",
      imageUrl:
        "https://res.cloudinary.com/dmbxx03vp/image/upload/v1726887645/5_wmlxav.jpg",
      route: "/marketplace",
    },
    {
      id: 4,
      title: "Speakers",
      description: "Description for Tile 4",
      imageUrl:
        "https://res.cloudinary.com/dmbxx03vp/image/upload/v1726852104/1_cqp6nt.jpg",
      route: "/speakers",
    },
    {
      id: 5,
      title: "Games",
      description: "Description for Tile 5",
      imageUrl:
        "https://res.cloudinary.com/dmbxx03vp/image/upload/v1726852104/3_fczaji.jpg",
      route: "/games",
    },
    {
      id: 6,
      title: "Sponsors",
      description: "Description for Tile 6",
      imageUrl:
        "https://res.cloudinary.com/dmbxx03vp/image/upload/v1726852104/2_ffl42v.jpg",
      route: "/sponsors",
    },
    {
      id: 7,
      title: "Profile",
      description: "Description for Tile 6",
      imageUrl:
        "https://res.cloudinary.com/dmbxx03vp/image/upload/v1726887543/7_bqkbro.png",
      route: `/profile/${session?.user?.id}`,
    },
    {
      id: 8,
      title: "Contact Us",
      description: "Description for Tile 6",
      imageUrl:
        "https://res.cloudinary.com/dmbxx03vp/image/upload/v1726888499/8_yhis3a.jpg",
      route: "/contact",
    },
  ];

  return (
    <div className="min-h-screen bg-purple-50 flex justify-center items-center p-8">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-screen-xl">
        {tiles.map((tile) => (
          <div
            key={tile.id}
            className="bg-purple-300 shadow-4xl h-50 w-50 cursor-pointer rounded-lg p-4 sm:p-6 text-center hover:bg-purple-400 transition duration-300 group"
          >
            <Link href={tile.route}>
              <div className="w-full aspect-square overflow-hidden mb-1">
                <img
                  src={tile.imageUrl}
                  alt={tile.title}
                  className="object-cover w-full h-full rounded-md transition duration-300"
                />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-pink-600 mb-[-10px] group-hover:text-blue-800">
                {tile.title}
              </h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
