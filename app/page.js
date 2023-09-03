import Posts from '@/Components/Posts'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <Posts />
          </div>
        </div>
      </section>
    </>
  )
}
