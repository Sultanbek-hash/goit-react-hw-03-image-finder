import {Triangle} from 'react-loader-spinner';

export default function Loader() {
    return(
        <div className='Loader'>
    <Triangle
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
    />
</div>
    )
}