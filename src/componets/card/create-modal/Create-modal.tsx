import { useEffect, useState } from "react";
import { useFoodDataMutate } from "../../../hooks/useFoodDataMutate";
import { FoodData } from "../../../interface/FoodData";
import './modal.css'

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}

interface ModalProps {
    closeModal(): void
}

const Input = ({label, value, updateValue}: InputProps) => {
    return(
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}




export function CreateModal({closeModal}: ModalProps){
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image,setImage] = useState("");
    const { mutate, isSuccess, isPending} = useFoodDataMutate();
                     
    const submit = () => {
        const foodData: FoodData = {
            title,
            price,
            image
        }
        mutate(foodData)
    }

    useEffect(() => {
        if(!isSuccess) return
        closeModal()
        
    }, [isSuccess])

    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadatre um novo item no cardápio</h2>
                <form className="input-container">
                    <label>
                    <Input label="titulo" value={title} updateValue={setTitle}/>
                    <Input label="preço" value={price} updateValue={setPrice}/>
                    <Input label="imagem" value={image} updateValue={setImage}/>
                    </label>
                    <button onClick={submit} className="btn-secondary">{isPending? "Postando" : "Postar"}</button>
                </form>
                
            </div>
        </div>
    )
}