import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "../libs/api-Libs";
import Particles from "@/components/Design";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  let recomendedAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  recomendedAnime = reproduce(recomendedAnime, 4);

  return (
    <>
    <div className="absolute w-full h-full object-cover z-20">

      {/* Anime Paling Populer */}
      <section>
        <Header
          title="Paling populer"
          linkTitle="Lihat Semua"
          linkHref="/populer"
          />
        <AnimeList api={topAnime} />
      </section>
      
      {/* Anime Rekomendasi */}
      <div>
      <section>
        <Header title="Recommendations" />
        <AnimeList api={recomendedAnime} />
      </section>
      </div>

      </div>
      <div className="">
        <Particles/>
      </div>
    </>
  );
};
export default Page;
