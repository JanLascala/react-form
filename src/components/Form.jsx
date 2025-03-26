import { useState } from "react"

export default function Form() {
    const [title, setTitle] = useState()
    const handleTitle = (e) => setTitle(e.target.value)
    const [post, setPost] = useState()
    const handlePost = (e) => setPost(e.targe.value)

    return (
        <div className="form text-center">
            <div className="mb-3">
                <label htmlFor="essay" className="form-label text-center fs-3 text fw-bold "> Write & click when you're finished</label>

                <textarea className="form-control Title_form" id="Title" rows="3" placeholder="Your title"
                    value={title} onChange={handleTitle}>

                </textarea>


                <textarea className="form-control" id="essay" rows="3" placeholder="Your post"
                    value={post} onChange={handlePost}>


                </textarea>

                <button type="button" className="btn btn-light mt-3">Save</button>
            </div>
        </div>
    )
}