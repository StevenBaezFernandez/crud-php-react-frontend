
import './add-form.style.css';

const AddForm = ({onAddSubmit, viewForm, onSetAddFormValues, addFormvalues}) => (
    <form className={`${viewForm.add ? 'active' : ''} add-form`}>
        <h2 className='add-form-title'>Add Products</h2>
        <input 
        onChange={onSetAddFormValues} 
        className='input-text' 
        type='text' 
        placeholder='Name' 
        name='name'
        value={addFormvalues.name}
        id='name'/>
        <input 
        onChange={onSetAddFormValues} 
        className='input-text' 
        type='text' 
        placeholder='Description' 
        name='description'
        value={addFormvalues.description}
        id='description'/>
        <input 
        onChange={onSetAddFormValues} 
        className='input-text' 
        type='number' 
        placeholder='Quantity' 
        name='quantity'
        value={addFormvalues.quantity}
        id='quantity'/>
        <input 
        onChange={onSetAddFormValues} 
        className='input-text' 
        type='number' 
        placeholder='Price' 
        value={addFormvalues.price}
        name='price'
        id='price'/>
        <button onClick={onAddSubmit}  className='submit-btn' type='submit'>Submit</button>
    </form>  
);

export default AddForm;