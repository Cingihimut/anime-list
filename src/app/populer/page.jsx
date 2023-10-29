"use client"

import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import { useEffect, useState } from "react";
import { getAnimeResponse } from "@/libs/apiLibs";

const Page = () => {

    const [page, setPage] = useState(1);
    const [topAnime, setTopAnime] = useState([]);

    const fetchData = async() => {
        const populerAnime = await getAnimeResponse("top/anime", `page=${page}`);
          setTopAnime(populerAnime);
    }

    useEffect(() => {
        fetchData();
    }, [page])

    return(
        <>
        <HeaderMenu title={`Anime Terpopuler #${page}`}/>
        <AnimeList api={topAnime}/>
        <Pagination page={page} lastPage={topAnime.pagination?.last_visible_page} setPage={setPage}/>
        </>
    )
}

export default Page;