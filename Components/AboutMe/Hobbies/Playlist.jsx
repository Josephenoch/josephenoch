import React,{useMemo} from 'react'
import Image from 'next/image'
const Playlist = ({playlist}) => {
    const createMarkup = useMemo(() =>{
        
        return{__html:playlist.description!==""?playlist.description:"Created with &hearts; by Joseph Enoch"}
    },[playlist.description])
    return (
    <div className='mb-5 w-[80%] flex bg-primary-light space-x-4 font-mono px-5 py-4 rounded-lg'>
        <div className="min-w-[25%]">
            <Image src={playlist.images[0].url} alt="Playlist" width="100" height="100"/>
        </div>
        <div className='max-w-[70%] flex flex-col'>
            <span className='overflow-hidden text-ellipsis whitespace-nowrap'>{playlist.name}</span>
            <pre dangerouslySetInnerHTML={createMarkup} className='overflow-hidden text-ellipsis whitespace-nowrap'></pre >
            <div className="text-[1.1rem] mt-10 flex- space-x-4">
                <i className="cursor-pointer ri-heart-add-line"></i>
                <i className="cursor-pointer ri-play-circle-line"></i>
                <i className="cursor-pointer ri-share-forward-line"></i>
            </div>
        </div>
    </div>
  )
}

export default Playlist