export default function User({ id, login, firstName, lastName, email }) {
    return (
        <div className="w-full h-auto flex flex-col justify-center items-center text-[#1C2448] bg-[#F3F5F8]">
            <span className="font-bold text-center mt-5">Login: {login}</span>
            <span className="pt-2 text-center">Imię: {firstName} </span>
            <span className="pt-2 text-center">Nazwisko: {lastName}</span>
            <span className="pt-2 text-center mb-5">Email: {email}</span>
        </div>
    );
}
