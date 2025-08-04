import React, { Component } from 'react'
import btn from '../assets/plus.png'
import search from '../assets/magnifying-glass.png'
import Popup from '../ui/popup'
import { FaEdit, FaTrash } from 'react-icons/fa';

export default class Header extends Component {
    constructor() {
        super()
        this.state = {
            title: "",
            author: "",
            price: "",
            genre: "",
            description: "",
            data: [],
            updatingItem: null,
            searchTerm: ""
        };
    }

    togglePopup = () => {
        this.setState(prev => ({
            showPopup: !prev.showPopup
        }));
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { title, author, price, genre, description, data, updatingItem } = this.state
        if (updatingItem) {
            const updateData = data.map((book) => book.id === updatingItem.id ? { ...book, title, author, genre, price, description } : book)
            this.setState({ data: updateData, updatingItem: null, title: "", author: "", genre: "", price: "", description: "", showPopup: false })
        } else {
            const newBook = {
                id: Date.now(),
                title,
                author,
                price,
                genre,
                description
            };
            this.setState({ data: [...data, newBook], title: "", author: "", price: "", genre: "", description: "", showPopup: false })
        }
    };
    handleUpdate = (book) => {
        this.setState({ title: book.title, author: book.author, genre: book.genre, description: book.description, price: book.price, updatingItem: book, showPopup: true })

    }

    handleDelete = (id) => {
        const { data } = this.state
        this.setState({ data: data.filter(item => item.id !== id) })
    }

    render() {
        const { title, author, data, price, genre, description, updatingItem, searchTerm } = this.state

        const filteredData = data.filter(book =>
            book.title.toLowerCase().startsWith(this.state.searchTerm.toLowerCase())
        );
        return (
            <header className='bg-white w-full h-20'>
                <div className='container mx-auto flex justify-between items-center'>
                    <form action="">

                    </form>
                    <div className='border flex items-center rounded-[10px] mt-5 mb-2 w-[1480px]'>
                        <input
                            type="text"
                            placeholder='Search'
                            value={searchTerm}
                            onChange={(e) => this.setState({ searchTerm: e.target.value })}
                            className='rounded-[5px] w-full h-10 p-2 outline-none'
                        />
                        <img src={search} alt="" className='h-5 pr-2' />
                    </div>
                    <div>
                        <button onClick={this.togglePopup}>
                            <img
                                src={btn}
                                alt=""
                                className='w-full h-10 border rounded-[10px] p-1 mt-4'
                            />
                        </button>
                        <Popup isShow={this.state.showPopup} onClose={this.togglePopup}>
                            <div className="bg-white p-5 shadow-lg w-[500px] h-[550px] rounded-[10px] ">
                                <form onSubmit={this.handleSubmit} action="" className='flex flex-col'>
                                    <h1 className='font-bold text-center text-2xl'>Create a Book</h1>
                                    <label htmlFor="">Title:</label><br />
                                    <input required value={title} onChange={(e) => this.setState({ title: e.target.value })} type="text" placeholder='Title' className='border rounded-[8px]  h-10 mt-[-20px] pl-2 outline-none' /><br />
                                    <label htmlFor="" className='mt-[-10px]' >Author:</label><br />
                                    <input required value={author} onChange={(e) => this.setState({ author: e.target.value })} type="text" placeholder='Author' className='border rounded-[8px] h-10 mt-[-20px] pl-2 outline-none' /><br />
                                    <label htmlFor="" className='mt-[-10px]'>Price:</label><br />
                                    <input required value={price} onChange={(e) => this.setState({ price: e.target.value })} type="number" placeholder='Price' className='border rounded-[8px] h-10 mt-[-20px] pl-2 outline-none' /><br />
                                    <label htmlFor="" className='mt-[-10px]'>genre:</label><br />
                                    <input required value={genre} onChange={(e) => this.setState({ genre: e.target.value })} type="text" placeholder='Genre' className='border rounded-[8px] h-10 mt-[-20px] pl-2 outline-none' /><br />
                                    <label htmlFor="" className='mt-[-10px]'>Description:</label><br />
                                    <textarea value={description} onChange={(e) => this.setState({ description: e.target.value })} name="" id="" className='border rounded-[8px] mt-[-20px] max-h-20 h-20 pl-2 outline-none' placeholder='Description'></textarea>
                                    <button className='border rounded-[8px] mt-3 h-10 bg-blue-500 text-white text-[20px]'>Create book</button>
                                </form>
                            </div>
                        </Popup>
                    </div>
                </div>
                <div className=' container mx-auto p-4'>
                    <table className=' w-full table-auto border border-collapse'>
                        <thead className='text-center'>
                            <tr className='bg-gray-100'>
                                <th className='border px-4 py-2'>#</th>
                                <th className='border px-4 py-2'>Title</th>
                                <th className='border px-4 py-2'>Author</th>
                                <th className='border px-4 py-2'>Price</th>
                                <th className='border px-4 py-2'>genre</th>
                                <th className='border px-4 py-2'>Description</th>
                                <th className='border px-4 py-2' colSpan={2}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filteredData?.map((book, index) => (
                                    <tr key={book.id}>
                                        <td className='border px-4 py-2 text-center'>{index + 1}</td>
                                        <td className='border px-4 py-2 text-center'>{book.title}</td>
                                        <td className='border px-4 py-2 text-center'>{book.author}</td>
                                        <td className='border px-4 py-2 text-center'>{book.price}</td>
                                        <td className='border px-4 py-2 text-center'>{book.genre}</td>
                                        <td className='border px-4 py-2 text-center'>{book.description}</td>
                                        <td onClick={() => this.handleUpdate(book)} className='border px-2 py-2 text-center'><FaEdit className='cursor-pointer mx-auto' /></td>
                                        <td onClick={() => this.handleDelete(book.id)} className='border px-2 py-2 text-center'><FaTrash className='cursor-pointer mx-auto' /></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </header>
        )
    }
}
