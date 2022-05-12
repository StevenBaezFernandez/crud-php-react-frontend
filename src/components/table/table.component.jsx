import './table.style.css';

const Table = ({products, onToggleUpdateForm, onGetProductToEdit, onDelete}) => {
    return (
        <div className='Table-container'>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    products.map((product)=>{
                    const {id, name, description, quantity, price} = product;
                    return(
                        <tr key={id}> 
                        <td>{name}</td>
                        <td>{description}</td>
                        <td>{quantity}</td>
                        <td>$RD {price}</td>
                        <td>
                            <button onClick={()=>{                                
                                onGetProductToEdit(product);
                                onToggleUpdateForm();
                            }} className='actions-btn'>Editar</button>
                            <button onClick={()=> onDelete(product.id)} className='actions-btn'>Eliminar</button>
                        </td>
                        </tr>
                    );
                    })
                }
                </tbody>
            </table>
        </div>
    );
};

export default Table;
