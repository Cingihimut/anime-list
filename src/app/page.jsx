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
      <section>
        <Header title="Recommendations" />
        <AnimeList api={recomendedAnime} />
      </section>
      <Particles/>
    </>
  );
};
export default Page;
