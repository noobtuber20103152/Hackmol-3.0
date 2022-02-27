import React, { useEffect, useState } from 'react'
import ContainerComponent from './ContainerComponent'
const json = [{
    "heading": "Anime Data",
    "no_of_anime": 3,
    "Anime_list": [
        {
            "title": "Attack On Titan Season 4",
            "genre": "Adventure,Action,Dark fantasy,Shounen,Supernatural,Post-apocalyptic",
            "rating": 9.15,
            "poster": "AttackOnTitan.jpg",
            "storyline": "The season introduces Gabi Braun and Falco Grice, young Eldian Warrior candidates seeking to inherit Reiner's Armored Titan four years after the failed mission to reclaim the Founding Titan.",
            "language": "English",
            "quality": "1080p",
            "Episodes": [
                {
                    "Epi_num": 1,
                    "Epi_title": "abdc",
                    "likes": 5,
                    "thumbnail": "AttackOnTitan.jpg",
                    "src": "video.mp4",
                    "desc": "xcnsjbkcskncasjkb"
                },
                {
                    "Epi_num": 2,
                    "Epi_title": "abdc",
                    "likes": 5,
                    "thumbnail": "AttackOnTitan.jpg",
                    "src": "video.mp4",
                    "desc": "xcnsjbkcskncasjkb"
                },
                {
                    "Epi_num": 3,
                    "Epi_title": "abdc",
                    "likes": 5,
                    "thumbnail": "AttackOnTitan.jpg",
                    "src": "video.mp4",
                    "desc": "xcnsjbkcskncasjkb"
                },
                {
                    "Epi_num": 4,
                    "Epi_title": "abdc",
                    "likes": 5,
                    "thumbnail": "AttackOnTitan.jpg",
                    "src": "video.mp4",
                    "desc": "xcnsjbkcskncasjkb"
                },
                {
                    "Epi_num": 5,
                    "Epi_title": "abdc",
                    "likes": 5,
                    "thumbnail": "AttackOnTitan.jpg",
                    "src": "video.mp4",
                    "desc": "xcnsjbkcskncasjkb"
                }
            ]
        },
        {
            "title": "Demon slayer",
            "genre": "Adventure,Action,Dark fantasy,Shounen,Supernatural,Post-apocalyptic",
            "rating": 8.89,
            "poster": "DemonSlayer.jpg",
            "storyline": "Tanjiro And Tengen Fights The Upper moon Six",
            "language": "English",
            "quality": "1080p",
            "Episodes": [
                {
                    "Epi_num": 1,
                    "Epi_title": "abdc",
                    "likes": 5,
                    "thumbnail": "DemonSlayer.jpg",
                    "src": "video.mp4",
                    "desc": "xcnsjbkcskncasjkb"
                },
                {
                    "Epi_num": 2,
                    "Epi_title": "abdc",
                    "likes": 5,
                    "thumbnail": "DemonSlayer.jpg",
                    "src": "video.mp4",
                    "desc": "xcnsjbkcskncasjkb"
                },
                {
                    "Epi_num": 3,
                    "Epi_title": "abdc",
                    "likes": 5,
                    "thumbnail": "DemonSlayer.jpg",
                    "src": "video.mp4",
                    "desc": "xcnsjbkcskncasjkb"
                },
                {
                    "Epi_num": 4,
                    "Epi_title": "abdc",
                    "likes": 5,
                    "thumbnail": "DemonSlayer.jpg",
                    "src": "video.mp4",
                    "desc": "xcnsjbkcskncasjkb"
                },
                {
                    "Epi_num": 5,
                    "Epi_title": "abdc",
                    "likes": 5,
                    "thumbnail": "DemonSlayer.jpg",
                    "src": "video.mp4",
                    "desc": "xcnsjbkcskncasjkb"
                }
            ]
        },
        {
            "title": "DeathNote",
            "genre": "Crime,Adventure,Action,Dark fantasy,Shounen,Supernatural,Post-apocalyptic",
            "rating": 8.44,
            "poster": "DeathNote.jpg",
            "storyline": "about story of anime",
            "language": "English",
            "quality": "1080p",
            "Episodes": [
                {
                    "Epi_num": 1,
                    "Epi_title": "abdc",
                    "likes": 5,
                    "thumbnail": "DeathNote.jpg",
                    "src": "video.mp4",
                    "desc": "xcnsjbkcskncasjkb"
                },
                {
                    "Epi_num": 2,
                    "Epi_title": "abdc",
                    "likes": 5,
                    "thumbnail": "DeathNote.jpg",
                    "src": "video.mp4",
                    "desc": "xcnsjbkcskncasjkb"
                },
                {
                    "Epi_num": 3,
                    "Epi_title": "abdc",
                    "likes": 5,
                    "thumbnail": "DeathNote.jpg",
                    "src": "video.mp4",
                    "desc": "xcnsjbkcskncasjkb"
                },
                {
                    "Epi_num": 4,
                    "Epi_title": "abdc",
                    "likes": 5,
                    "thumbnail": "DeathNote.jpg",
                    "src": "video.mp4",
                    "desc": "xcnsjbkcskncasjkb"
                },
                {
                    "Epi_num": 5,
                    "Epi_title": "abdc",
                    "likes": 5,
                    "thumbnail": "DeathNote.jpg",
                    "src": "video.mp4",
                    "desc": "xcnsjbkcskncasjkb"
                }
            ]
        },
        {
            "title": "CodeGeass",
            "genre": "Crime,Adventure,Action,Dark fantasy,Shounen,Supernatural,Post-apocalyptic",
            "rating": 8.44,
            "poster": "CodeGeass.jpg",
            "storyline": "about story of anime",
            "language": "English",
            "quality": "1080p",
            "Episodes": [
                {
                    "Epi_num": 1,
                    "Epi_title": "abdc",
                    "likes": 5,
                    "thumbnail": "CodeGeass.jpg",
                    "src": "video.mp4",
                    "desc": "xcnsjbkcskncasjkb"
                },
                {
                    "Epi_num": 2,
                    "Epi_title": "abdc",
                    "likes": 5,
                    "thumbnail": "CodeGeass.jpg",
                    "src": "video.mp4",
                    "desc": "xcnsjbkcskncasjkb"
                },
                {
                    "Epi_num": 3,
                    "Epi_title": "abdc",
                    "likes": 5,
                    "thumbnail": "CodeGeass.jpg",
                    "src": "video.mp4",
                    "desc": "xcnsjbkcskncasjkb"
                },
                {
                    "Epi_num": 4,
                    "Epi_title": "abdc",
                    "likes": 5,
                    "thumbnail": "CodeGeass.jpg",
                    "src": "video.mp4",
                    "desc": "xcnsjbkcskncasjkb"
                },
                {
                    "Epi_num": 5,
                    "Epi_title": "abdc",
                    "likes": 5,
                    "thumbnail": "CodeGeass.jpg",
                    "src": "video.mp4",
                    "desc": "xcnsjbkcskncasjkb"
                }
            ]
        },
        {
            "title": "FairyTail",
            "genre": "Adventure,Action,Dark fantasy,Shounen,Supernatural,Post-apocalyptic",
            "rating": 8.44,
            "poster": "FairyTail.png",
            "storyline": "about story of anime",
            "language": "English",
            "quality": "1080p",
            "Episodes": [
                {
                    "Epi_num": 1,
                    "Epi_title": "abdc",
                    "likes": 5,
                    "thumbnail": "FairyTail.jpg",
                    "src": "video.mp4",
                    "desc": "xcnsjbkcskncasjkb"
                },
                {
                    "Epi_num": 2,
                    "Epi_title": "abdc",
                    "likes": 5,
                    "thumbnail": "FairyTail.jpg",
                    "src": "video.mp4",
                    "desc": "xcnsjbkcskncasjkb"
                },
                {
                    "Epi_num": 3,
                    "Epi_title": "abdc",
                    "likes": 5,
                    "thumbnail": "FairyTail.jpg",
                    "src": "video.mp4",
                    "desc": "xcnsjbkcskncasjkb"
                },
                {
                    "Epi_num": 4,
                    "Epi_title": "abdc",
                    "likes": 5,
                    "thumbnail": "FairyTail.jpg",
                    "src": "video.mp4",
                    "desc": "xcnsjbkcskncasjkb"
                },
                {
                    "Epi_num": 5,
                    "Epi_title": "abdc",
                    "likes": 5,
                    "thumbnail": "FairyTail.jpg",
                    "src": "video.mp4",
                    "desc": "xcnsjbkcskncasjkb"
                }
            ]
        },
        {
            "title": "Naruto",
            "genre": "Adventure,Action,Dark fantasy,Shounen,Supernatural,Post-apocalyptic",
            "rating": 8.44,
            "poster": "Naruto.jpg",
            "storyline": "about story of anime",
            "language": "English",
            "quality": "1080p",
            "Episodes": [
                {
                    "Epi_num": 1,
                    "Epi_title": "abdc",
                    "likes": 5,
                    "thumbnail": "Naruto.jpg",
                    "src": "video.mp4",
                    "desc": "xcnsjbkcskncasjkb"
                },
                {
                    "Epi_num": 2,
                    "Epi_title": "abdc",
                    "likes": 5,
                    "thumbnail": "Naruto.jpg",
                    "src": "video.mp4",
                    "desc": "xcnsjbkcskncasjkb"
                },
                {
                    "Epi_num": 3,
                    "Epi_title": "abdc",
                    "likes": 5,
                    "thumbnail": "Naruto.jpg",
                    "src": "video.mp4",
                    "desc": "xcnsjbkcskncasjkb"
                },
                {
                    "Epi_num": 4,
                    "Epi_title": "abdc",
                    "likes": 5,
                    "thumbnail": "Naruto.jpg",
                    "src": "video.mp4",
                    "desc": "xcnsjbkcskncasjkb"
                },
                {
                    "Epi_num": 5,
                    "Epi_title": "abdc",
                    "likes": 5,
                    "thumbnail": "Naruto.jpg",
                    "src": "video.mp4",
                    "desc": "xcnsjbkcskncasjkb"
                }
            ]
        },
        {
            "title": "VinlandSaga",
            "genre": "Crime,Adventure,Action,Dark fantasy,Shounen,Supernatural,Post-apocalyptic",
            "rating": 8.44,
            "poster": "vinland_saga.jpg",
            "storyline": "about story of anime",
            "language": "English",
            "quality": "1080p",
            "Episodes": [
                {
                    "Epi_num": 1,
                    "Epi_title": "abdc",
                    "likes": 5,
                    "thumbnail": "vinland_saga.jpg",
                    "src": "video.mp4",
                    "desc": "xcnsjbkcskncasjkb"
                },
                {
                    "Epi_num": 2,
                    "Epi_title": "abdc",
                    "likes": 5,
                    "thumbnail": "vinland_saga.jpg",
                    "src": "video.mp4",
                    "desc": "xcnsjbkcskncasjkb"
                },
                {
                    "Epi_num": 3,
                    "Epi_title": "abdc",
                    "likes": 5,
                    "thumbnail": "vinland_saga.jpg",
                    "src": "video.mp4",
                    "desc": "xcnsjbkcskncasjkb"
                },
                {
                    "Epi_num": 4,
                    "Epi_title": "abdc",
                    "likes": 5,
                    "thumbnail": "vinland_saga.jpg",
                    "src": "video.mp4",
                    "desc": "xcnsjbkcskncasjkb"
                },
                {
                    "Epi_num": 5,
                    "Epi_title": "abdc",
                    "likes": 5,
                    "thumbnail": "vinland_saga.jpg",
                    "src": "video.mp4",
                    "desc": "xcnsjbkcskncasjkb"
                }
            ]
        },
        {
            "title": "One Punch Man",
            "genre": "Adventure,Action,Dark fantasy,Shounen,Supernatural,Post-apocalyptic",
            "rating": 8.44,
            "poster": "onepunchman.jpg",
            "storyline": "about story of anime",
            "language": "English",
            "quality": "1080p",
            "Episodes": [
                {
                    "Epi_num": 1,
                    "Epi_title": "abdc",
                    "likes": 5,
                    "thumbnail": "onepunchman.jpg",
                    "src": "video.mp4",
                    "desc": "xcnsjbkcskncasjkb"
                },
                {
                    "Epi_num": 2,
                    "Epi_title": "abdc",
                    "likes": 5,
                    "thumbnail": "onepunchman.jpg",
                    "src": "video.mp4",
                    "desc": "xcnsjbkcskncasjkb"
                },
                {
                    "Epi_num": 3,
                    "Epi_title": "abdc",
                    "likes": 5,
                    "thumbnail": "onepunchman.jpg",
                    "src": "video.mp4",
                    "desc": "xcnsjbkcskncasjkb"
                },
                {
                    "Epi_num": 4,
                    "Epi_title": "abdc",
                    "likes": 5,
                    "thumbnail": "onepunchman.jpg",
                    "src": "video.mp4",
                    "desc": "xcnsjbkcskncasjkb"
                },
                {
                    "Epi_num": 5,
                    "Epi_title": "abdc",
                    "likes": 5,
                    "thumbnail": "onepunchman.jpg",
                    "src": "video.mp4",
                    "desc": "xcnsjbkcskncasjkb"
                }
            ]
        },
        {
            "title": "One Piece",
            "genre": "Adventure,Action,Dark fantasy,Shounen,Supernatural,Post-apocalyptic",
            "rating": 8.44,
            "poster": "OnePiece.jpg",
            "storyline": "about story of anime",
            "language": "English",
            "quality": "1080p",
            "Episodes": [
                {
                    "Epi_num": 1,
                    "Epi_title": "abdc",
                    "likes": 5,
                    "thumbnail": "OnePiece.jpg",
                    "src": "video.mp4",
                    "desc": "xcnsjbkcskncasjkb"
                },
                {
                    "Epi_num": 2,
                    "Epi_title": "abdc",
                    "likes": 5,
                    "thumbnail": "OnePiece.jpg",
                    "src": "video.mp4",
                    "desc": "xcnsjbkcskncasjkb"
                },
                {
                    "Epi_num": 3,
                    "Epi_title": "abdc",
                    "likes": 5,
                    "thumbnail": "OnePiece.jpg",
                    "src": "video.mp4",
                    "desc": "xcnsjbkcskncasjkb"
                },
                {
                    "Epi_num": 4,
                    "Epi_title": "abdc",
                    "likes": 5,
                    "thumbnail": "OnePiece.jpg",
                    "src": "video.mp4",
                    "desc": "xcnsjbkcskncasjkb"
                },
                {
                    "Epi_num": 5,
                    "Epi_title": "abdc",
                    "likes": 5,
                    "thumbnail": "OnePiece.jpg",
                    "src": "video.mp4",
                    "desc": "xcnsjbkcskncasjkb"
                }
            ]
        }
    ]
}
]
export default function Container(props) {
    const [data, setdata] = useState(json[0]['Anime_list'])
    console.log(data)
    return (
        <>
            <div class="container">
                <div class="content-container">
                    <div class="featured-content">
                        <img class="featured-title" src="https://wallpapercave.com/wp/wp3375656.jpg" alt="" />
                        <p class="featured-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto illo dolor
                            deserunt nam assumenda ipsa eligendi dolore, ipsum id fugiat quo enim impedit, laboriosam omnis
                            minima voluptatibus incidunt. Accusamus, provident.</p>
                        <button class="featured-button">WATCH</button>
                    </div>
                    <div class="movie-list-container">
                        <h1 class="movie-list-title" style={{marginTop: "4px"}}>Live</h1>
                        <div class="movie-list-wrapper">
                            <div class="movie-list">
                                <ContainerComponent img="https://www.comingsoon.net/assets/uploads/2021/09/OnePiece-Kaido_KV_Original-1024x722.jpeg" title="One Piece" link="http://localhost:8000?src=One Piece"  />
                            </div>
                            <i class="fas fa-chevron-right arrow"></i>
                        </div>
                    </div>
                    <div class="movie-list-container">
                        <h1 class="movie-list-title">Latest release</h1>
                        <div class="movie-list-wrapper">
                            <div class="movie-list">
                              {data.map((e)=>{
                                  return <ContainerComponent title={e.title} img={`./images/${e.poster}`} link ={`http://localhost:4000?src=${e.title}`} />
                              })}
                            </div>
                            <i class="fas fa-chevron-right arrow"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
