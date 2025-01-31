import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Footer from "../Shared/Footer/Footer";
import BookingsRow from "./BookingsRow";
import axios from "axios";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setbookings] = useState([]);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    axios.get(url,{withCredentials:true})
    .then(res => {
      setbookings(res.data);
    })
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setbookings(data));
  }, [url]);
  const handleDelete = (id) => {
    const proceed = "are you sure";
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remaining = bookings.filter((booking) => booking._id !== id);
            setbookings(remaining);
          }
          // update the bookings state here
        });
    }
  };

  const handleConfrim = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          //upate status
          const remaining = bookings.filter((booking) => booking._id !== id);
          const updated = bookings.find((booking) => booking._id === id);
          updated.status = 'confirm';
          const newBookings = [updated, ...remaining];
          setbookings(newBookings);
        }
      });
  };
  return (
    <div>
      <h2 className="text-5xl"> Your Bookings :{bookings.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Service</th>
              <th>Date</th>
              <th>Pirce </th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingsRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleConfrim={handleConfrim}
              ></BookingsRow>
            ))}
          </tbody>
        </table>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Bookings;
