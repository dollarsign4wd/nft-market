import { useEffect, useState } from "react"
import Sidebar from "../components/Sidebar"
import {Link} from "react-router-dom"
import http from "../http";
export default function CollectionsPage() {
    const [collections,setCollections]= useState([]);

    async function getCollections() {
        const { data } = await http.get("/collections")
        setCollections(data)}
    useEffect(() => {
        getCollections()
      }, [])
    return <>

        <div>
            {/* Banner */}

            {/* Dashboard */}
            <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
                {/* Vertical Navbar */}
                <Sidebar></Sidebar>
                {/* Main content */}
                <div className="h-screen flex-grow-1 overflow-y-lg-auto">
                    {/* Header */}
                    <header className="bg-surface-primary border-bottom pt-6">
                        <div className="container-fluid">
                            <div className="mb-npx">
                                <div className="row align-items-center">
                                    <div className="col-sm-6 col-12 mb-4 mb-sm-0 pb-5">
                                        {/* Title */}
                                        
                                    </div>

                                </div>
                                {/* Nav */}

                            </div>
                        </div>
                    </header>
                    {/* Main */}
                    <main className="py-6 bg-surface-secondary">
                        <div className="container-fluid">
                        
                            <div className="card shadow border-0 mb-7">
                                <div className="card-header d-flex justify-content-between align-items-center ">
                                    <h5 className="mb-0">All Collections</h5>
                                   <Link to={"/submit-collection"}> <button className="btn btn-primary">Submit Collection</button></Link>
                                </div>
                                <div className="table-responsive">
                                    <table className="table table-hover table-nowrap">
                                        <thead className="thead-light">
                                            <tr>
                                                <th scope="col">User</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Collection</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Status</th>
                                                <th />
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {collections.map(x => {
                                        return  <tr> 
                                        <td>
                                            <img alt="..." src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                                            <a className="text-heading font-semibold " href="#">
                                              {x.owner && x.owner.username }
                                            </a>
                                        </td>
                                        <td>
                                         {x.createdAt && x.createdAt.substr(0,10)}
                                        </td>
                                        <td>
                                            <img alt="..." src={x.image} className="avatar avatar-xs rounded-circle me-2 collection-image" />
                                            <a className="text-heading font-semibold ms-5" href="#">
                                                {x.title}
                                                
                                            </a>
                                        </td>
                                        <td>
                                            {x.price} Eth
                                        </td>
                                        <td>
                                            <span className="badge badge-lg badge-dot">
                                                <i className="bg-success" />Scheduled
                                            </span>
                                        </td>
                                        <td className="text-end">
                                            <a href="#" className="btn btn-sm btn-neutral">View</a>
                                            <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                                                {/* <i className="bi bi-trash" /> */}
                                            </button>
                                        </td>
                                    </tr>
                                        })}
                                          
                                        </tbody>
                                    </table>
                                </div>
                                <div className="card-footer border-0 py-5">
                                    <span className="text-muted text-sm">Showing 10 items out of 250 results found</span>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>

    </>
}