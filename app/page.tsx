'use client'

import Image from 'next/image'
import AudioPlayer from '@/components/AudioPlayer'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Home() {
    const router = useRouter()
    const [keypadValue, setKeypadValue] = useState('')
    const [passcode, setPasscode] = useState(0)

    const hideImages = () => {
        const images = document.querySelectorAll('.artsy')
        if (images[0].classList.contains('hidden')) {
            images.forEach((image) => {
                image.classList.toggle('hidden')
            })
        }
    }
    const showImages = () => {
        const images = document.querySelectorAll('.artsy')
        if (!images[0].classList.contains('hidden')) {
            images.forEach((image) => {
                image.classList.toggle('hidden')
            })
        }
    }

    function addKeypadValue(value: number) {
        setKeypadValue((prevValue) => prevValue + value.toString())
    }

    useEffect(() => {
        console.log(keypadValue)
        setPasscode(
            Math.floor(
                (new Date().getTime() - new Date('2022-09-25').getTime()) /
                    (1000 * 60 * 60 * 24)
            )
        )
        if (keypadValue.length === passcode.toString().length) {
            if (keypadValue === passcode.toString()) {
                // Redirect to the target page
                router.push('/honor')
            } else {
                console.log(passcode)
                // Clear the keypad value and display an error message
                setKeypadValue('')
                alert(
                    'Already forgot the days that go by? Try again my love...'
                )
            }
        }
    }, [keypadValue, passcode, router])

    return (
        <div className="flex flex-col justify-center items-center  px-0 lg:py-10">
            <div className="flex lg:gap-10 h-[20vh] md:h-[30vh] w-screen justify-evenly items-center">
                <div className="animalIcon">
                    <Image
                        src="/lion.png"
                        alt="lion"
                        fill
                        style={{ objectFit: 'cover' }}
                        className="relative"
                        onClick={() => {
                            hideImages()
                        }}
                        title="ROAR!"
                    />
                </div>
                <div className="flex flex-col relative items-center justify-center">
                    <h1
                        className=" text-gray-900  relative text-center text-4xl md:text-6xl lg:text-8xl font-bold italic  "
                        title="I'll always keep track of the days the gone by!"
                    >
                        <span className="block 2xl:inline">Predator</span>{' '}
                        <span className="block 2xl:inline">&</span>
                        <span className="block 2xl:inline">{` `}Prey</span>
                    </h1>
                </div>
                <div className=" animalIcon ">
                    <Image
                        src="/sheep.png"
                        alt="sheep"
                        fill
                        className="relative"
                        onClick={() => {
                            showImages()
                        }}
                        title="BAAA!"
                    />
                </div>
            </div>

            <AudioPlayer src="prey.mp3"></AudioPlayer>

            <section className="relative flex flex-col items-center space-y-1 py-2">
                <div className="artsy  hidden">
                    <Image
                        className="absolute"
                        src="/chess.png"
                        alt="chess"
                        fill
                        style={{ objectFit: 'contain' }}
                        onClick={() => {
                            addKeypadValue(0)
                        }}
                    />
                </div>
                <p className="">
                    It began with a game, all just in good fun, <br />
                    Who knew that a heart could so quickly succumb, indeed a new
                    love had begun! <br />
                    With each roll of the dice, every robber&apos;s move, <br />
                    You took hold of my heart, I had everything to prove!
                </p>
                <div className="artsy hidden">
                    <Image
                        className="absolute "
                        src="/gentleman2.png"
                        alt="gentleman2"
                        fill
                        onClick={() => {
                            addKeypadValue(1)
                        }}
                    />
                </div>
                <p>
                    Lion and lamb, predator and prey, <br />
                    Such love seems impossible in every way, <br />
                    The Lion, he roars, his pride and courage supreme, <br />
                    Little did he know, his appearance seemed extreme.
                </p>
                <div className="artsy hidden">
                    <Image
                        className="absolute "
                        src="/scary.png"
                        alt="scary"
                        fill
                        onClick={() => {
                            addKeypadValue(2)
                        }}
                    />
                </div>

                <p>
                    The lamb, so gentle, seeks true love divine, <br />
                    At first, she saw flaws, she couldn&apos;t untwine <br />
                    His teeth were too sharp! His roar was too loud! <br />
                    She didn&apos;t even care that he was well endowed...
                </p>
                <div className="artsy  hidden">
                    <Image
                        className="absolute "
                        src="/nudge.png"
                        alt="nudge"
                        fill
                        onClick={() => {
                            addKeypadValue(3)
                        }}
                    />
                </div>

                <p>
                    But soon time went by, her perspective did shift, <br />
                    She realized his strength was a gift to uplift. <br />
                    His courage was freedom, they could do so much more, <br />
                    His love was a door, waiting to be opened with treasure in
                    store!
                </p>
                <div className="artsy hidden ">
                    <Image
                        className="absolute "
                        src="/king.png"
                        alt="king"
                        fill
                        onClick={() => {
                            addKeypadValue(4)
                        }}
                    />
                </div>
                <p>
                    With her heart opened wide, a warmth filled her soul, <br />
                    Her kindness the catalyst, her light he extolled. <br />
                    She couldn&apos;t resist, for she had finally found, <br />
                    The one she truly missed, her heart beat such a resounding
                    sound!
                </p>
                <div className="artsy hidden">
                    <Image
                        className="absolute "
                        src="/sitting.png"
                        alt="lion"
                        fill
                        onClick={() => {
                            addKeypadValue(5)
                        }}
                    />
                </div>
                <p>
                    The lion, once fierce, now purrs with her touch, <br />
                    Her love was his cure, grateful he was, for so much! <br />
                </p>
                <div className="artsy  hidden">
                    <Image
                        className="absolute  "
                        src="/toys.png"
                        alt="toys"
                        fill
                        onClick={() => {
                            addKeypadValue(6)
                        }}
                    />
                </div>
                <p>
                    Was He still a hunter, She still his prey? <br />
                    No! A bond formed by love, stronger than any force at play.
                </p>
                <div className="artsy hidden">
                    <Image
                        className="absolute "
                        src="/watercolor.png"
                        alt="watercolor"
                        fill
                        onClick={() => {
                            addKeypadValue(7)
                        }}
                    />
                </div>
                <p>
                    Their steps in perfect rhythm, a dance of love, <br />
                    The lion leaps forward, four left paws from above, <br />
                    The lamb, carefree and graceful, prances with ease, <br />A
                    reminder that love knows no bounds and can conquer all
                    beasts.
                </p>
                <div className="artsy hidden">
                    <Image
                        className="absolute "
                        src="/dance.png"
                        alt="dance"
                        fill
                        onClick={() => {
                            addKeypadValue(8)
                        }}
                    />
                </div>
                <p>
                    A lion and a lamb, forever in chase <br />
                    No longer predator, no longer prey, <br />
                    Together they roamed, in an endless embrace.
                </p>
                <div className="artsy hidden">
                    <video
                        className="absolute  "
                        autoPlay
                        muted
                        width="auto"
                        height="auto"
                        loop
                        onClick={() => {
                            addKeypadValue(9)
                        }}
                    >
                        <source src="running.mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>
        </div>
    )
}
