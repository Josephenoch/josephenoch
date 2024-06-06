import React,{useMemo} from 'react'
import Image from 'next/image'
const Playlist = ({playlist}) => {
    const createMarkup = useMemo(() =>{
        
        return{__html:playlist.description!==""?playlist.description:"Created with &hearts; by Joseph Enoch"}
    },[playlist.description])
    return (
    <div className='mb-5 w-[80%] flex bg-primary-light space-x-4 font-mono px-5 py-4 rounded-lg'>
        <div className="min-w-[25%] bg-white">
            <Image src={playlist.images[0].url} alt="Playlist" width="100" height="100"/>
        </div>
        <div className='max-w-[70%]  flex flex-col'>
            <span className='overflow-hidden text-ellipsis whitespace-nowrap'>{playlist.name}</span>
            <pre dangerouslySetInnerHTML={createMarkup} className='overflow-hidden text-ellipsis whitespace-nowrap'></pre >
            <div className="text-[1.1rem] mt-10 flex- space-x-4">
                <i className="cursor-pointer hover:text-white ri-heart-add-line"></i>
                <i className="cursor-pointer hover:text-white ri-play-circle-line"></i>
                <a href={`https://twitter.com/intent/tweet?url=&text=Hey%20there%2C%20I%20just%20found%20an%20awesome%20Spotify%20Playlist%20by%20%40techbrojoe.%0AIt%20is%20titled:%20${playlist.name}%0A%0ACheck%20it%20out%20here%3A%0A${playlist.external_urls.spotify}`} rel='noreferrer' target="_blank"><i className="cursor-pointer hover:text-white ri-share-forward-line"></i></a>
            </div>
        </div>
    </div>
  )
}

export default Playlist