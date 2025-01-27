"use client"

import { useEffect, useState } from "react";

export default function Page() {

    const [list, setList] = useState<any>([]);
    const [search, setSearch] = useState("toronto");

    const searchPhotos = async () => {

        console.log(search);

        setList([
            { id: 1, title: "Sunset over the mountains", image: "https://example.com/sunset.jpg" },
            { id: 2, title: "City skyline at night", image: "https://example.com/city.jpg" },
            { id: 3, title: "Forest in autumn", image: "https://example.com/forest.jpg" },
            { id: 4, title: "Beach during the day", image: "https://example.com/beach.jpg" },
            { id: 5, title: "Snowy mountain peak", image: "https://example.com/snow.jpg" },
        ]);

    }
    const likePhoto = async (id: string) => {

        console.log(id);

    }

    useEffect(() => {

        searchPhotos();

    }, [])


    return <>

        <form className="mb-2" onSubmit={(e) => {
            e.preventDefault();
            searchPhotos()
        }}>
            <div className="input-group">
                <input className="form-control" onChange={(e) => setSearch(e.target.value)} value={search} />
                <button className="btn btn-primary">
                    Search
                </button>
            </div>
        </form>

        <table className="table table-sm">
            <thead className="table-dark">
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Image</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {list.map((lo, li) => {

                    return <tr key={"table_" + li} className="align-middle">
                        <td>{lo.id}</td>
                        <td>{lo.title}</td>
                        <td>{lo.image}</td>
                        <td>
                            <button className="btn btn-primary btn-sm" onClick={(e) => {
                                likePhoto(lo.id);
                            }}>
                                Like
                            </button>
                        </td>
                    </tr>

                })}
            </tbody>

        </table>
    </>;

}