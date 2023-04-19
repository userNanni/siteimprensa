import Link from 'next/link'
import Image from 'next/image'
import './globals.scss'

async function getNews() {
  const res = await fetch('http://127.0.0.1:8090/api/collections/news/records?page=1&perPage=6', { cache: 'no-store' });
  const data = await res.json();
  return data?.items as any[];
}
async function getLatestNews() {
  const res = await fetch('http://127.0.0.1:8090/api/collections/news/records?page=1&perPage=1', { cache: 'no-store' });
  const data = await res.json();
  return data?.items as any[];
}

export default async function Home() {
  const news = await getNews();
  const latestNews = await getLatestNews();

  return (
    <main>
      <div className='newsContainer'>
        <div className='lastestNew'>
          <div>
            {latestNews?.map((latestnews) => {
              return <Newsf key={latestnews.id} news={latestnews} />;
            })}
          </div>
        </div>
        <div className='newsOther'>
          {news?.map((news) => {
            return <Newsf key={news.id} news={news} />;
          })}
        </div>
      </div>
    </main>
  )
}

function Newsf({ news }: any) {
  const { collectionId, id, title, abstract, image } = news || {};

  return (
    <Link className='subnews' href={`/news/${id}`} >
      <Image src={`http://127.0.0.1:8090/api/files/${collectionId}/${id}/${image}`} alt={title} width={100} height={100} />
      <h2>{title}</h2>
      <h4>{abstract}</h4>
    </Link>
  )
}