"use client"

import { useEffect, useState } from "react";

export default function Page() {

    const [list, setList] = useState<any>([]);

    const listPhotos = async () => {

        setList([
            { id: 6, title: "Desert dunes", image: "https://example.com/desert.jpg" },
            { id: 7, title: "Waterfall in the jungle", image: "https://example.com/waterfall.jpg" },
            { id: 8, title: "Aurora borealis", image: "https://example.com/aurora.jpg" },
            { id: 9, title: "Countryside road", image: "https://example.com/countryside.jpg" },
            { id: 10, title: "City park in spring", image: "https://example.com/park.jpg" },
        ]);

    }

    useEffect(() => {

        listPhotos();

    }, [])

    return <>


        <table className="table table-sm">
            <thead className="table-dark">
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>
                {list.map((lo, li) => {

                    return <tr key={"table_" + li} className="align-middle">
                        <td>{lo.id}</td>
                        <td>{lo.title}</td>
                        <td>{lo.image}</td>
                    </tr>

                })}
            </tbody>

        </table>
    </>;

}