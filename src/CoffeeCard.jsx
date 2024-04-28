import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

    const { _id, name, quantity, supplier, taste, category, photo } = coffee;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            })
                            const remaining = coffees.filter(cof => cof._id !== _id)
                            setCoffees(remaining)
                        }
                    })
            }
        });
    }

    return (
        <div>
            <div className=" bg-orange-50 flex justify-around shadow-xl">
                <div>
                    <figure><img src={photo} alt="Movie" /></figure>
                </div>
                <div className="my-auto">
                    <h2 className="card-title">Name: {name}</h2>
                    <p>{quantity}</p>
                    <p>{supplier}</p>
                    <p>{taste}</p>
                    <p>{category}</p>
                </div>
                <div className="join join-vertical lg:join-horizontal my-auto">
                    <button className="btn join-item mb-2 btn-accent">View</button>
                    <Link to={`update/${_id}`}><button className="btn join-item mb-2 btn-accent">Edit</button></Link>
                    <button onClick={() => handleDelete(_id)} className="btn join-item mb-2 btn-accent">X</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;