import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { postProduct } from '../../store/all_products';
import ProductForm from './ProductForm';
import SupplyNavBar from '../SingleProduct/SupplyNavBar/SupplyNavBar';

const ProductCreateForm = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [detailed_description, set_detailed_description] = useState('');
    const [category_id, set_category_id] = useState(0);
    const [price, setPrice] = useState('');
    const [preview_img_url, set_preview_img_url] = useState('');
    const [errors, setErrors] = useState([]);

    const handleSubmit = async e => {
        e.preventDefault();
        setErrors([]);

        const new_product = await dispatch(
            postProduct({
                title,
                description,
                detailed_description,
                category_id,
                price,
                preview_img_url
            })
        ).catch(async res => {
            const data = await res.json();
            if (data && data.errors) setErrors(Object.values(data.errors));
        });

        if (new_product) history.push(`/products/${new_product.id}`);
    };

    return (
        <>
            <SupplyNavBar />
            <ProductForm
                createForm={true}
                handleSubmit={handleSubmit}
                title={title}
                setTitle={setTitle}
                description={description}
                setDescription={setDescription}
                detailed_description={detailed_description}
                category_id={category_id}
                set_category_id={set_category_id}
                set_detailed_description={set_detailed_description}
                price={price}
                setPrice={setPrice}
                preview_img_url={preview_img_url}
                set_preview_img_url={set_preview_img_url}
                errors={errors}
                setErrors={setErrors}
            />
        </>
    );
};

export default ProductCreateForm;
