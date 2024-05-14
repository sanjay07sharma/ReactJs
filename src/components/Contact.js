const Contact = () => {
    return (
        <div className="p-12 flex justify-between heading">
            <h1 className="m-4 p-4 font-bold size-5">Contact</h1>
            <input type="text" placeholder="Enter your name" className="border border-black m-4, p-4 rounded-md"/>
            <input type="email" placeholder="Enter your email" className="border border-black m-4, p-4 rounded-md"/>
            <input  type="text" placeholder="Enter your message" className="border border-black m-4, p-4 rounded-md"/>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
        </div>
    );
}

export default Contact;
