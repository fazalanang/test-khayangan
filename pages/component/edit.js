
function Edit ({ open,onClose }) {
    if (!open) return null
    return (
        <>
        <div class="backgroundContainer" onClick={onClose}>
            <div class="containerRegister">
                <h1>Update</h1>
                <form onClick={open}>
                        <input placeholder="Name" type="text" />
                        <input placeholder="Status" type="password" />
                        <input placeholder="CPU" type="text" />
                        <input placeholder="Memory" type="text" />
                        <input placeholder="Storage" type="password" />
                        <input placeholder="Uptime" type="text" />
                        <input placeholder="Location" type="text" />
                    <div class="button">
                        <button type="submit">SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default Edit