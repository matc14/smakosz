'use client'
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
function Opinion({ id, firstName, lastName, content, date }) {
    return (
        <div className="flex flex-col lg:w-[600px] w-auto justify-center pb-8">
            <span className="mb-4 w-full text-[#324A6D]">{content}</span>
            <div className="flex flex-row items-center justify-between ">
                <span className="font-bold text-sm">{firstName + " " + lastName}</span>
                <span className="text-sm ">{date}</span>
            </div>
        </div>
    )
}



export default function Opinions() {

    const { data: session, status } = useSession();
    const router = useRouter()
    const [editing, setEditing] = useState(false);
    const [content, setContent] = useState('');

    async function add() {

        await fetch('/api/opinions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content })
        })
        reset()
        fetchOpinions()
        router.refresh()
    }

    const handleAdd = () => {
        setEditing(true);

    };

    const handleSave = () => {
        add();
        setEditing(false);
    };

    const handleCancel = () => {
        setEditing(false);
        reset();
    };

    const reset = () => {
        setContent('');
    };

    const [opinions, setOpinions] = useState([]);
    async function fetchOpinions() {
        const response = await fetch('/api/opinions');
        const data = await response.json();
        setOpinions(data);
      }
    useEffect(() => {
      
  
      fetchOpinions();
    }, []);

    return (
        <section className="flex flex-col items-center justify-center">
            <div className="w-5/6 flex xl:flex-row flex-col h-auto justify-center items-center pb-20">
                <img className="hidden xl:block items-center justify-center xl:w-auto w-full h-auto mx-auto lg:mb-0 mb-8 mr-4" src="img/home-opinions.png" />
                <div className="flex flex-col mx-auto items-center">
                    {editing ? (
                        <div className="flex flex-col mx-auto items-center">
                            <span className="mb-4 text-6xl font-bold text-[#1C2448] pb-4 text-center">Zostaw opinię</span>
                            <form className="flex flex-col justify-center items-center">
                                <textarea
                                    defaultValue={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    className="rounded-lg resize-none mb-6 lg:w-[600px] w-[300px] md:h-48 h-32" />
                                <div className="flex flex-row items-center justify-center">
                                    <button onClick={handleSave} className="rounded-full bg-[#1e6e36] hover:bg-[#195f2e] border-none text-[#fff8f0] py-2 w-20 mr-4">Wyślij</button>
                                    <button onClick={handleCancel} className="rounded-full bg-[#f74646] border-none hover:bg-[#ec4242] text-[#fff8f0] py-2 w-20 ml-4">Anuluj</button>
                                </div>
                            </form>
                        </div>
                    ) : (
                        <div className="flex flex-col mx-auto items-center">
                            <span className="mb-4 text-6xl font-bold text-[#1C2448] pb-4 text-center">Opinie klientów</span>
                            {opinions.map(opinion => (
                                <Opinion key={opinion.id}
                                    content={opinion.content}
                                    firstName={opinion.author.firstName}
                                    lastName={opinion.author.lastName}
                                    date={opinion.createdAt.substring(0, 10)}
                                />
                            ))}
                            {session ? 
                            (<button onClick={handleAdd} className="rounded-full bg-[#467FF7] text-[#fff8f0] hover:bg-[#4675f7] py-2 w-48">Zostaw opinię</button>) : (
                                <></>)}
                        </div>
                    )}
                </div>
            </div>

        </section>
    );
}
