'use client'

import Image from 'next/image'
import AudioPlayer from '@/components/AudioPlayer'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Snowfall from '@/components/Snowfall'
import SantaFlying from '@/components/SantaFlying'

export default function Home() {
    const router = useRouter()

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

'use client'


const photos = [
        '/anna_maria/selfy1.jpg',    
        '/anna_maria/selfy.jpg', 
        '/anna_maria/selfy2.jpg',
        '/anna_maria/flower.jpg',
        '/anna_maria/knees.png',
        '/anna_maria/selfy3.jpg',
        '/anna_maria/elephant.jpg', 
        '/anna_maria/selfy4.jpg',
        '/anna_maria/selfy5.jpg',
        '/anna_maria/flower1.jpg',
        '/anna_maria/selfy6.jpg',
    ]
    

function PhotoCarousel() {
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % photos.length)
        }, 3000) // Change image every 3 seconds
        return () => clearInterval(interval) // Cleanup on unmount
    }, [])

    return (
        <div className="relative w-1/3 h-64 md:h-96 lg:h-[50rem] overflow-hidden-">
            {photos.map((photo, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                        activeIndex === index ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <Image
                        src={photo}
                        alt={`Photo ${index + 1}`}
                        fill
                        style={{ objectFit: 'cover' }}
                        priority={index === activeIndex} // Optimize the visible image
                    />
                </div>
            ))}
        </div>
    )
}


    return (
        <div className="flex flex-col justify-center items-center  px-0 lg:py-10">
            <Snowfall/>
            <SantaFlying/>
            <div className="flex lg:gap-10 h-[20vh] md:h-[30vh] w-screen justify-evenly items-center">
                <div className="animalIcon">
                <Image
                        src="/anna_maria/brute.jpg"
                        alt="lion"
                        fill
                        style={{ objectFit: 'cover' }}
                        className="relative"
                        onClick={() => {
                            hideImages()
                        }}
                      
                    />
                </div>
                <div className="flex flex-col relative items-center justify-center">
                    <h1
                        className=" text-gray-900  relative text-center text-4xl md:text-6xl lg:text-8xl font-bold italic"
                    >
                        <span className="block 2xl:inline">An Angel’s Anchor, A Brute’s Guide</span>{' '}
                    </h1>
                </div>
                <div className=" animalIcon ">
                    <Image
                        src="/anna_maria/angel.png"
                        alt="angel"
                        fill
                        className="relative"
                        onClick={() => {
                            showImages()
                        }}
                     
                    />
                </div>
            </div>
            <PhotoCarousel></PhotoCarousel>
            <AudioPlayer src="nathanAudio.mp3"></AudioPlayer>

            <section className="relative flex flex-col items-center space-y-1 py-2">
            <p>
    He worried and wondered, could he compete, <br />
    In her world of beauty, so pure, with a name oh so sweet? <br />
    “Conservative, Christian, 5’8’’, she seems utterly complete!” <br />
    “Could fate be this bold, or was it deceit?” <br />
</p>
<p>
    It began with a glance, a spark in the dark, <br />
    Two wandering souls with doubts to remark. <br />
    When the night arrived, his heart was unsure, <br />
    But in her presence, her light was undoubtedly his cure. <br />
</p>
<p>
    Before they could dine, he approached with a truce, <br />
    A photo in time would serve as further proof— <br />
    Of a moment neither expected, a memory so rare, <br />
    A tradition began, their spirits laid bare. <br />
</p>
<p>
    Blonde hair like sunlight, eyes aglow with grace, <br />
    A mix of emerald twilight and blue sky’s embrace. <br />
    A quiet angel, both guarded and kind, <br />
    Whose warmth held a promise to free the brute’s mind. <br />
</p>
<p>
    Grasping for meaning in all he’d convey, <br />
    He stumbled on words, his nerves on display. <br />
    “It’s a classical idea,” he’d boldly explain, <br />
    His wit, he had hoped, was enough to entertain. <br />
    Alas, her smile lingered, skeptical yet amused, <br />
    As if charmed by his effort, though slightly bemused. <br />
</p>
<p>
    Yet through his unease, she saw something more, <br />
    A heart full of hope, with courage to explore. <br />
    She softened, and laughed as she saw his longing farewell glance <br />
    Here their story unfolds in an unspoken dance. <br />
</p>
<p>
    To break the icy wall with eager intent,<br />
    He seized the moment with charm and accomplishment meant; <br />
    “We have to go salsa, I know a place!” <br />
    Though, unfortunatelly, finding a spot wasn’t his ace. <br />
    “Cultures that dance are happier!” he’d try to explain, <br />
    But she knew his thoughts lay on a different plane. <br />
</p>
<p>
    From the arcade, the dinners, the walks hand in hand, <br />
    The endless delight of late-night talks unplanned. <br />
    With time they grew, as reflections shone clear, <br />
    Each saw in the other what they held most dear. <br />
</p>
<p>
    But patience and care sowed the love in their deeds, <br />
    He didn’t dare scare off “The One” of his dreams. <br />
    Seventeen dates, he thoroughly teased, <br />
    She quipped with a smile, “Hey there, I’ve got needs.” <br />
</p>
<p>
    Sensing her longing, he taunted a daring disguise, <br />
    “All giants,” he smirked, “bear some truth to their size.” <br />
    She laughed, her emerald eyes gleaming and sly, <br />
    Infatuated by his boldness, and all he very subtly seemed to imply. <br />
</p>
<p>
    Through moments of joy, their connection had grown, <br />
    A bond taking root with a seed that had seemingly been sown. <br />
    A Beauty and Beast, a dream she’d foreseen, <br />
    A tale turned to life, more than mere fantasy. <br />
    For both saw the other as a mirror profound, <br />
    Their love, a reflection of treasures they’d found. <br />
</p>
<p>
    Her beauty, ethereal, like dawn breaking free, <br />
    A light that awoke the man he would soon be. <br />
    Her eyes, a canvas of shifting hues, <br />
    A painting that brings clarity into life’s deepest truths. <br />
    For neither was beast nor each other bound, <br />
    To anyone or anything but each other now. <br />
</p>
<p>
    Her kindness, his harbor, a calm in the sea, <br />
    Her love, a beacon, where hope came to be. <br />
    Guarded yet fierce, her heart weathered the storm,<br />
    Through caring for others, she’d crafted her form. <br />
    To cast aside doubts, to be anchored in love, <br />
    Her strength gave him courage, a guide from above. <br />
</p>
<p>
    With newfound resolve, he held her so tight, <br />
    He cast off his fear, and stood as her knight, <br />
    Her guard melted softly, her sole kissed the night. <br />
    Unveiling her heart, a bond to ignite, <br />
    Together they rose, one love forever in flight. <br />
</p>

</section>

        </div>
    )
}
