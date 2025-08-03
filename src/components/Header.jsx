import { useRef, useState } from "react"
import imgOne from "../assets/imgOne.png"

function Header() {

    const [isopen, setIsopne] = useState(false)

    // Inputs
    const [title, setTitle] = useState("")
    const [image, setImage] = useState(null)

    // Post
    const [post, setPost] = useState([])

    const ImgeRef = useRef()

    function HandlePost(e) {
        const newPost = { title, image }

        if (title != "" && image != "") {
            setPost([...post, newPost])
            setTitle("")
            ImgeRef.current.value = null
        }

        e.preventDefault()
        HandleClose()
    }


    function HandleIsopen() {
        document.body.style.backgroundColor = 'grey'
        setIsopne(true)
    }
    function HandleClose(e) {
        document.body.style.backgroundColor = 'white'
        setIsopne(false)
        e.preventDefault()
    }

    return (
        <>
            <div className="flex justify-between bg-blue-500 px-10 py-4">
                <h1 className="text-4xl text-white ">Small App</h1>
                <button onClick={HandleIsopen} className="bg-white px-10 py-2 rounded-[4px] text-blue-500">Create Post</button>
            </div>


            {/* Form */}
            <div style={{
                display: isopen === true ? "flex" : "none"
            }} className="flex justify-center items-center h-screen">
                <form

                    className="bg-blue-500 w-[600px] h-[400px] p-10 ">
                    <input value={title} onChange={(e) => setTitle(e.target.value)} className="w-80 h-10 rounded-lg pl-2" type="text" placeholder="Enter Title" /> <br /> <br />
                    <input ref={ImgeRef} onChange={(e) => setImage(e.target.files[0])} className="file:bg-yellow-500 file:w-40 file:h-10 file:rounded-lg file:border-none " type="file" /> <br /><br />

                    <button onClick={HandleClose} className="bg-white px-12 py-2 rounded-lg ">Cancel</button>
                    <button onClick={HandlePost} className="bg-white px-12 py-2 rounded-lg ml-10">Save</button>
                </form>
            </div>


            <div style={{ display: isopen === true ? "none" : "block" }} className="flex">

                {
                    post.map((item) => {
                        return <div className="border-2 border-black rounded-lg  mt-20 w-80 h-96 " >
                            <img className="w-full h-[190px]" src={URL.createObjectURL(item.image)} alt="" />
                            <h1 className="text-2xl mt-10 font-semibold text-center">{item.title}</h1>
                        </div >
                    })
                }

            </div>



        </>
    )
}

export default Header