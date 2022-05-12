import './update-form.style.css';

const UpdateForm = ({viewForm, onUpdateProductToEdit, onUpdateSubmit, updateFormValues}) => (
    <form className={`${viewForm.update ? 'active' : ''} update-form`}>
        <h2 className='update-form-title'>Update Products</h2>
        <input 
        className='input-text' 
        onChange={onUpdateProductToEdit} 
        value={updateFormValues.name}  
        type='text' 
        placeholder='Name' 
        name='name'
        id='name'/>
        <input 
        className='input-text' 
        onChange={onUpdateProductToEdit} 
        value={updateFormValues.description} 
        type='text' 
        placeholder='Description' 
        name='description'
        id='description'/>
        <input 
        className='input-text' 
        onChange={onUpdateProductToEdit} 
        value={updateFormValues.quantity} 
        type='number' 
        placeholder='Quantity' 
        name='quantity'
        id='quantity'/>
        <input 
        className='input-text' 
        onChange={onUpdateProductToEdit} 
        value={updateFormValues.price} 
        type='number' 
        placeholder='Price' 
        name='price'
        id='price'/>
        <button onClick={onUpdateSubmit}  className='submit-btn' type='submit'>Submit</button>
    </form>  
);

export default UpdateForm;