function Hero(){

    const saludar = () => {
            alert('HOLA');
    }

    return(
        <>
            <h1>Bienvenidos a mi tienda</h1>
            <button onClick={saludar}>Saludar</button>
        </>
    )
}

export default Hero;