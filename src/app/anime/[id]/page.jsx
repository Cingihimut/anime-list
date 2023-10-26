import { getAnimeResponse } from "@/app/libs/apiLibs";
import VideoPlayer from "@/components/Utilities/videoPlayer";
import Image from "next/image";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  return (
    <>
      <div className="pt-4 px-4">
        <h2 className="text-2xl text-color-primary">
          {anime.data.title} - {anime.data.year}
        </h2>
      </div>
      <div className="pt-4 px-4 flex gap-4 text-color-primary overflow-x-auto">
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-pimary p-2">
          <h2>Rating</h2>
          <p>{anime.data.score}/10⭐</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-pimary p-2">
          <h2>Peringkat</h2>
          <p>{anime.data.rank}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-pimary p-2">
          <h2>Popularity</h2>
          <p>{anime.data.popularity}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-pimary p-2">
          <h2>Favorite</h2>
          <p>{anime.data.favorites}❤</p>
        </div>
      </div>
      <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-primary">
        <Image
          src={anime.data.images.webp.image_url}
          alt={anime.data.images.jpg.image_url}
          width={250}
          height={250}
          className="w-full rounded object-cover"
        />
        <p className="text-justify text-xl">{anime.data.synopsis}</p>
      </div>
      <div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id}/>
      </div>

    </>
  );
};

export default Page;
