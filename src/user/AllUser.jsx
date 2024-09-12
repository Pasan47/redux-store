import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom"; 
import { getAllUsers } from '../store/userSlice'
import { useDispatch, useSelector } from "react-redux";

function AllUsers() {
    const dispatch = useDispatch();

    const users = useSelector((state) => state.user.users);
    const isLoading = useSelector((state) => state.user.loading);
    const isError = useSelector((state) => state.user.error);

    useEffect(() => {
        const displayUsers = dispatch(getAllUsers())

    }, []);

    // useEffect(() => {
    //     console.log(users[0]);
    // }, []);

    return(
        <>
            {
                isLoading ? (
                    <p>Loading....</p>
                ) : isError ? (
                    <p>Error ....</p>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Gender</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((u) => {
                                console.log(u.name);
                                console.log(u.age);
                                console.log(u.gender);
                                return(
                                    <tr>
                                        <td>{u.name}</td>
                                        <td>{u.age}</td>
                                        <td>{u.gender}</td>
                                    </tr>
                                );
                            })
                        }
                        </tbody>
                    </table>
                )
            }
        </>
    );
}

export default AllUsers;
