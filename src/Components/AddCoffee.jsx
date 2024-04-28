import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, photo }
        console.log(newCoffee);

        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: "Good job!",
                        text: "Coffee added successfully",
                        icon: "success"
                    });
                }
            })
    }

    return (
        <div>
            <h2 className="text-3xl">Add Coffee</h2>
            <form onSubmit={handleAddCoffee}>
                <div>
                    <div className="flex gap-3 mb-4">
                        <div className="w-1/2">
                            <label className="input input-bordered flex items-center w-full gap-2">
                                <input name="name" type="text" className="grow" placeholder="Coffee Name" />
                            </label>
                        </div>
                        <div className="w-1/2">
                            <label className="input input-bordered flex items-center w-full gap-2">
                                <input name="quantity" type="text" className="grow" placeholder="Available Quantity" />
                            </label>
                        </div>
                    </div>
                    <div className="flex gap-3 mb-4">
                        <div className="w-1/2">
                            <label className="input input-bordered flex items-center w-full gap-2">
                                <input name="supplier" type="text" className="grow" placeholder="Supplier Name" />
                            </label>
                        </div>
                        <div className="w-1/2">
                            <label className="input input-bordered flex items-center w-full gap-2">
                                <input name="taste" type="text" className="grow" placeholder="Taste" />
                            </label>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="w-1/2">
                            <label className="input input-bordered flex items-center w-full gap-2">
                                <input name="category" type="text" className="grow" placeholder="Category Name" />
                            </label>
                        </div>
                        <div className="w-1/2">
                            <label className="input input-bordered flex items-center w-full gap-2">
                                <input name="details" type="text" className="grow" placeholder="Details" />
                            </label>
                        </div>
                    </div>
                    <div className="w-full mt-4">
                        <label className="input input-bordered flex items-center w-full gap-2">
                            <input name="photo" type="text" className="grow" placeholder="PhotoUrl" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Coffee" className="btn btn-block mt-4" />
            </form>
        </div>
    );
};

export default AddCoffee;