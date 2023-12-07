import { getAnimeResponse } from "@/libs/api-Libs";
import VideoPlayer from "@/components/Utilities/videoPlayer";
import Image from "next/image";
import CollectionButton from "@/components/AnimeList/ColletctionButton";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import CommentInput from "@/components/AnimeList/CommentInput";
import CommentBox from "@/components/AnimeList/CommentBox";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  const user = await authUserSession()

  const collection = await prisma.collection.findFirst({
    where: { user_email: user?.email, anime_mal_id: id }
  })

  return (
    <>
      <div className="pt-4 px-4">
        <h2 className="text-2xl text-color-primary">
          {anime.data.title} - {anime.data.year}
        </h2>
        {
          !collection && user &&
          <CollectionButton
            anime_mal_id={id}
            user_email={user?.email}
            anime_image={anime.data.images.webp.image_url}
            anime_title={anime.data.title}
          />
        }
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
      <div className="p-4">
        <h1 className="text-color-primary mb-2">Komentar penonton</h1>
        <CommentBox anime_mal_id={id}/>
        { user && <CommentInput 
          anime_mal_id={id}
          user_email={user?.email}
          username={user?.name}
          anime_title={anime.data.title}
          />
        }
      </div>
      <div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>

    </>
  );
};

export default Page;
