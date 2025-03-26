export default function Form() {
    return (
        <div className="form text-center">
            <div className="mb-3">
                <label for="essay" className="form-label text-center fs-3 text fw-bold "> Write & click when you're finished</label>

                <textarea className="form-control Title_form" id="Title" rows="3" placeholder="Your title"></textarea>

                <textarea className="form-control" id="essay" rows="3" placeholder="Your post"></textarea>

                <button type="button" className="btn btn-light mt-3">Save</button>
            </div>
        </div>
    )
}