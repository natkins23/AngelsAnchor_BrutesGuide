'use client'

import React from 'react'
import { HeartIcon } from '@heroicons/react/24/solid'

const AudioPlayer = ({ src }: { src: string }) => {
    const [isPlaying, setIsPlaying] = React.useState(false)
    const audioRef = React.useRef<HTMLAudioElement>(null)

    const playButton = () => {
        if (audioRef.current) {
            if (isPlaying) {
                handlePause()
            } else {
                handlePlay()
            }
        }
    }
    const handlePlay = () => {
        if (audioRef.current) {
            audioRef.current.play()
            setIsPlaying(!isPlaying)
        }
    }

    const handlePause = () => {
        if (audioRef.current) {
            audioRef.current.pause()
            setIsPlaying(false)
        }
    }

    return (
        <>
            <div
                className="relative cursor-pointer py-5 md:py-12 lg:pb-20 xl:py-20"
                onClick={playButton}
            >
                <HeartIcon
                    className={`${
                        isPlaying && `animate-heartbeat`
                    } absolute heartIcon`}
                ></HeartIcon>
                <HeartIcon className={`heartIcon`}></HeartIcon>
            </div>

            <audio ref={audioRef} src={src} className="absolute hidden" />
        </>
    )
}

export default AudioPlayer
