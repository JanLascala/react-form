export default function Form() {
    return (
        <div className="form text-center">
            <div class="mb-3">
                <label for="essay" className="form-label text-center fs-3 text fw-bold "> Write & click when you're finished</label>
                <textarea class="form-control" id="essay" rows="3"></textarea>

                <button type="button" class="btn btn-light mt-3">Save</button>
            </div>
        </div>
    )
}