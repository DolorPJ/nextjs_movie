import Image from "next/image"

function Hero() {
  return (
    <>
    <div className="hero_image">
    <Image src="/img.png" width={200} height={200} />
    </div>
    <p className="hero_context">WatchMe presents the popular Movie list form 2022.</p>
    </>
  )
}

export default Hero