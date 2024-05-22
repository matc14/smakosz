import DeleteUser from "./DeleteUser";

export default function User({ id, login, firstName, lastName, email }) {
    return (
        <div className="w-full h-auto flex flex-col justify-center items-center text-[#1C2448] bg-[#F3F5F8]">
            <span className="font-bold text-center">Login: {login}</span>
            <span className="pt-2 text-center">Imię: {firstName} </span>
            <span className="pt-2 text-center">Nazwisko: {lastName}</span>
            <span className="pt-2 text-center">Email: {email}</span>
            <DeleteUser id={id} />
        </div>
    );
}
