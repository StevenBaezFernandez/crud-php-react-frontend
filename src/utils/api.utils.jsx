const getProducts = () => {
    

    fetch("http://localhost/react-api/api.php")
     .then(resp => resp.json)
     .then(data => data);
};