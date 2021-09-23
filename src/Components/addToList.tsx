import React, { useState } from 'react'
import { IState as Props } from '../App'

interface IProps {
    people: Props['people'];
    setPeople: React.Dispatch<React.SetStateAction<Props['people']>>
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {

    const [input, setInput] = useState({
        name: '',
        age: '',
        img: '',
        note: ''
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {

        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleAddClick = (): void => {
        if (
            !input.name ||
            !input.age ||
            !input.img
        ) {
            return;
        }
        setPeople([
            ...people,
            {
                name: input.name,
                age: parseInt(input.age),
                url: input.img,
                note: input.note
            }
        ]);

        setInput({
            name: '',
            age: '',
            img: '',
            note: ''
        })
    }
    return (
        <div className="AddToList">
            <input
                type="text"
                placeholder="Name"
                className="AddToList-input"
                value={input.name}
                name="name"
                onChange={handleInputChange}
            />
            <input
                type="number"
                placeholder="Age"
                className="AddToList-input"
                value={input.age}
                name="age"
                onChange={handleInputChange}
            />
            <input
                type="text"
                placeholder="Image URL"
                className="AddToList-input"
                value={input.img}
                name="img"
                onChange={handleInputChange}
            />
            <textarea
                placeholder="Note"
                className="AddToList-input"
                value={input.note}
                onChange={handleInputChange}
                name="note"
            />
            <button
                className='AddToList-btn'
                onClick={handleAddClick}
            >
                Add to List
            </button>
        </div>
    )
}

export default AddToList;