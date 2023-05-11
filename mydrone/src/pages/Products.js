import { Card } from "react-bootstrap";
import products from "./products.json";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./imgSet.css"

function scrollTo(id) {
  const element = document.getElementById(id);
  element.scrollIntoView({ behavior: 'smooth' });
}


const Products = () => {
  const handleClick = () => {
    scrollTo('Toy drone');
  };


  return (
    <>
    <div style={{ marginTop: '80px' }}>
      <div style={{ position: 'fixed',left: "30px", top: '180px', float: 'left', width: '200px', height: '50vh', backgroundColor: '#87CEFA', padding: '20px', lineHeight: '2', borderRadius: '10px' }}>
        <h3 style={{ marginBottom: '20px' }}>category</h3>
        <ul style={{ listStyleType: 'none', padding: '0' }}>
        <a href="#Toy drone" style={{ color: 'black', textDecoration: 'none' }} onClick={handleClick}><li class="container" style={{ marginBottom: '30px' }}>Toy</li></a>
        <a href="#Racing drone" style={{ color: 'black', textDecoration: 'none' }}><li class="container" style={{ marginBottom: '30px' }}>Racing</li></a>
        <a href="#photographic drone" style={{ color: 'black', textDecoration: 'none' }}><li class="container" style={{ marginBottom: '30px' }}>photographic</li></a>
        </ul>
      </div>
    </div>

    <div class="gallery" className="text-center" style = {{marginLeft: '20%'}}>
        <h1>Products</h1>
        {products.map((product) => (
          <Card key={product.name}  id = {product.name}>
            <p></p><p></p><p></p><p></p>
            <Card.Body>
              <Card.Title><h2>{product.name}</h2></Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>{`Price: ${product.price}`}</Card.Text>
            </Card.Body>
            
            <div style={{ textAlign: 'center' }} >
            <a href={product.src}><figure class="snip1273">
            <Card.Img variant="top" src={product.image} style={{ width: '300px' }} />
            <figcaption> 
            <h2>{product.disc_name}</h2>
            <p>{product.disc_price}원</p>
            <p>{product.score}point</p>
            </figcaption></figure></a>

            <a href={product.src1}><figure class="snip1273">
            <Card.Img variant="top" src={product.image1} style={{ width: '300px' }} />
            <figcaption> 
            <h2>{product.disc_name1}</h2>
            <p>{product.disc_price1}원</p>
            <p>{product.score1}point</p>
            </figcaption></figure></a>
            </div>
            

            <p></p><p></p><p></p><p></p><p></p>
          </Card>
        ))}
      </div></>
  );
}

export default Products;
