import { useEffect, useState } from 'react';
import Table from './components/table/table.component';
import AddForm from './components/add-form/add-form.component';
import UpdateForm from './components/update-form/update-form.component';
import './App.css';
import icon from './assets/close.png';

function App() {

  const [viewForm, setViewForm] = useState({add: false, update: true});
  const [viewSidePanel, setViewSidePanel] = useState(false);
  const [products, setProducts] = useState([]);
  const [addFormvalues, setAddFormValues] = useState({
    name: '',
    description: '',
    quantity: '',
    price: ''
  }); 
  const [updateFormValues, setUpdateFormValues] = useState({
    name: '',
    description: '',
    quantity: '',
    price: ''
  });

  const getData = () => {
    fetch(`http://localhost/react-api/api.php?id=${updateFormValues.id}`)
     .then(resp => resp.json())
     .then(data => {
      setProducts(data);
     });
  };
  useEffect(()=>{
    getData();        
  });

  const onToggleAddForm = () => {
    setViewSidePanel(true);
    setViewForm({add: true, update: false});
  };
  const onToggleUpdateForm = () => {
    setViewSidePanel(true);
    setViewForm({add: false, update: true});
  };
  const onAddSubmit = (event) => {
    event.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(addFormvalues)
    };
    fetch("http://localhost/react-api/api.php", requestOptions)
    .then(res => res.json())
    .then(data => {
      getData();
      setAddFormValues({
        name: '',
        description: '',
        quantity: '',
        price: ''
      });
      setViewSidePanel(false);
      setTimeout(() => {
        alert("Producto agregado correctament!")
      }, 500);
    });

  }
  const onUpdateSubmit = (event) => {
    event.preventDefault();
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updateFormValues)
    };
    fetch(`http://localhost/react-api/api.php?id=${updateFormValues.id}`, requestOptions)
    .then(res => res.json())
    .then(data => {
      getData();
      setUpdateFormValues({
        name: '',
        description: '',
        quantity: '',
        price: ''
      });
      setViewSidePanel(false);
      setTimeout(() => {
        alert("Producto editado correctament!")
      }, 500);
    });
  }
  const onDetele = (productToDelete) => {
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    };
    fetch(`http://localhost/react-api/api.php?id=${productToDelete}`, requestOptions)
    .then(resp => resp.json())
    .then(data => {
      getData();
    });
  }
  const onGetProductToEdit = (productToEdit) => {    
    setUpdateFormValues({...productToEdit});
  }
  const onUpdateProductToEdit = (event) =>{
    let value = event.target.value;
    let propertyToSet = event.target.name;
    setUpdateFormValues({...updateFormValues, [propertyToSet]: value });

  } 
  const onSetAddFormValues = (event) => {
    let value = event.target.value;
    let propertyToSet = event.target.name;
    setAddFormValues({...addFormvalues, [propertyToSet]: value});
  };


  return (
    <div className="App">
      <h1 className='title'>CRUD with react and PHP</h1>
      <button onClick={onToggleAddForm} className='button'>Add new product</button>
      <div className={`${viewSidePanel ? 'active':''} side-panel`}>
        <img src={icon} alt='close-icon' onClick={()=>{setViewSidePanel(false)}} className='side-panel-close-icon'/>

        <AddForm 
        viewForm={viewForm} 
        onSetAddFormValues={onSetAddFormValues} 
        addFormvalues={addFormvalues}
        onAddSubmit={onAddSubmit}/>   

        <UpdateForm 
        viewForm={viewForm} 
        updateFormValues={updateFormValues}
        onGetProductToEdit={onGetProductToEdit}
        onUpdateProductToEdit={onUpdateProductToEdit}
        onUpdateSubmit={onUpdateSubmit}/>
                    
      </div>      
      <Table 
      products={products} 
      onGetProductToEdit={onGetProductToEdit}
      onDelete={onDetele}
      onToggleUpdateForm={onToggleUpdateForm}/>
      
    </div>
  );
};

export default App;
