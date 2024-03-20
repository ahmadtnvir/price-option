import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    // console.log(option);
    const {id,name,price,features}= option;
    return (
        <div className='bg-blue-600 p-5 space-y-4 rounded-xl flex flex-col'>
            <h1 className=' text-center'>
                <span className='text-7xl font-extrabold'>{price}$</span>
                <span className='text-2xlr'>/Month</span>
            </h1>
            <h4  className='text-4xl w-full text- flex-grow'>{name}</h4>
            {
                features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
            }
            <button className='w-full text-center bg-green-600 hover:bg-green-900 py-3 rounded-full'>Buy Now</button>
        </div>
    );
};
PriceOption.propTypes = {
    option: PropTypes.object,
}
export default PriceOption;