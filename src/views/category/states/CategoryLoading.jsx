import Spacer from '../../../components/Spacer';
import Shimmer from '../../../components/shimmer/Shimmer'
import ItemGenerator from '../../../config/ItemGenerator';
import '../category.css'

const CategoryLoading = () => {
    return (
        <div className="category-body">
            <div className="category-header">
                <Shimmer height={50} width={250}/>
                <Shimmer height={50} width={250}/>
            </div>
            <Shimmer height={60} percentWidth='90%'/>
            <Spacer height={"100px"}/>
            <Shimmer height={220} percentWidth='100%'/>
            <Spacer height={"50px"} />
            {
                ItemGenerator(length = 5).map((_, key) => {
                    return (
                        <div key={ key } style={{width: "100%"}}>
                            <div style={{height: "15px"}} key={ key }></div>
                            <Shimmer height={50} percentWidth='100%'/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CategoryLoading