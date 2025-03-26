import { useState } from "react"

export default function Form() {
    //title
    const [title, setTitle] = useState('')
    const handleTitle = (e) => setTitle(e.target.value)
    //post
    const [post, setPost] = useState('')
    const handlePost = (e) => setPost(e.target.value)
    //submit
    function handleSubmit(e) {
        e.preventDefault()
        console.log(title, post)


    }


    return (
        <> <div className="form text-center">
            <div className="mb-3">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="essay" className="form-label text-center fs-3 text fw-bold "> Write & click when you're finished</label>

                    <textarea className="form-control Title_form" id="Title" rows="3" placeholder="Your title"
                        value={title} onChange={handleTitle}>

                    </textarea>


                    <textarea className="form-control" id="essay" rows="3" placeholder="Your post"
                        value={post} onChange={handlePost}>


                    </textarea>

                    <button type="submit" className="btn btn-light mt-3">Save</button>
                </form>
            </div>

        </div >
            <div className="card">
                <div className="card-body">

                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{post}</p>
                </div>
            </div>
        </>

    )
}