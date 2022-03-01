import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from '../loader'

function Product() {
    const { id } = useParams();
    const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products/${id}`;
    let content = null;
    const [product, setproduct] = useState({
        loading: false,
        data: null
    }
    );
    useEffect(() => {
        setproduct({ 
            loading: true, 
            data: null 
        })
        axios.get(url).then(response => {
            setproduct({ 
                loading: false, 
                data: response.data 
            })
        })
    }, [url])
    if(product.loading){
        content=<Loader/>
    }
   

    if (product.data) {
        content =
            <div>
                <h1 className="text-2xl font-bold mb-3">
                    {product.data.name}
                </h1>
                <div className="p-1">
                    <img src={product.data.images[0].imageUrl}
                        alt={product.data.name} />
                </div>
                <div className="font-bold text-xl mb-3">
                    $ {product.data.price}
                </div>
                <div>
                    {product.data.description}
                </div>

            </div>
    }
    return (
        <div>
            {content}
        </div>
    )

}
export default Product;