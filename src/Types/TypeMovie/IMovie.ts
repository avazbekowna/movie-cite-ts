export interface IMovie {
    id: number
    name: string
    poster_path: string
    title: string
}

export interface IDetail {
    title: string
    id: number
    overview: string
    poster_path: string
    backdrop_path: string
    vote_average: number | any

}

export interface IActors {
    id: number
    profile_path: string
}

export interface ISearch {
    id: number
    name: string
    poster_path: string
    title: string
}

export interface ActorsDetail {
    id: number
    title: string
    name: string
    profile_path: string
    place_of_birth: string
    biography: string
}

export interface IVideo {
    name: string
    key: string
}

export interface IDetailMovie {
    id: number
    name: string
    poster_path: string
    title: string
}
