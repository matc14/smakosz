'use client'
import { Button } from "flowbite-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import DeleteDish from "./DeleteDish";

export default function EditDish({ id, imageSrc, nameC, priceC }) {

    const [image, setImage] = useState(imageSrc);
    const [name, setName] = useState(nameC);
    const [price, setPrice] = useState(priceC);
    const [editing, setEditing] = useState(false);

    const router = useRouter()

    async function handleClick() {

        try {
            await fetch(`/api/dish/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ image, name, price })
            })
            router.refresh()
        } catch (e) {
            console.error(e)
        }
    }


    const reset = () => {
        setImage(imageSrc);
        setName(nameC);
        setPrice(priceC);
    };

    const handleEdit = () => {
        setEditing(true);
    };

    const handleSave = () => {
        setEditing(false);
        handleClick();

    };

    const handleCancel = () => {
        setEditing(false);
        reset();
    };
    return (
        <form>
            <div className="w-full h-auto flex flex-col justify-center items-center text-[#1C2448] bg-[#F3F5F8]">
                {editing ? (
                    <img src={image} className="w-[400px] h-[300px]" />
                ) : (
                    <img src={imageSrc} className="w-[400px] h-[300px]" />)}

                {editing ? (
                    <span className="pt-4 font-bold text-[#1C2448] text-center">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Nazwa"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="rounded-full text-center text-[#1C2448] p-0 h-5"
                            maxLength="50">
                        </input>
                    </span>
                ) : (<span className="pt-4 font-bold text-center text-[#1C2448]">{name}</span>

                )}
                {editing ? (
                    <span className="mr-2 text-[#324A6D] mb-2 text-center p-1.5"><input
                        type="text"
                        id="price"
                        name="price"
                        placeholder="0.00"
                        required
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-16 h-5 rounded-full text-[#324A6D] text-center p-0"
                        maxLength="5">
                    </input> zł</span>) : (
                    <span className="mr-2 text-[#324A6D] mb-2 text-center p-1.5">{price + " zł"}</span>
                )}
                {editing ? (
                    <input
                        type="text"
                        id="image"
                        name="image"
                        placeholder="img/plik.png"
                        required
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        className="xl:w-72 w-48 h-9 text-[#324A6D] mt-0 mb-4 focus:ring-0 text-center text-base rounded-full p-1.5">
                    </input>
                ) : (
                    <Button onClick={handleEdit} className="xl:w-72 w-48  text-[#fff] font-bold bg-[#467FF7] hover:bg-[#4675f7] mb-4 border-none focus:ring-0 rounded-full">Edytuj</Button>
                )}
                {editing ? (
                    <div className="flex flex-row items-center justify-center">
                        <Button onClick={handleSave} className="mx-auto xl:w-32 w-20 mr-4 text-[#fff] font-bold bg-[#1e6e36] hover:bg-[#195f2e] mb-4 border-none focus:ring-0 rounded-full ">Zapisz</Button>
                        <Button onClick={handleCancel} className="mx-auto xl:w-32 w-20 ml-4 text-[#fff] font-bold mb-4 bg-[#f74646] border-none hover:bg-[#ec4242] focus:ring-0 rounded-full">Anuluj</Button>

                    </div>
                ) : (
                    <DeleteDish id={id} />
                )}

            </div>
        </form >
    );
}