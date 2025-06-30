import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
        <div className="home_container">
        <img className='home_image'
          src="https://images-eu.ssl-images-amazon.com/images/G/31/sthaneka/BS_2Xvnqkm._CB792239020_.jpg"
          alt="Home"
        />
        <div className='home_row'>
            <Product
              id="12341"
              title="The Product Startup"
              image="\assets\wall_lamp_amazone.jpg"
              price={19.99}
              rating={5}
            />
            <Product
              id="12342"
              title="The Product Startup"
              image="\assets\wall_lamp_amazone.jpg"
              price={29.99}
              rating={3}
            />
        </div>
        <div className='home_row'>
            <Product 
              id="12343"
              title="The Product Startup"
              image="\assets\wall_lamp_amazone.jpg"
              price={29.99}
              rating={3}
            />
            <Product
              id="12344"
              title="The Product Startup"
              image="\assets\wall_lamp_amazone.jpg"
              price={39.99}
              rating={4}
            />
            <Product
              id="12345"
              title="The Product Startup"
              image="\assets\wall_lamp_amazone.jpg"
              price={49.99}
              rating={5}
            />
        </div>
        <div className='home_row'>
            <Product
              id="12346"
              title="The Product Startup"
              image="\assets\wall_lamp_amazone.jpg"
              price={59.99}
              rating={3}
            />
        </div>

        </div>
    </div>
  )
}

export default Home