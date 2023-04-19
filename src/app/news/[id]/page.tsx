import '../../globals.scss'
import Image from 'next/image';

async function getNews(newsId: string) {
    const res = await fetch(
        `http://127.0.0.1:8090/api/collections/news/records/${newsId}`
        , {
            next: { revalidate: 10 }
        }
    );
    const data = await res.json();
    return data;
}

export default async function NewsPage({ params }: any) {
    const news = await getNews(params.id)
    return (
        <div className='newsPage'>
            <Image src={`http://127.0.0.1:8090/api/files/${news.collectionId}/${news.id}/${news.image}`} alt={news.title} width={100} height={100} />
            <div className='text'>
                <h2>{news.title}</h2>
                <div className="lineText"></div>
                <h5>{news.abstract}</h5>
                <div className="lineText"></div>
                <div className="html">
                    <html dangerouslySetInnerHTML={{ __html: news.text }} />
                </div>
            </div>
        </div>
    );
}