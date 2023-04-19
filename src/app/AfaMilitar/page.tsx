import Link from 'next/link'
import Image from 'next/image'
import '../globals.scss'


async function getNews() {
    const res = await fetch('http://127.0.0.1:8090/api/collections/news/records?page=1&perPage=6', { cache: 'no-store' });
    const data = await res.json();
    return data?.items as any[];
}

export default async function AfaMilitar() {
    const news = await getNews();

    return (
        <div className='allNewsContainer'>
            {news?.map((news) => {
                return <Newsf key={news.id} news={news} />;
            })}
        </div>
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