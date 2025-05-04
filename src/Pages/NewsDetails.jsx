import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import RightAside from '../Components/HomeLayout/RightAside';
import NewsDetailsCard from '../Components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {

    const newsData = useLoaderData()
    const {id} = useParams()

    const [news,setNews] = useState({});

    console.log(newsData, id, news);
    
    useEffect(()=>{
        const newsDetails = newsData.find((singleNews)=>singleNews.id==id);
        setNews(newsDetails)
    },[newsData,id])
    return (
        <div className='px-20'>
            <header className='py-3'>
                <Header></Header>
            </header>
            <main className='grid grid-cols-12 gap-20'>
                <section className='col-span-9 space-y-5'>
                    <h2 className='font-bold'>News details</h2>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;